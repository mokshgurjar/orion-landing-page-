import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function InteractiveHoverButtonDemo() {
  return (
    <div className="relative justify-center flex items-center p-8 bg-zinc-950">
      <InteractiveHoverButton text="Get Early Access" className="w-auto px-6 border-red-500 text-red-500 hover:text-white ui-theme-red" />
    </div>
  );
}

export { InteractiveHoverButtonDemo };
