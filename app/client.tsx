'use client';

import { useRouter } from 'next/navigation';
import type { FormEvent } from 'react';

export function Client() {
  const router = useRouter();

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(e);
    // @ts-expect-error - quick&dirty, but it's the same
    // with a controlled value stored in state
    router.push(`/foo/${e.target[0].value}`);
  }

  return (
    <form action="" onSubmit={onSubmit}>
      <input type="text" name="id" placeholder="id" />
      <button>Go</button>
    </form>
  );
}
