import { useCallback, useEffect, useState } from 'react';
import TextType from './TextType';

const HERO_FONT_STYLES = [
  { fontFamily: 'var(--font-sans)', letterSpacing: '-0.03em' },
  { fontFamily: 'var(--font-mono)', letterSpacing: '-0.04em' },
  { fontFamily: 'var(--font-pixel)', letterSpacing: '0' },
] as const;

interface HeroTitleProps {
  text: string;
  className?: string;
}

export default function HeroTitle({ text, className = 'text-heading-48' }: HeroTitleProps) {
  const [fontIndex, setFontIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => setReducedMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener('change', updateMotion);
    return () => motionQuery.removeEventListener('change', updateMotion);
  }, []);

  const handleSentenceComplete = useCallback(() => {
    setFontIndex((prev) => (prev + 1) % HERO_FONT_STYLES.length);
  }, []);

  const activeFont = HERO_FONT_STYLES[fontIndex];

  if (reducedMotion) {
    return (
      <h1
        className={className}
        style={{
          fontFamily: HERO_FONT_STYLES[0].fontFamily,
          letterSpacing: HERO_FONT_STYLES[0].letterSpacing,
        }}
      >
        {text}
      </h1>
    );
  }

  return (
    <TextType
      as="h1"
      className={className}
      text={text}
      loop
      startOnVisible
      typingSpeed={75}
      deletingSpeed={40}
      pauseDuration={2500}
      initialDelay={400}
      showCursor
      hideCursorWhileTyping={false}
      onSentenceComplete={handleSentenceComplete}
      style={{
        fontFamily: activeFont.fontFamily,
        letterSpacing: activeFont.letterSpacing,
      }}
    />
  );
}
