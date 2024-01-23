import { NextResponse } from "next/server";
import account from "@/app/db/account.json";

export async function GET() {
  return NextResponse.json({ account: account.data });
}
