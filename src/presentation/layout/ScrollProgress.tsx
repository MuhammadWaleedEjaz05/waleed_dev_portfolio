import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const p = el.scrollTop / (el.scrollHeight - el.clientHeight);
      setProgress(p * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-0.5 z-[60] bg-[rgba(0,255,65,0.1)]">
      <div
        className="h-full bg-[#00ff41] transition-all duration-100"
        style={{ width: `${progress}%`, boxShadow: "0 0 8px #00ff41" }}
      />
    </div>
  );
}
