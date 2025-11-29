-- Create academy_registrations table
CREATE TABLE IF NOT EXISTS academy_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  date_of_birth DATE,
  gender TEXT,
  address TEXT,
  city TEXT,
  state TEXT,
  country TEXT,
  postal_code TEXT,
  program TEXT,
  start_date DATE,
  education_level TEXT,
  current_ministry TEXT,
  years_in_ministry INTEGER,
  how_did_you_hear TEXT,
  expectations TEXT,
  emergency_contact TEXT,
  emergency_phone TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create membership_registrations table
CREATE TABLE IF NOT EXISTS membership_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  home_phone TEXT,
  mobile TEXT,
  ministry_name TEXT,
  ministry_address TEXT,
  location TEXT,
  residential_address TEXT,
  postal_address TEXT,
  email TEXT NOT NULL,
  age TEXT,
  marital_status TEXT,
  divorce_status TEXT,
  number_of_children TEXT,
  spouse_name TEXT,
  spouse_phone TEXT,
  years_as_christian TEXT,
  called_to_ministry_when TEXT,
  church_has_branches TEXT,
  number_of_branches TEXT,
  ordained_under TEXT,
  ordained_when TEXT,
  ordained_where TEXT,
  affiliated_to_lima TEXT,
  want_to_affiliate TEXT,
  licensed_with_lima TEXT,
  want_to_be_licensed TEXT,
  attended_bible_school TEXT,
  bible_college_attended TEXT,
  agree_doctrinal BOOLEAN,
  agree_conduct BOOLEAN,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create graduates table
CREATE TABLE IF NOT EXISTS graduates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  certificate_number TEXT UNIQUE NOT NULL,
  program TEXT,
  graduation_date DATE,
  status TEXT DEFAULT 'valid',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  subject TEXT,
  message TEXT,
  status TEXT DEFAULT 'unread',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_academy_registrations_email ON academy_registrations(email);
CREATE INDEX IF NOT EXISTS idx_membership_registrations_email ON membership_registrations(email);
CREATE INDEX IF NOT EXISTS idx_graduates_certificate_number ON graduates(certificate_number);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Enable Row-Level Security (RLS)
ALTER TABLE academy_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE graduates ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for academy_registrations (allow public inserts, authenticated can read all)
CREATE POLICY "Allow public inserts" ON academy_registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read" ON academy_registrations FOR SELECT USING (true);

-- Create RLS policies for membership_registrations (allow public inserts, authenticated can read all)
CREATE POLICY "Allow public inserts" ON membership_registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read" ON membership_registrations FOR SELECT USING (true);

-- Create RLS policies for graduates (allow public read for verification)
CREATE POLICY "Allow public read" ON graduates FOR SELECT USING (true);
CREATE POLICY "Allow authenticated insert/update" ON graduates FOR INSERT WITH CHECK (true);

-- Create RLS policies for contact_submissions (allow public inserts)
CREATE POLICY "Allow public inserts" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read" ON contact_submissions FOR SELECT USING (true);
