
'use client'
import FormNewPost from '@/components/form-new-post';
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto my-5'>
      <SessionProvider>
      <FormNewPost />
    </SessionProvider>
    </main>
  );
}