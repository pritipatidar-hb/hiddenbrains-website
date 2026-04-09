import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(
    request: NextRequest,
    props: { params: Promise<{ slug: string }> }
) {
    const params = await props.params;
    const { slug } = params;

    try {
        const filePath = path.join(process.cwd(), "assets", slug);

        if (!fs.existsSync(filePath)) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const htmlContent = fs.readFileSync(filePath, "utf-8");

        return new NextResponse(htmlContent, {
            status: 200,
            headers: {
                "Content-Type": "text/html; charset=utf-8",
            },
        });
    } catch (error) {
        console.error("Error serving html file:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
