import { ReactNode } from 'react';

interface NewspaperCardProps {
  children: ReactNode;
}

export default function NewspaperCard({ children }: NewspaperCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-deep-black/10 transform rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300">
      <div className="absolute top-4 left-4 w-8 h-8 bg-pink-400 rounded-full opacity-30 blur-sm" />
      <div className="absolute bottom-4 right-4 w-12 h-12 bg-amber-400 rounded-full opacity-30 blur-sm" />
      <div className="absolute top-1/2 right-8 w-6 h-6 bg-rose-400 rounded-full opacity-30 blur-sm" />
      
      <div className="relative z-10">
        {children}
      </div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1IiAvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFpbikiIC8+PC9zdmc+')] opacity-20 rounded-2xl pointer-events-none" />
    </div>
  );
}
