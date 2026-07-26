export function BlinkingCursor({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block w-2 h-4 bg-[#00ff41] align-middle ${className}`}
      style={{ animation: "blink 1s step-end infinite" }}
    />
  );
}
