import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const makeRes = await fetch(process.env.MAKE_WEBHOOK_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: body.message,
      session_id: body.session_id,
      timestamp: new Date().toISOString(),
    }),
  })

  const data = await makeRes.json()

  return NextResponse.json({
    reply: data.reply,
  })
}

