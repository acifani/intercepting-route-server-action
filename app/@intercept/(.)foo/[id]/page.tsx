import { Foo } from '@/app/components/Foo';

export default function Page({ params }: { params: { id: string } }) {
  return <Foo id={params.id} intercepted={true} />;
}
