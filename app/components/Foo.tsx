export function Foo({ id, intercepted }: { id: string; intercepted: boolean }) {
  return (
    <div style={{ backgroundColor: intercepted ? '#c7f9cc' : '#caf0f8' }}>
      <p>
        From <b>{intercepted ? 'intercepted' : 'regular'}</b> page
      </p>
      <h1>Foo</h1>
      <h2>ID: {id}</h2>
    </div>
  );
}
