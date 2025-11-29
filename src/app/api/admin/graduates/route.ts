import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('graduates')
      .select('*')
      .order('graduation_date', { ascending: false })

    if (error) {
      console.error('Error fetching graduates (API):', error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    console.error('Unexpected error in GET /api/admin/graduates:', err)
    return NextResponse.json({ success: false, error: err?.message || 'Unexpected error' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (!body?.name || !body?.certificateNumber) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 })
    }

    const payload = {
      name: body.name,
      email: body.email || null,
      certificate_number: String(body.certificateNumber).toUpperCase(),
      program: body.program || null,
      graduation_date: body.graduationDate || null,
    }

    const { data, error } = await supabase
      .from('graduates')
      .insert([payload])

    if (error) {
      console.error('Error inserting graduate (API):', error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err: any) {
    console.error('Unexpected error in POST /api/admin/graduates:', err)
    return NextResponse.json({ success: false, error: err?.message || 'Unexpected error' }, { status: 500 })
  }
}
