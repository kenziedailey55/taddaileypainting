import { PaintRoller, House, Fence, Layers, LayoutPanelLeft, Droplets } from "lucide-react";
import type { Service } from "@/lib/services";

const map = {
  roller: PaintRoller,
  home: House,
  wood: Fence,
  epoxy: Layers,
  cabinet: LayoutPanelLeft,
  spray: Droplets,
} as const;

export function ServiceIcon({ icon, className }: { icon: Service["icon"]; className?: string }) {
  const Icon = map[icon];
  return <Icon className={className} aria-hidden="true" />;
}
