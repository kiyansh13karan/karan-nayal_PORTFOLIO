import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://discord.com/api/v9/invites/ef9JnZjVu?with_counts=true', {
      next: { revalidate: 60 } // cache for 60 seconds to avoid rate limits
    });
    
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch Discord data' }, { status: res.status });
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
