import { supabase, type PropertyRow, type FinancialStatementRow, type ApprovalRow, type RentPaymentRow, type MaintenanceRequestRow, type DocumentRow } from './client';

export async function fetchSupabaseProperties() {
  if (!supabase) return [] as PropertyRow[];

  const { data, error } = await supabase.from('properties').select('*').eq('status', 'Active').order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase properties fetch failed:', error.message);
    return [] as PropertyRow[];
  }

  return (data ?? []) as PropertyRow[];
}

export async function fetchLandlordDashboardData() {
  if (!supabase) {
    return { properties: [], statements: [], approvals: [] as ApprovalRow[] };
  }

  const [propertiesResult, statementsResult, approvalsResult] = await Promise.all([
    supabase.from('properties').select('*').eq('status', 'Active').limit(5),
    supabase.from('financial_statements').select('*').order('created_at', { ascending: false }).limit(4),
    supabase.from('approvals').select('*').order('created_at', { ascending: false }).limit(5),
  ]);

  return {
    properties: (propertiesResult.data ?? []) as PropertyRow[],
    statements: (statementsResult.data ?? []) as FinancialStatementRow[],
    approvals: (approvalsResult.data ?? []) as ApprovalRow[],
  };
}

export async function fetchTenantDashboardData() {
  if (!supabase) {
    return { payments: [], maintenance: [], documents: [] as DocumentRow[] };
  }

  const [paymentsResult, maintenanceResult, documentsResult] = await Promise.all([
    supabase.from('rent_payments').select('*').order('payment_date', { ascending: false }).limit(4),
    supabase.from('maintenance_requests').select('*').order('created_at', { ascending: false }).limit(5),
    supabase.from('documents').select('*').order('created_at', { ascending: false }).limit(5),
  ]);

  return {
    payments: (paymentsResult.data ?? []) as RentPaymentRow[],
    maintenance: (maintenanceResult.data ?? []) as MaintenanceRequestRow[],
    documents: (documentsResult.data ?? []) as DocumentRow[],
  };
}
