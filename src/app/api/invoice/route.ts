importimport { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-08-16",
});

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const invoices = await stripe.invoices.list({
    customer: session.user.stripeCustomerId, // You may need to fetch this from your DB
    limit: 10,
  });
  return NextResponse.json({ invoices: invoices.data });
}
