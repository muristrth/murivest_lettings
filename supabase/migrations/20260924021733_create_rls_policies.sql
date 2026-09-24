/*
# Murivest Lettings — RLS Policies (Step 2)

Applies Row Level Security policies to all tables.
All tables were created and RLS-enabled in the previous migration.

## Policy Summary
- profiles: user reads/updates own; managers read all
- properties: landlord sees own; tenant sees occupied; manager sees all
- tenancies: tenant/landlord see own; manager sees all; landlord/manager insert/update
- rent_payments: tenant/landlord see own; manager sees all; tenant inserts; manager updates
- maintenance_requests: tenant/landlord see own; manager sees all; tenant inserts; landlord/manager update
- documents: owner or tenant/landlord/manager chain; owner inserts; owner deletes
- financial_statements: landlord sees own; manager sees all; landlord/manager insert; manager updates
- approvals: landlord sees own; manager sees all; manager inserts; landlord updates
- contact_enquiries: anon inserts; manager reads/updates
*/

-- === PROFILES ===
DROP POLICY IF EXISTS "select_own_profile" ON profiles;
CREATE POLICY "select_own_profile" ON profiles FOR SELECT
  TO authenticated USING (auth.uid() = id);

DROP POLICY IF EXISTS "select_all_profiles_manager" ON profiles;
CREATE POLICY "select_all_profiles_manager" ON profiles FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "update_own_profile" ON profiles;
CREATE POLICY "update_own_profile" ON profiles FOR UPDATE
  TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

DROP POLICY IF EXISTS "insert_own_profile" ON profiles;
CREATE POLICY "insert_own_profile" ON profiles FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = id);

-- === PROPERTIES ===
DROP POLICY IF EXISTS "select_own_properties" ON properties;
CREATE POLICY "select_own_properties" ON properties FOR SELECT
  TO authenticated USING (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "select_properties_tenant" ON properties;
CREATE POLICY "select_properties_tenant" ON properties FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM tenancies t WHERE t.property_id = properties.id AND t.tenant_id = auth.uid())
  );

DROP POLICY IF EXISTS "select_all_properties_manager" ON properties;
CREATE POLICY "select_all_properties_manager" ON properties FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "insert_own_properties" ON properties;
CREATE POLICY "insert_own_properties" ON properties FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "update_own_properties" ON properties;
CREATE POLICY "update_own_properties" ON properties FOR UPDATE
  TO authenticated USING (auth.uid() = landlord_id) WITH CHECK (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "delete_own_properties" ON properties;
CREATE POLICY "delete_own_properties" ON properties FOR DELETE
  TO authenticated USING (auth.uid() = landlord_id);

-- === TENANCIES ===
DROP POLICY IF EXISTS "select_own_tenancies_tenant" ON tenancies;
CREATE POLICY "select_own_tenancies_tenant" ON tenancies FOR SELECT
  TO authenticated USING (auth.uid() = tenant_id);

DROP POLICY IF EXISTS "select_own_tenancies_landlord" ON tenancies;
CREATE POLICY "select_own_tenancies_landlord" ON tenancies FOR SELECT
  TO authenticated USING (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "select_all_tenancies_manager" ON tenancies;
CREATE POLICY "select_all_tenancies_manager" ON tenancies FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "insert_tenancies_landlord" ON tenancies;
CREATE POLICY "insert_tenancies_landlord" ON tenancies FOR INSERT
  TO authenticated WITH CHECK (
    auth.uid() = landlord_id
    OR (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager'))
  );

DROP POLICY IF EXISTS "update_tenancies_landlord" ON tenancies;
CREATE POLICY "update_tenancies_landlord" ON tenancies FOR UPDATE
  TO authenticated USING (auth.uid() = landlord_id) WITH CHECK (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "update_tenancies_manager" ON tenancies;
CREATE POLICY "update_tenancies_manager" ON tenancies FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "delete_tenancies_landlord" ON tenancies;
CREATE POLICY "delete_tenancies_landlord" ON tenancies FOR DELETE
  TO authenticated USING (auth.uid() = landlord_id);

-- === RENT PAYMENTS ===
DROP POLICY IF EXISTS "select_own_payments_tenant" ON rent_payments;
CREATE POLICY "select_own_payments_tenant" ON rent_payments FOR SELECT
  TO authenticated USING (auth.uid() = tenant_id);

DROP POLICY IF EXISTS "select_own_payments_landlord" ON rent_payments;
CREATE POLICY "select_own_payments_landlord" ON rent_payments FOR SELECT
  TO authenticated USING (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "select_all_payments_manager" ON rent_payments;
CREATE POLICY "select_all_payments_manager" ON rent_payments FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "insert_payments_tenant" ON rent_payments;
CREATE POLICY "insert_payments_tenant" ON rent_payments FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = tenant_id);

DROP POLICY IF EXISTS "update_payments_manager" ON rent_payments;
CREATE POLICY "update_payments_manager" ON rent_payments FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

-- === MAINTENANCE REQUESTS ===
DROP POLICY IF EXISTS "select_own_maintenance_tenant" ON maintenance_requests;
CREATE POLICY "select_own_maintenance_tenant" ON maintenance_requests FOR SELECT
  TO authenticated USING (auth.uid() = tenant_id);

DROP POLICY IF EXISTS "select_own_maintenance_landlord" ON maintenance_requests;
CREATE POLICY "select_own_maintenance_landlord" ON maintenance_requests FOR SELECT
  TO authenticated USING (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "select_all_maintenance_manager" ON maintenance_requests;
CREATE POLICY "select_all_maintenance_manager" ON maintenance_requests FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "insert_maintenance_tenant" ON maintenance_requests;
CREATE POLICY "insert_maintenance_tenant" ON maintenance_requests FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = tenant_id);

DROP POLICY IF EXISTS "update_maintenance_landlord" ON maintenance_requests;
CREATE POLICY "update_maintenance_landlord" ON maintenance_requests FOR UPDATE
  TO authenticated USING (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "update_maintenance_manager" ON maintenance_requests;
CREATE POLICY "update_maintenance_manager" ON maintenance_requests FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

-- === DOCUMENTS ===
DROP POLICY IF EXISTS "select_own_documents" ON documents;
CREATE POLICY "select_own_documents" ON documents FOR SELECT
  TO authenticated USING (
    auth.uid() = owner_id
    OR auth.uid() = (SELECT t.tenant_id FROM tenancies t WHERE t.id = documents.tenancy_id)
    OR auth.uid() = (SELECT p.landlord_id FROM properties p WHERE p.id = documents.property_id)
    OR EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "insert_own_documents" ON documents;
CREATE POLICY "insert_own_documents" ON documents FOR INSERT
  TO authenticated WITH CHECK (auth.uid() = owner_id);

DROP POLICY IF EXISTS "delete_own_documents" ON documents;
CREATE POLICY "delete_own_documents" ON documents FOR DELETE
  TO authenticated USING (auth.uid() = owner_id);

-- === FINANCIAL STATEMENTS ===
DROP POLICY IF EXISTS "select_own_statements" ON financial_statements;
CREATE POLICY "select_own_statements" ON financial_statements FOR SELECT
  TO authenticated USING (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "select_all_statements_manager" ON financial_statements;
CREATE POLICY "select_all_statements_manager" ON financial_statements FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "insert_own_statements" ON financial_statements;
CREATE POLICY "insert_own_statements" ON financial_statements FOR INSERT
  TO authenticated WITH CHECK (
    auth.uid() = landlord_id
    OR (EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager'))
  );

DROP POLICY IF EXISTS "update_statements_manager" ON financial_statements;
CREATE POLICY "update_statements_manager" ON financial_statements FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

-- === APPROVALS ===
DROP POLICY IF EXISTS "select_own_approvals" ON approvals;
CREATE POLICY "select_own_approvals" ON approvals FOR SELECT
  TO authenticated USING (auth.uid() = landlord_id);

DROP POLICY IF EXISTS "select_all_approvals_manager" ON approvals;
CREATE POLICY "select_all_approvals_manager" ON approvals FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "insert_approvals_manager" ON approvals;
CREATE POLICY "insert_approvals_manager" ON approvals FOR INSERT
  TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "update_own_approvals" ON approvals;
CREATE POLICY "update_own_approvals" ON approvals FOR UPDATE
  TO authenticated USING (auth.uid() = landlord_id);

-- === CONTACT ENQUIRIES ===
DROP POLICY IF EXISTS "insert_enquiries_anon" ON contact_enquiries;
CREATE POLICY "insert_enquiries_anon" ON contact_enquiries FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "select_enquiries_manager" ON contact_enquiries;
CREATE POLICY "select_enquiries_manager" ON contact_enquiries FOR SELECT
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );

DROP POLICY IF EXISTS "update_enquiries_manager" ON contact_enquiries;
CREATE POLICY "update_enquiries_manager" ON contact_enquiries FOR UPDATE
  TO authenticated USING (
    EXISTS (SELECT 1 FROM profiles p WHERE p.id = auth.uid() AND p.role = 'manager')
  );