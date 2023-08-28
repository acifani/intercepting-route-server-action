import { redirect } from 'next/navigation';
import { Client } from './client';

async function navigate(data: FormData) {
  'use server';
  redirect(`/foo/${data.get('id')}`);
}

export default function Home() {
  return (
    <main>
      <h3>With server action</h3>
      <form action={navigate}>
        <input type="text" name="id" placeholder="id" />
        <button>Go</button>
      </form>
      <h3>With client component</h3>
      <p>Breaks when used after server action. Refresh page</p>
      <Client />
    </main>
  );
}
