import { NextResponse } from 'next/server';

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const userId = params.userId;
  try {
    console.log({ userId });

    return NextResponse.json({ success: true, userId });
  } catch (error) {
    // Handle the error here
    return NextResponse.json({ success: false, error });
  }
}
