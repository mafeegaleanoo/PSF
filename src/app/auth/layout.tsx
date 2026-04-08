import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-4 py-12">
      <Link href="/" className="mb-8 block">
        <Logo variant="light" width={200} />
      </Link>
      <div className="w-full max-w-md">{children}</div>
    </div>
  );
}
