import { LockKeyhole } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function AccessDenied() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-5 text-zinc-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.14),transparent_34%)]" />

      <section className="relative z-10 w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 text-center shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-amber-400">
          <LockKeyhole size={24} />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-zinc-50">
          Acesso não identificado
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-400">
          Use o link recebido após a compra para acessar o gerador de conteúdo.
        </p>
        <MagneticButton href="/" className="mt-8 w-full">
          Voltar para a página inicial
        </MagneticButton>
      </section>
    </main>
  );
}
