import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Check .env for VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export type Profile = {
  id: string;
  email: string;
  full_name: string;
  phone: string | null;
  role: 'landlord' | 'tenant' | 'manager';
  avatar_url: string | null;
};

export type PropertyRow = {
  id: string;
  landlord_id: string;
  title: string;
  slug: string;
  type: 'Residential' | 'Commercial';
  subtype: string;
  location: string;
  area: string | null;
  bedrooms: number | null;
  bathrooms: number | null;
  rent: number;
  price: number | null;
  listing_type: 'lease' | 'sale';
  availability: 'Available' | 'Under Application' | 'Leased' | 'Sold';
  featured: boolean;
  description: string | null;
  amenities: string[];
  images: { url: string; alt: string }[];
  status: 'Active' | 'Inactive' | 'Archived';
  created_at: string;
};

export type TenancyRow = {
  id: string;
  property_id: string;
  tenant_id: string;
  landlord_id: string;
  monthly_rent: number;
  deposit: number | null;
  start_date: string;
  end_date: string | null;
  status: 'Active' | 'Pending' | 'Terminated' | 'Expired';
  lease_document_url: string | null;
};

export type RentPaymentRow = {
  id: string;
  tenancy_id: string;
  property_id: string;
  tenant_id: string;
  landlord_id: string;
  amount: number;
  period: string;
  payment_date: string | null;
  due_date: string;
  method: string | null;
  status: 'Paid' | 'Pending' | 'Overdue';
  receipt_url: string | null;
};

export type MaintenanceRequestRow = {
  id: string;
  property_id: string;
  tenancy_id: string | null;
  tenant_id: string | null;
  landlord_id: string | null;
  title: string;
  description: string;
  priority: 'Low' | 'Medium' | 'High' | 'Emergency';
  status: 'Open' | 'In Progress' | 'Resolved' | 'Cancelled';
  cost_estimate: number | null;
  actual_cost: number | null;
  contractor_name: string | null;
  resolved_at: string | null;
  created_at: string;
};

export type DocumentRow = {
  id: string;
  owner_id: string;
  property_id: string | null;
  tenancy_id: string | null;
  name: string;
  type: 'Lease' | 'Statement' | 'Inspection' | 'Compliance' | 'Receipt' | 'Policy' | 'Other';
  file_url: string;
  file_size: string | null;
  description: string | null;
  created_at: string;
};

export type FinancialStatementRow = {
  id: string;
  property_id: string;
  landlord_id: string;
  period: string;
  rent_collected: number;
  expenses: number;
  arrears: number;
  net_remittance: number;
  status: 'Draft' | 'Finalised' | 'Paid';
  pdf_url: string | null;
  created_at: string;
};

export type ApprovalRow = {
  id: string;
  property_id: string;
  landlord_id: string;
  maintenance_request_id: string | null;
  title: string;
  cost_estimate: number;
  urgency: 'Routine' | 'High' | 'Compliance' | 'Emergency';
  status: 'Awaiting' | 'Approved' | 'Declined';
  landlord_notes: string | null;
  approved_at: string | null;
  created_at: string;
};

export type ContactEnquiryRow = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  role: string | null;
  service_interest: string | null;
  message: string;
  status: 'New' | 'Contacted' | 'Converted' | 'Archived';
  created_at: string;
};
