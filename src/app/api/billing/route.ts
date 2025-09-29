import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { NextResponse } from "next/server";
import { getUserPlan } from "@/data/user-plan";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const plan = await getUserPlan(session.user.email);
  return NextResponse.json({ plan });
}
