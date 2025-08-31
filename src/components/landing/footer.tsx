import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Sun className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} QUICKLIGHT. All Rights Reserved.
          </p>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Powering a Sustainable Future.
        </p>
      </div>
    </footer>
  );
}
