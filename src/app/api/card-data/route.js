import { NextResponse } from "next/server";
import generateJWT from "@/lib/generateJWT";

export async function GET() {
  try {
    const jwt = generateJWT(
      process.env.LL_API_KEY,
      process.env.LL_API_SECRET,
      process.env.LL_USERNAME
    );
    const response = await fetch(
      `${process.env.URL_CAMPAIGN}${process.env.URL_PROGRAM}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: jwt,
        },
      }
    );
    const data = await response.json();
    return NextResponse.json({
      business: data.business.name,
      collectValue: data.collectValue,
      description: data.description,
      terms: data.terms,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to fetch card data" }, { status: 500 });
  }
}
