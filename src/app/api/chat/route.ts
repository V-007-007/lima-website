import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    
    // 🔍 Add debugging
    console.log('Received request body:', body)
    console.log('MAKE_WEBHOOK_URL exists:', !!process.env.MAKE_WEBHOOK_URL)
    console.log('MAKE_WEBHOOK_URL value:', process.env.MAKE_WEBHOOK_URL?.substring(0, 30) + '...')
    
    if (!process.env.MAKE_WEBHOOK_URL) {
      throw new Error('MAKE_WEBHOOK_URL not set')
    }
    
    console.log('Sending to Make.com...')
    const makeRes = await fetch(process.env.MAKE_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
    
    console.log('Make.com status:', makeRes.status)
    const text = await makeRes.text()
    console.log('Make.com response:', text)
    
    return new NextResponse(text, {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error: any) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    )
  }
}
