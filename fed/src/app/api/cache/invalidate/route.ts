import { revalidatePath } from 'next/cache'

export async function POST(request: Request) {
  const secret = request.headers.get('X-Secret');

  if(secret !== process.env.REMOTE_API_SECRET)
  {
    return new Response(null, {
      status: 401,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'X-Secret, Content-Type',
      },
    })
  }

  let payload = await request.json();
  let path: string = payload.route.path;

  // trim trailing slash if present
  if(path.length > 1 && path.endsWith('/')) path = path.slice(0,-1);

  if (path !== null || path !== '') {
    console.log("api:cache:invalidate: " + path);
    revalidatePath(path);
  }

  // TODO: CORS should be configured from allow-list in the config
  return new Response(`cache-revalidated: '${path}'\n`, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'X-Secret, Content-Type',
    },
  })
}

