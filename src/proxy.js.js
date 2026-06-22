import { NextResponse } from 'next/server';

export function proxy(req) {
  const basicAuth = req.headers.get('authorization');
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    // Cambia 'usuario' y 'contraseña' por las credenciales que quieras usar
    if (user === 'bernat' && pwd === 'bou') {
      return NextResponse.next();
    }
  }
  
  url.pathname = '/api/auth';
  return new NextResponse('Autenticación requerida', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: '/:path*',
};