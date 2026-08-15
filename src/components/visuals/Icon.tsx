import {
  Blocks,
  Building2,
  Cable,
  Cctv,
  CircleCheck,
  ClipboardList,
  Cpu,
  FileText,
  HardHat,
  Network,
  PhoneCall,
  Radio,
  ScanFace,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

const registry: Record<string, LucideIcon> = {
  Blocks,
  Building2,
  Cable,
  Cctv,
  CircleCheck,
  ClipboardList,
  Cpu,
  FileText,
  HardHat,
  Network,
  PhoneCall,
  Radio,
  ScanFace,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Timer,
  Users,
  Wrench,
  Zap,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = registry[name] ?? Blocks;
  return <Cmp className={className} strokeWidth={1.6} aria-hidden />;
}
