import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('opti_token');

  console.log('🔐 TOKEN:', token);

  if (!token) {
    console.log('❌ Aucun token');
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  console.log(
    '➡️ AUTHORIZATION:',
    authReq.headers.get('Authorization')
  );

  return next(authReq);
};