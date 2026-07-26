import { useTypewriter } from "@/presentation/hooks/useTypewriter";
import { BlinkingCursor } from "./BlinkingCursor";
import { PromptLine } from "./PromptLine";

export function SectionHeader({ command }: { command: string }) {
  const { displayed, done } = useTypewriter(command, 50);
  return (
    <div className="mb-8">
      <PromptLine>
        <span className="text-[#c9d1d9]">{displayed}</span>
        {!done && <BlinkingCursor className="ml-1" />}
      </PromptLine>
    </div>
  );
}
