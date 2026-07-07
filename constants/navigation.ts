import { History, Home, Settings, UploadCloud } from "lucide-react";

export const navigationItems = [
  { href: "/", label: "Dashboard", icon: Home },
  { href: "/upload", label: "Upload", icon: UploadCloud },
  { href: "/history", label: "History", icon: History },
  { href: "/settings", label: "Settings", icon: Settings },
] as const;
