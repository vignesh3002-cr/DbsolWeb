import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);

// Keep public pages usable when deployment settings are missing. Supabase-backed
// actions report the configuration issue when a user tries to use them.
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabasePublishableKey)
  : null;

export function getSupabaseClient() {
  if (!supabase) {
    throw new Error(
      "Employee portal is unavailable because Supabase is not configured for this deployment.",
    );
  }

  return supabase;
}
