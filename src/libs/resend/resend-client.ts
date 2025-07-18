import { Resend } from 'resend';

import { getEnvVar } from '@/utils/get-env-var';

export const resendClient = new Resend(getEnvVar([REDACTED], 'RESEND_API_KEY'));
