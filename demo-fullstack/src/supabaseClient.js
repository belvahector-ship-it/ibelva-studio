import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    'Supabase belum dikonfigurasi. Copy .env.example ke .env dan isi VITE_SUPABASE_URL / ' +
    'VITE_SUPABASE_ANON_KEY dari dashboard Supabase kamu. Lihat README.md.'
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');
