import type { Database } from '@/libs/supabase/types';
import { getEnvVar } from '@/utils/get-env-var';
import { createClient } from '@supabase/supabase-js';

export const supabaseAdminClient = createClient<Database>(
  getEnvVar(process.env.NEXT_PUBLIC_SUPABASE_URL, 'NEXT_PUBLIC_SUPABASE_URL'),
  getEnvVar([REDACTED], 'SUPABASE_SERVICE_ROLE_KEY')
);
