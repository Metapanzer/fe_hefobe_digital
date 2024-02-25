import { accounts } from "@/app/db/account.json";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  // Dummy authentication logic (replace it with your authentication logic)
  let user = accounts.filter(
    (account) => account.email === email && account.password === password
  )[0];

  if (user.length === 0) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  user = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    userType: user.userType,
    quota: user.quota,
    createdDate: user.createdDate,
    modifyDate: user.modifyDate,
    id: user.id,
  };
  // Dummy token generation (replace it with your token generation logic)
  const token = "dummy_token";

  return NextResponse.json({ user, token }, { status: 200 });
}
