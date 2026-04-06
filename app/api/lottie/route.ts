import { NextResponse } from "next/server";
import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const file = searchParams.get("file");

    if (!file) {
        return new NextResponse("Missing `file` query param", { status: 400 });
    }

    // Ensure the requested file stays within /json (prevent path traversal).
    const jsonDirAbs = path.join(process.cwd(), "json");
    const requestedAbs = path.resolve(jsonDirAbs, file);

    const jsonDirAbsNorm = jsonDirAbs.toLowerCase();
    const requestedAbsNorm = requestedAbs.toLowerCase();
    if (!requestedAbsNorm.startsWith(jsonDirAbsNorm + path.sep) && requestedAbsNorm !== jsonDirAbsNorm) {
        return new NextResponse("Invalid path", { status: 400 });
    }

    if (!requestedAbs.toLowerCase().endsWith(".json")) {
        return new NextResponse("Only .json files are allowed", { status: 400 });
    }

    try {
        const raw = await readFile(requestedAbs, "utf8");
        const json = JSON.parse(raw);
        return NextResponse.json(json);
    } catch (e: any) {
        return new NextResponse(e?.message || "Failed to load JSON", { status: 500 });
    }
}

