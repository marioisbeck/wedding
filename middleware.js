export const config = {
  // This ensures the password protects ALL files and folders in this repo
  matcher: '/(.*)',
};

export default function middleware(request) {
  const expectedUser =
    process.env.SITE_USER ?? process.env.WEDDING_USERNAME;
  const expectedPassword =
    process.env.SITE_PASSWORD ?? process.env.WEDDING_PASSWORD;

  const authorizationHeader = request.headers.get('authorization');

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    // Vercel: SITE_USER / SITE_PASSWORD. Local .env can use WEDDING_* instead.
    if (
      user === expectedUser &&
      password === expectedPassword
    ) {
      // Password is correct, load the site
      return new Response(null, {
        headers: { 'x-middleware-next': '1' }
      });
    }
  }

  // Password incorrect or not provided, show the login popup
  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
