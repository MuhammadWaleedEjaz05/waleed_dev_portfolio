export function PromptLine({ user = "guest", host = "portfolio", path = "~", children }: {
  user?: string; host?: string; path?: string; children?: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline gap-0 flex-wrap">
      <span className="text-[#00ff41]">{user}</span>
      <span className="text-[#6e7681]">@</span>
      <span className="text-[#58a6ff]">{host}</span>
      <span className="text-[#6e7681]">:</span>
      <span className="text-[#da8fff]">{path}</span>
      <span className="text-[#6e7681]">$</span>
      <span className="ml-2">{children}</span>
    </div>
  );
}
