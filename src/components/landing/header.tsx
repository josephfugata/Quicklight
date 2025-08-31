import { Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Sun className="h-6 w-6 text-primary" />
          <span className="hidden font-bold font-headline sm:inline-block">
            Shine Brighter Tomorrow
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild>
              <Link href="#consultation">Get a Free Quote</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
