import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
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

// Configura en qué rutas quieres que aplique la contraseña (aquí aplica a todas)
export const config = {
  matcher: '/:path*',
};