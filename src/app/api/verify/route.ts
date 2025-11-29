import { NextResponse } from 'next/server'
import { verifyCertificate } from '@/lib/actions'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { certificateNumber } = body
    if (!certificateNumber) {
      return NextResponse.json({ success: false, error: 'Missing certificateNumber' }, { status: 400 })
    }

    const data = await verifyCertificate(certificateNumber)
    if (!data) {
      return NextResponse.json({ success: true, found: false })
    }

    return NextResponse.json({ success: true, found: true, data })
  } catch (err: any) {
    console.error('verify API error:', err)
    return NextResponse.json({ success: false, error: err.message || String(err) }, { status: 500 })
  }
}
