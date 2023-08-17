import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { wantedUrl }: { wantedUrl: string } = await request.json();
    console.log({ wantedUrl });

    return NextResponse.json({ success: true, url: wantedUrl });
  } catch (error) {
    // Handle the error here
    return NextResponse.json({ success: false, error });
  }
}
