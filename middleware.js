export const config = {
  // This ensures the password protects ALL files and folders in this repo
  matcher: '/(.*)',
};

export default function middleware(request) {
  const authorizationHeader = request.headers.get('authorization');

  if (authorizationHeader) {
    const basicAuth = authorizationHeader.split(' ')[1];
    const [user, password] = atob(basicAuth).split(':');

    // Checks against the secure environment variables in Vercel
    if (
      user === process.env.SITE_USER &&
      password === process.env.SITE_PASSWORD
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
