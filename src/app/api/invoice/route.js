import { NextResponse } from "next/server";
import invoice from "@/app/db/invoice.json";

export async function GET() {
  return NextResponse.json({ invoice: invoice.data });
}
