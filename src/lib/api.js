import { supabase } from "./supabase";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function apiRequest(path, { method = "GET", body, auth = true } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (auth) {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    if (!data.session?.access_token) {
      throw new Error("Please sign in again.");
    }
    headers.Authorization = `Bearer ${data.session.access_token}`;
  }

  const response = await fetch(`${apiUrl}${path}`, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "The backend request failed.");
  }

  return result;
}
