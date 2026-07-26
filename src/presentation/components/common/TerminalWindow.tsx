export function TerminalWindow({ title, children, className = "" }: {
  title?: string; children: React.ReactNode; className?: string;
}) {
  return (
    <div className={`rounded-lg border border-[rgba(0,255,65,0.2)] overflow-hidden shadow-[0_0_40px_rgba(0,255,65,0.05)] ${className}`}>
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[rgba(0,255,65,0.15)]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        {title && (
          <span className="ml-3 text-xs text-[#6e7681] font-['JetBrains_Mono',monospace]">
            {title}
          </span>
        )}
      </div>
      <div className="bg-[#0d1117] p-4 font-['JetBrains_Mono',monospace] text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
