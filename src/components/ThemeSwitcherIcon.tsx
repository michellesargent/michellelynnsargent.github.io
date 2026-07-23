import { IoLaptopOutline, IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const ICONS = {
  system: IoLaptopOutline,
  light: IoSunnyOutline,
  dark: IoMoonOutline,
} as const;

type ThemeIconValue = keyof typeof ICONS;

interface ThemeSwitcherIconProps {
  value: ThemeIconValue;
  size?: number;
}

export default function ThemeSwitcherIcon({ value, size = 16 }: ThemeSwitcherIconProps) {
  const Icon = ICONS[value];
  return <Icon size={size} aria-hidden />;
}
