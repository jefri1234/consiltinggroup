// lib/cookies.ts
import { serialize, parse } from 'cookie';

const COOKIE_NAME = 'idUser';

export function setCookie(res: any, token: string) {
  res.setHeader('Set-Cookie', serialize(COOKIE_NAME, token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/' }));
}

export function getCookie(req: any) {
  const cookies = parse(req.headers.cookie || '');
  return cookies[COOKIE_NAME];
}

export function removeCookie(res: any) {
  res.setHeader('Set-Cookie', serialize(COOKIE_NAME, '', { httpOnly: true, secure: process.env.NODE_ENV === 'production', path: '/', expires: new Date(0) }));
}
