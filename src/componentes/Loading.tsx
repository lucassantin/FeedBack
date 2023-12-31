import { CircleNotch } from "@phosphor-icons/react";

export function Loading() {
  return (
    <div className="h-6 w-6 flex items-center justify-center overflow-hidden animate-spin">
      <CircleNotch weight="bold" className="w-4 h-4" />
    </div>
  );
}
