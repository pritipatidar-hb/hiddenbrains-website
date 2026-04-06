"use client";

import { useEffect, useMemo, useState } from "react";
import { LottieAnimation } from "../../components/shared/LottieAnimation";

export type LottieFileItem = {
    id: string;
    relativePath: string; // path relative to /json (posix style)
    name: string;
    sizeBytes: number;
};

type LottieJson = Record<string, any>;

function formatBytes(bytes: number): string {
    if (!Number.isFinite(bytes)) return "-";
    const units = ["B", "KB", "MB", "GB"];
    let value = bytes;
    let i = 0;
    while (value >= 1024 && i < units.length - 1) {
        value /= 1024;
        i++;
    }
    return `${value.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

function extractDetails(data: LottieJson) {
    const w = typeof data.w === "number" ? data.w : undefined;
    const h = typeof data.h === "number" ? data.h : undefined;
    const fr = typeof data.fr === "number" ? data.fr : undefined;
    const ip = typeof data.ip === "number" ? data.ip : undefined;
    const op = typeof data.op === "number" ? data.op : undefined;
    const layersCount = Array.isArray(data.layers) ? data.layers.length : undefined;
    const assetsCount = Array.isArray(data.assets) ? data.assets.length : undefined;
    const markersCount = Array.isArray(data.markers) ? data.markers.length : undefined;
    const name = typeof data.nm === "string" ? data.nm : undefined;
    const version = typeof data.v === "string" ? data.v : undefined;
    const durationSeconds =
        fr && typeof ip === "number" && typeof op === "number" ? Math.max(0, (op - ip) / fr) : undefined;

    return {
        name,
        version,
        w,
        h,
        fr,
        ip,
        op,
        durationSeconds,
        layersCount,
        assetsCount,
        markersCount
    };
}

function Modal({
    open,
    title,
    onClose,
    onPrev,
    onNext,
    canPrev,
    canNext,
    children
}: {
    open: boolean;
    title: string;
    onClose: () => void;
    onPrev?: () => void;
    onNext?: () => void;
    canPrev?: boolean;
    canNext?: boolean;
    children: React.ReactNode;
}) {
    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft" && onPrev && canPrev) onPrev();
            if (e.key === "ArrowRight" && onNext && canNext) onNext();
        };
        document.addEventListener("keydown", onKeyDown);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [open, onClose, onPrev, onNext, canPrev, canNext]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50">
            <button aria-label="Close modal" className="absolute inset-0 bg-black/50" onClick={onClose} type="button" />
            <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="w-full max-w-5xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                        <div className="min-w-0">
                            <div className="text-sm text-slate-500">Preview</div>
                            <div className="text-lg font-bold text-slate-900 truncate">{title}</div>
                        </div>
                        <div className="shrink-0 flex items-center gap-2">
                            <button
                                type="button"
                                onClick={onPrev}
                                disabled={!canPrev || !onPrev}
                                aria-disabled={!canPrev || !onPrev}
                                className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white"
                                title="Previous (←)"
                            >
                                ←
                            </button>
                            <button
                                type="button"
                                onClick={onNext}
                                disabled={!canNext || !onNext}
                                aria-disabled={!canNext || !onNext}
                                className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-white"
                                title="Next (→)"
                            >
                                →
                            </button>
                            <button
                                type="button"
                                onClick={onClose}
                                className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                    <div className="p-5">{children}</div>
                </div>
            </div>
        </div>
    );
}

export default function SvgsDocClient({ items, initialQuery = "" }: { items: LottieFileItem[]; initialQuery?: string }) {
    const [query, setQuery] = useState(initialQuery);
    const [selected, setSelected] = useState<LottieFileItem | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<LottieJson | null>(null);
    const [showRaw, setShowRaw] = useState(false);
    const [cardCache, setCardCache] = useState<Record<string, { data?: LottieJson; error?: string; loading?: boolean }>>(
        {}
    );

    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return items;
        return items.filter((i) => i.relativePath.toLowerCase().includes(q) || i.name.toLowerCase().includes(q));
    }, [items, query]);

    const ensureCardLoaded = (relativePath: string) => {
        setCardCache((prev) => {
            const existing = prev[relativePath];
            if (existing?.data || existing?.loading || existing?.error) return prev;
            return { ...prev, [relativePath]: { loading: true } };
        });

        const url = `/api/lottie?file=${encodeURIComponent(relativePath)}`;
        fetch(url)
            .then(async (res) => {
                if (!res.ok) {
                    const msg = await res.text().catch(() => "");
                    throw new Error(msg || `Failed to load (${res.status})`);
                }
                return res.json();
            })
            .then((json) => {
                setCardCache((prev) => ({ ...prev, [relativePath]: { data: json } }));
            })
            .catch((e: any) => {
                setCardCache((prev) => ({ ...prev, [relativePath]: { error: e?.message || "Failed to load" } }));
            });
    };

    useEffect(() => {
        if (!selected) return;
        setLoading(true);
        setError(null);
        setData(null);
        setShowRaw(false);

        const controller = new AbortController();
        const url = `/api/lottie?file=${encodeURIComponent(selected.relativePath)}`;

        fetch(url, { signal: controller.signal })
            .then(async (res) => {
                if (!res.ok) {
                    const msg = await res.text().catch(() => "");
                    throw new Error(msg || `Failed to load (${res.status})`);
                }
                return res.json();
            })
            .then((json) => setData(json))
            .catch((e: any) => {
                if (e?.name === "AbortError") return;
                setError(e?.message || "Failed to load animation");
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [selected]);

    const details = useMemo(() => (data ? extractDetails(data) : null), [data]);
    const selectedIndex = useMemo(() => {
        if (!selected) return -1;
        const idxInFiltered = filtered.findIndex((x) => x.relativePath === selected.relativePath);
        if (idxInFiltered !== -1) return idxInFiltered;
        return items.findIndex((x) => x.relativePath === selected.relativePath);
    }, [filtered, items, selected]);

    const activeList = useMemo(() => {
        if (!selected) return filtered;
        const inFiltered = filtered.some((x) => x.relativePath === selected.relativePath);
        return inFiltered ? filtered : items;
    }, [filtered, items, selected]);

    const canPrev = selectedIndex > 0;
    const canNext = selectedIndex !== -1 && selectedIndex < activeList.length - 1;
    const goPrev = () => {
        if (!selected) return;
        const idx = activeList.findIndex((x) => x.relativePath === selected.relativePath);
        if (idx <= 0) return;
        setSelected(activeList[idx - 1]);
    };
    const goNext = () => {
        if (!selected) return;
        const idx = activeList.findIndex((x) => x.relativePath === selected.relativePath);
        if (idx === -1 || idx >= activeList.length - 1) return;
        setSelected(activeList[idx + 1]);
    };

    return (
        <>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div className="text-sm text-slate-600">
                    Showing <span className="font-semibold text-slate-900">{filtered.length}</span> of{" "}
                    <span className="font-semibold text-slate-900">{items.length}</span> JSON files
                </div>
                <div className="w-full md:w-[420px]">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by filename or folder…"
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((item) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelected(item)}
                        onMouseEnter={() => ensureCardLoaded(item.relativePath)}
                        onFocus={() => ensureCardLoaded(item.relativePath)}
                        className="text-left group rounded-2xl border border-slate-200 bg-white hover:border-orange-300 hover:shadow-lg transition-all p-5"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                                <div className="text-xs font-semibold tracking-widest text-orange-600 uppercase">JSON / Lottie</div>
                                <div className="mt-2 font-bold text-slate-900 truncate">{item.name}</div>
                                <div className="mt-1 text-xs text-slate-500 truncate font-mono">{item.relativePath}</div>
                            </div>
                            <div className="shrink-0 rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-700">
                                {formatBytes(item.sizeBytes)}
                            </div>
                        </div>

                        <div className="mt-4 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 h-[140px] overflow-hidden flex items-center justify-center">
                            {cardCache[item.relativePath]?.data ? (
                                <LottieAnimation
                                    animationData={cardCache[item.relativePath]!.data}
                                    className="w-full h-[140px]"
                                />
                            ) : cardCache[item.relativePath]?.loading ? (
                                <div className="w-full h-full bg-slate-100 animate-pulse" />
                            ) : cardCache[item.relativePath]?.error ? (
                                <div className="text-xs text-slate-500 px-4 text-center">Preview unavailable</div>
                            ) : (
                                <div className="text-sm text-slate-400 group-hover:text-slate-500 transition-colors">
                                    Hover to load preview
                                </div>
                            )}
                        </div>
                    </button>
                ))}
            </div>

            <Modal
                open={!!selected}
                title={selected ? selected.relativePath : "Preview"}
                onPrev={goPrev}
                onNext={goNext}
                canPrev={canPrev}
                canNext={canNext}
                onClose={() => {
                    setSelected(null);
                    setData(null);
                    setError(null);
                    setLoading(false);
                }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <div className="lg:col-span-3">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            {loading && <div className="h-[420px] rounded-xl bg-slate-100 animate-pulse" />}
                            {!loading && error && (
                                <div className="h-[420px] rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-sm text-slate-600 px-6 text-center">
                                    {error}
                                </div>
                            )}
                            {!loading && !error && data && (
                                <LottieAnimation
                                    animationData={data}
                                    className="w-full h-[420px] rounded-xl bg-slate-50 border border-slate-200"
                                />
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <div className="flex items-center justify-between gap-3">
                                <div className="font-bold text-slate-900">Details</div>
                                <button
                                    type="button"
                                    onClick={() => setShowRaw((v) => !v)}
                                    className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                                    disabled={!data}
                                    aria-disabled={!data}
                                >
                                    {showRaw ? "Hide raw JSON" : "Show raw JSON"}
                                </button>
                            </div>

                            <div className="mt-4 grid grid-cols-1 gap-3 text-sm">
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">File size</span>
                                    <span className="font-semibold text-slate-900">
                                        {selected ? formatBytes(selected.sizeBytes) : "-"}
                                    </span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Name (nm)</span>
                                    <span className="font-semibold text-slate-900 truncate">{details?.name ?? "-"}</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Version (v)</span>
                                    <span className="font-semibold text-slate-900">{details?.version ?? "-"}</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Canvas</span>
                                    <span className="font-semibold text-slate-900">
                                        {details?.w && details?.h ? `${details.w} × ${details.h}` : "-"}
                                    </span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Frame rate (fr)</span>
                                    <span className="font-semibold text-slate-900">{details?.fr ?? "-"}</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Frames (ip → op)</span>
                                    <span className="font-semibold text-slate-900">
                                        {typeof details?.ip === "number" && typeof details?.op === "number"
                                            ? `${details.ip} → ${details.op}`
                                            : "-"}
                                    </span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Duration</span>
                                    <span className="font-semibold text-slate-900">
                                        {typeof details?.durationSeconds === "number"
                                            ? `${details.durationSeconds.toFixed(2)}s`
                                            : "-"}
                                    </span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Layers</span>
                                    <span className="font-semibold text-slate-900">{details?.layersCount ?? "-"}</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Assets</span>
                                    <span className="font-semibold text-slate-900">{details?.assetsCount ?? "-"}</span>
                                </div>
                                <div className="flex justify-between gap-4">
                                    <span className="text-slate-500">Markers</span>
                                    <span className="font-semibold text-slate-900">{details?.markersCount ?? "-"}</span>
                                </div>
                            </div>

                            {showRaw && data && (
                                <div className="mt-4">
                                    <pre className="max-h-[360px] overflow-auto rounded-xl border border-slate-200 bg-slate-50 p-3 text-[11px] leading-relaxed text-slate-700">
                                        {JSON.stringify(data, null, 2)}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

