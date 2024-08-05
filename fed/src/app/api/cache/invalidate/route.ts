import { revalidatePath } from 'next/cache'
import { AllowedOrigin } from '@/lib/cors'
import * as log from '@/lib/log'

export async function POST(request: Request) {
  const secret = request.headers.get('X-Secret');
  const allowedOrigin = AllowedOrigin(request);

  if (secret !== process.env.REMOTE_API_SECRET) {
    return new Response(null, {
      status: 401,
      headers: {
        'Access-Control-Allow-Origin': allowedOrigin,
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'X-Secret, Content-Type',
      },
    })
  }

  let payload = await request.json();
  let path: string = payload.route.path;

  // trim trailing slash if present
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);

  if (path !== null || path !== '') {
    log.Debug("api:cache:invalidate: " + path);
    revalidatePath(path);
  }

  return new Response(`cache-revalidated: '${path}'\n`, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': allowedOrigin,
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'X-Secret, Content-Type',
    },
  })
}

