import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-blue-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Levindo Conecta</h1>
      <Link href="/dashboard">
        <Button>Entrar</Button>
      </Link>
    </main>
  );
}