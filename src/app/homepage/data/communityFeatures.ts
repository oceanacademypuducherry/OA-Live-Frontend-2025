import { Globe, Heart, Sparkle, Users, type LucideIcon } from "lucide-react";

export interface Features {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const communityFeatures: Features[] = [
  { icon: Globe, title: "Global Community", desc: "Connect worldwide" },
  { icon: Users, title: "Multi-platform", desc: "Access anywhere" },
  {
    icon: Heart,
    title: "Student-focused",
    desc: "Learning simplified",
  },
  { icon: Sparkle, title: "Always Active", desc: "Support 24/7" },
];
