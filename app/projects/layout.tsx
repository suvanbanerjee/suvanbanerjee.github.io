import React from 'react';
import { TextMorph } from '@/components/ui/text-morph';
import { ScrollProgress } from '@/components/ui/scroll-progress';

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <ScrollProgress />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <div className="max-w-[1100px] mx-auto">
            <div className="py-6 px-6 md:py-10 md:px-10">
              <div className="flex flex-col gap-16">
                {children}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}