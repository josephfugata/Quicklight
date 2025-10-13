import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto flex h-14 max-w-screen-2xl flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image src="/Logo.png" alt="QuickLight Logo" width={32} height={32} className="h-8 w-8" />
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
