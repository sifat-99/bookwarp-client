'use client';
import { SessionProvider as Provider, useSession } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
}

export default function SessionProvider({children}: Props) {

  return (
    <Provider>
      {children}
    </Provider>
  )
}