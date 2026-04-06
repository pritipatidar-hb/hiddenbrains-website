import { readdir, stat } from "node:fs/promises";
import path from "node:path";
import SvgsDocClient, { type LottieFileItem } from "./svgsDocClient";

async function collectJsonFiles(dirAbs: string, baseAbs: string): Promise<LottieFileItem[]> {
    const entries = await readdir(dirAbs, { withFileTypes: true });
    const items: LottieFileItem[] = [];

    for (const entry of entries) {
        const entryAbs = path.join(dirAbs, entry.name);
        if (entry.isDirectory()) {
            items.push(...(await collectJsonFiles(entryAbs, baseAbs)));
            continue;
        }

        if (!entry.isFile() || !entry.name.toLowerCase().endsWith(".json")) continue;
        const relPath = path.relative(baseAbs, entryAbs).split(path.sep).join("/");
        const s = await stat(entryAbs);

        items.push({
            id: relPath,
            relativePath: relPath,
            name: entry.name,
            sizeBytes: s.size
        });
    }

    return items;
}

export default async function SvgsDocPage({
    searchParams
}: {
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
    const jsonDirAbs = path.join(process.cwd(), "json");
    const files = await collectJsonFiles(jsonDirAbs, jsonDirAbs);

    const sp = (await searchParams) ?? {};
    const qRaw = Array.isArray(sp.q) ? sp.q[0] : sp.q;
    const q = (qRaw ?? "").trim().toLowerCase();
    const visibleFiles = q
        ? files.filter((f) => f.relativePath.toLowerCase().includes(q) || f.name.toLowerCase().includes(q))
        : files;

    visibleFiles.sort((a, b) => a.relativePath.localeCompare(b.relativePath, undefined, { sensitivity: "base" }));

    return (
        <div className="min-h-screen bg-white">
            <div className="container px-6 mx-auto py-12 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900">JSON / Lottie Preview</h1>
                    <p className="text-slate-600 mt-2">
                        Browse animations from <span className="font-mono">/json</span>. Click any card to open a full preview and details.
                    </p>
                </div>

                <SvgsDocClient items={visibleFiles} initialQuery={qRaw ?? ""} />
            </div>
        </div>
    );
}
