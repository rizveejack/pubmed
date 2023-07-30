import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    const res = await request.json()

    const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(res),
    })
    const json = await req.json()

    return NextResponse.json({ status: json?.data?.status ?? 200, result: json })
}
