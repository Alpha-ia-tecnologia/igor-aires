import { redirect } from 'next/navigation';
import { CLIENTS } from '@/config/clients';

export default function HomePage() {
  // Redirecionar para o primeiro cliente disponível ou criar uma página de landing
  const firstClient = Object.keys(CLIENTS)[0];
  
  if (firstClient) {
    redirect(`/${firstClient}`);
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nexus Bio</h1>
        <p className="text-zinc-400">Nenhum cliente configurado</p>
      </div>
    </div>
  );
}

