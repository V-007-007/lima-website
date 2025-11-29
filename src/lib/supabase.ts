import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * SUPABASE SETUP INSTRUCTIONS
 * ============================
 * 
 * 1. Create a Supabase project at https://supabase.com
 * 
 * 2. Get your project URL and anon key from:
 *    Project Settings > API > Project URL and Project API keys
 * 
 * 3. Add these to your .env.local file:
 *    NEXT_PUBLIC_SUPABASE_URL=your_project_url
 *    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
 * 
 * 4. Install Supabase client:
 *    npm install @supabase/supabase-js
 * 
 * 5. Uncomment the import and createClient code above
 * 
 * 6. Create the following tables in your Supabase database:
 * 
 *    - academy_registrations
 *    - membership_registrations
 *    - graduates
 *    - contact_submissions
 * 
 * See the schema examples in the actions.ts file for table structure.
 */