
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const SUPABASE_URL = 'https://wrnmoasijmodwodukfsn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_i5yDcAQIlqshD3wSeD0S0A_82vOUYSW';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const data = JSON.parse(fs.readFileSync('./delivery_prices_fixed.json', 'utf8'));

async function migrate() {
    try {
        console.log("🚀 Starting migration...");

        // 1. Get unique companies
        const companies = [...new Set(data.map(d => d.company))];
        console.log(`Found ${companies.length} companies:`, companies);

        for (const companyName of companies) {
            console.log(`Processing ${companyName}...`);
            
            // Insert company
            const { data: companyData, error: companyError } = await supabase
                .from('delivery_companies')
                .insert([{ name: companyName, active: true }])
                .select()
                .single();

            if (companyError) {
                console.error(`Error inserting company ${companyName}:`, companyError);
                continue;
            }

            const companyId = companyData.id;
            console.log(`Inserted ${companyName} with ID: ${companyId}`);

            // Get prices for this company
            const companyPrices = data.filter(d => d.company === companyName).map(p => ({
                company_id: companyId,
                wilaya_code: p.wilaya_code,
                wilaya_name: p.wilaya_name,
                home_price: parseFloatSafe(p.home_price),
                bureau_price: parseFloatSafe(p.bureau_price)
            }));

            // Bulk insert prices
            const { error: priceError } = await supabase
                .from('delivery_prices')
                .insert(companyPrices);

            if (priceError) {
                console.error(`Error inserting prices for ${companyName}:`, priceError);
            } else {
                console.log(`Successfully migrated ${companyPrices.length} prices for ${companyName}`);
            }
        }

        console.log("✅ Migration complete!");
    } catch (err) {
        console.error("Migration failed:", err);
    }
}

migrate();
function parseFloatSafe(val) {
    if (typeof val === 'number') return val;
    if (!val || val === '\\') return null;
    const parsed = parseFloat(val);
    return isNaN(parsed) ? null : parsed;
}
