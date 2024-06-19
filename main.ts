const showcaseKey = 'x-forwarded-user';

Deno.serve((req) => {
  const showcaseValue = req.headers.get(showcaseKey);

  if (showcaseValue === null) {
    return new Response('No showcase value provided', { status: 400 });
  }

  return new Response(`Hello, ${showcaseValue};`, { status: 200 });
});
