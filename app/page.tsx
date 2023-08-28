import { redirect } from 'next/navigation';
import { ClientRedirect, ClientUseRouter } from './client';

async function navigate(data: FormData) {
  'use server';
  redirect(`/foo/${data.get('id')}`);
}

export default function Home() {
  return (
    <main>
      <h3>
        With server <code>redirect</code>
      </h3>
      <form action={navigate}>
        <input type="text" name="id" placeholder="id" />
        <button>Go</button>
      </form>
      <h3>
        With client <code>redirect</code>
      </h3>
      <ClientRedirect />
      <h3>
        With <code>useRouter</code>
      </h3>
      <p>
        Breaks when used after <code>redirect</code>. Refresh page
      </p>
      <ClientUseRouter />
    </main>
  );
}
