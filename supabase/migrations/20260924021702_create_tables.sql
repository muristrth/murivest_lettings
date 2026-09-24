/*
# Murivest Lettings — Tables Only (Step 1)

Creates all core tables without RLS policies.
Policies are applied in a separate migration to avoid circular dependency
(properties policy references tenancies, which must exist first).

## Tables Created
1. profiles — user profiles with role
2. properties — property listings (Residential + Commercial)
3. tenancies — lease agreements
4. rent_payments — payment records
5. maintenance_requests — tenant repair requests
6. documents — document vault metadata
7. financial_statements — monthly statements per property
8. approvals — landlord cost approvals
9. contact_enquiries — public contact form submissions
*/

-- 1. PROFILES
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  full_name text NOT NULL,
  phone text,
  role text NOT NULL DEFAULT 'tenant' CHECK (role IN ('landlord', 'tenant', 'manager')),
  avatar_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 2. PROPERTIES
CREATE TABLE IF NOT EXISTS properties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  landlord_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  type text NOT NULL CHECK (type IN ('Residential', 'Commercial')),
  subtype text NOT NULL,
  location text NOT NULL,
  area text,
  bedrooms integer,
  bathrooms integer,
  rent numeric NOT NULL DEFAULT 0,
  price numeric,
  listing_type text NOT NULL DEFAULT 'lease' CHECK (listing_type IN ('lease', 'sale')),
  availability text NOT NULL DEFAULT 'Available' CHECK (availability IN ('Available', 'Under Application', 'Leased', 'Sold')),
  featured boolean DEFAULT false,
  description text,
  amenities text[] DEFAULT '{}',
  images jsonb DEFAULT '[]',
  status text NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive', 'Archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 3. TENANCIES
CREATE TABLE IF NOT EXISTS tenancies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  tenant_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  landlord_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  monthly_rent numeric NOT NULL,
  deposit numeric,
  start_date date NOT NULL,
  end_date date,
  status text NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Pending', 'Terminated', 'Expired')),
  lease_document_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 4. RENT PAYMENTS
CREATE TABLE IF NOT EXISTS rent_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenancy_id uuid NOT NULL REFERENCES tenancies(id) ON DELETE CASCADE,
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  tenant_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  landlord_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount numeric NOT NULL,
  period text NOT NULL,
  payment_date date,
  due_date date NOT NULL,
  method text,
  status text NOT NULL DEFAULT 'Pending' CHECK (status IN ('Paid', 'Pending', 'Overdue')),
  receipt_url text,
  created_at timestamptz DEFAULT now()
);

-- 5. MAINTENANCE REQUESTS
CREATE TABLE IF NOT EXISTS maintenance_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  tenancy_id uuid REFERENCES tenancies(id) ON DELETE SET NULL,
  tenant_id uuid DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE SET NULL,
  landlord_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  priority text NOT NULL DEFAULT 'Medium' CHECK (priority IN ('Low', 'Medium', 'High', 'Emergency')),
  status text NOT NULL DEFAULT 'Open' CHECK (status IN ('Open', 'In Progress', 'Resolved', 'Cancelled')),
  cost_estimate numeric,
  actual_cost numeric,
  contractor_name text,
  photos jsonb DEFAULT '[]',
  resolved_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 6. DOCUMENTS
CREATE TABLE IF NOT EXISTS documents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  property_id uuid REFERENCES properties(id) ON DELETE CASCADE,
  tenancy_id uuid REFERENCES tenancies(id) ON DELETE CASCADE,
  name text NOT NULL,
  type text NOT NULL CHECK (type IN ('Lease', 'Statement', 'Inspection', 'Compliance', 'Receipt', 'Policy', 'Other')),
  file_url text NOT NULL,
  file_size text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- 7. FINANCIAL STATEMENTS
CREATE TABLE IF NOT EXISTS financial_statements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  landlord_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  period text NOT NULL,
  rent_collected numeric NOT NULL DEFAULT 0,
  expenses numeric NOT NULL DEFAULT 0,
  arrears numeric NOT NULL DEFAULT 0,
  net_remittance numeric NOT NULL DEFAULT 0,
  status text NOT NULL DEFAULT 'Draft' CHECK (status IN ('Draft', 'Finalised', 'Paid')),
  pdf_url text,
  created_at timestamptz DEFAULT now()
);

-- 8. APPROVALS
CREATE TABLE IF NOT EXISTS approvals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id uuid NOT NULL REFERENCES properties(id) ON DELETE CASCADE,
  landlord_id uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users(id) ON DELETE CASCADE,
  maintenance_request_id uuid REFERENCES maintenance_requests(id) ON DELETE SET NULL,
  title text NOT NULL,
  cost_estimate numeric NOT NULL,
  urgency text NOT NULL DEFAULT 'Routine' CHECK (urgency IN ('Routine', 'High', 'Compliance', 'Emergency')),
  status text NOT NULL DEFAULT 'Awaiting' CHECK (status IN ('Awaiting', 'Approved', 'Declined')),
  landlord_notes text,
  approved_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- 9. CONTACT ENQUIRIES
CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  role text,
  service_interest text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Contacted', 'Converted', 'Archived')),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenancies ENABLE ROW LEVEL SECURITY;
ALTER TABLE rent_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE maintenance_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE financial_statements ENABLE ROW LEVEL SECURITY;
ALTER TABLE approvals ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Indexes
CREATE INDEX IF NOT EXISTS idx_properties_landlord ON properties(landlord_id);
CREATE INDEX IF NOT EXISTS idx_tenancies_property ON tenancies(property_id);
CREATE INDEX IF NOT EXISTS idx_tenancies_tenant ON tenancies(tenant_id);
CREATE INDEX IF NOT EXISTS idx_tenancies_landlord ON tenancies(landlord_id);
CREATE INDEX IF NOT EXISTS idx_payments_tenancy ON rent_payments(tenancy_id);
CREATE INDEX IF NOT EXISTS idx_payments_property ON rent_payments(property_id);
CREATE INDEX IF NOT EXISTS idx_payments_tenant ON rent_payments(tenant_id);
CREATE INDEX IF NOT EXISTS idx_payments_landlord ON rent_payments(landlord_id);
CREATE INDEX IF NOT EXISTS idx_maintenance_property ON maintenance_requests(property_id);
CREATE INDEX IF NOT EXISTS idx_maintenance_tenant ON maintenance_requests(tenant_id);
CREATE INDEX IF NOT EXISTS idx_documents_owner ON documents(owner_id);
CREATE INDEX IF NOT EXISTS idx_documents_property ON documents(property_id);
CREATE INDEX IF NOT EXISTS idx_statements_property ON financial_statements(property_id);
CREATE INDEX IF NOT EXISTS idx_statements_landlord ON financial_statements(landlord_id);
CREATE INDEX IF NOT EXISTS idx_approvals_landlord ON approvals(landlord_id);
CREATE INDEX IF NOT EXISTS idx_approvals_property ON approvals(property_id);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at_profiles ON profiles;
CREATE TRIGGER set_updated_at_profiles BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS set_updated_at_properties ON properties;
CREATE TRIGGER set_updated_at_properties BEFORE UPDATE ON properties
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS set_updated_at_tenancies ON tenancies;
CREATE TRIGGER set_updated_at_tenancies BEFORE UPDATE ON tenancies
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

DROP TRIGGER IF EXISTS set_updated_at_maintenance ON maintenance_requests;
CREATE TRIGGER set_updated_at_maintenance BEFORE UPDATE ON maintenance_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();