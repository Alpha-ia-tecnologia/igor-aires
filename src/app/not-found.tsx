import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white px-5">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página não encontrada</h2>
        <p className="text-zinc-400 mb-8">
          O site que você está procurando não existe ou foi removido.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-lg transition-colors"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

