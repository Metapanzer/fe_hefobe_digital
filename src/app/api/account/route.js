import { accounts } from "@/app/db/account.json";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  console.log(email, password);

  // Dummy authentication logic (replace it with your authentication logic)
  const user = accounts.filter(
    (account) => account.email === email && account.password === password
  );

  if (user.length === 0) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // Dummy token generation (replace it with your token generation logic)
  const token = "dummy_token";

  return NextResponse.json({ user, token }, { status: 200 });
}
