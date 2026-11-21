import { useState } from 'react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackLabel?: string;
  fallbackIcon?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackLabel = 'ARCHIVE PHOTO',
  fallbackIcon = 'photo_camera',
}: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-surface-container text-ink/70 p-4 text-center border border-ink/15 ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="material-symbols-outlined text-[32px] text-primary mb-2">
          {fallbackIcon}
        </span>
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-ink">
          {fallbackLabel}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
