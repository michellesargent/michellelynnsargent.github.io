import type { ComponentType, SVGProps } from 'react';
import type { IconName } from '../lib/icons';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Display,
  External,
  FileText,
  Linkedin,
  LogoGithub,
  LogoOpenAi,
  Moon,
  Sun,
  User,
} from 'vercel-geist-icons';
import {
  HiOutlineArrowsRightLeft,
  HiOutlineBeaker,
  HiOutlineCodeBracket,
  HiOutlineLockClosed,
  HiOutlinePaintBrush,
  HiOutlineSparkles,
  HiOutlineSquares2X2,
} from 'react-icons/hi2';

const ICONS: Record<IconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  'arrow-right': ArrowRight,
  'arrow-left': ArrowLeft,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,
  external: External,
  github: LogoGithub,
  linkedin: Linkedin,
  sun: Sun,
  moon: Moon,
  system: Display,
  user: User,
  briefcase: Briefcase,
  book: BookOpen,
  file: FileText,
  ai: LogoOpenAi,
  sparkles: HiOutlineSparkles as ComponentType<SVGProps<SVGSVGElement>>,
  'design-system': HiOutlineSquares2X2 as ComponentType<SVGProps<SVGSVGElement>>,
  art: HiOutlinePaintBrush as ComponentType<SVGProps<SVGSVGElement>>,
  'code-bracket': HiOutlineCodeBracket as ComponentType<SVGProps<SVGSVGElement>>,
  'arrows-right-left': HiOutlineArrowsRightLeft as ComponentType<SVGProps<SVGSVGElement>>,
  beaker: HiOutlineBeaker as ComponentType<SVGProps<SVGSVGElement>>,
  lock: HiOutlineLockClosed as ComponentType<SVGProps<SVGSVGElement>>,
};

const FALLBACKS: Partial<Record<IconName, ComponentType<SVGProps<SVGSVGElement>>>> = {
  ai: HiOutlineSparkles as ComponentType<SVGProps<SVGSVGElement>>,
};

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 16, className, ...props }: IconProps) {
  const Component = ICONS[name] ?? FALLBACKS[name];
  if (!Component) return null;

  return (
    <Component
      width={size}
      height={size}
      className={className}
      aria-hidden={props['aria-label'] ? undefined : true}
      {...props}
    />
  );
}
