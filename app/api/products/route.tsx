import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const apiKey = process.env.PRINTFUL_API_KEY;
    const storeId = process.env.PRINTFUL_STORE_ID;

    if (!apiKey || !storeId) {
      throw new Error("API Key or Store ID is missing in environment variables.");
    }

    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("id");

    let url = "https://api.printful.com/products";

    if (productId) {
      url = `${url}/${productId}`;
    }

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "X-PF-Store-Id": storeId,
      },
    });

    if (!response.ok) {
      const errorData = await response.text();
      return NextResponse.json(
        {
          error: "Failed to fetch product(s) from Printful",
          details: errorData,
        },
        { status: response.status }
      );
    }

    const data = await response.json();

    return NextResponse.json(data.result);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: "Internal Server Error",
          details: error.message,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { error: "An unknown error occurred." },
        { status: 500 }
      );
    }
  }
}
