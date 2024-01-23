import { NextResponse } from "next/server";
import document from "@/app/db/document.json";

export async function GET() {
  return NextResponse.json({ document: document.data });
}
