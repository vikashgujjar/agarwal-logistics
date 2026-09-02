"use client";

import { useState } from "react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import AnimatedMenuButton from "@/components/ui/AnimatedMenuButton";
import NavDrawer from "@/components/layout/NavDrawer";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="/" aria-label="Agarwal Logistics Packers home">
              <Logo size="md" variant="light" priority />
            </a>

            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button href="/#quote" variant="primary">
                  Get Free Quote
                </Button>
              </div>
              <AnimatedMenuButton open={open} onClick={() => setOpen((v) => !v)} />
            </div>
          </div>
        </div>
      </header>

      <NavDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
