type IconProps = { size?: number; className?: string };

export function FacebookIcon({ size = 15, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ size = 15, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon({ size = 15, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.6 7.2s-.21-1.5-.86-2.16c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h-.01s-3.59 0-6.58.12c-.42.05-1.34.05-2.16.92C2.6 5.7 2.4 7.2 2.4 7.2S2.18 8.96 2.18 10.71v1.58c0 1.75.22 3.51.22 3.51s.21 1.5.85 2.16c.82.87 1.9.84 2.38.94 1.73.17 7.37.22 7.37.22s3.6-.01 6.59-.13c.42-.06 1.34-.06 2.16-.93.65-.66.86-2.16.86-2.16s.22-1.75.22-3.51v-1.58c0-1.75-.22-3.51-.22-3.51ZM9.99 14.7V8.7l5.6 3-5.6 3Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 15, className = "" }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5C4.98 4.88 3.89 6 2.5 6S0 4.88 0 3.5 1.09 1 2.48 1s2.5 1.12 2.5 2.5ZM.24 8.25H4.7V23H.24V8.25ZM8.35 8.25h4.27v2.01h.06c.6-1.13 2.06-2.32 4.24-2.32 4.53 0 5.37 2.98 5.37 6.86V23H17.8v-6.36c0-1.52-.03-3.47-2.11-3.47-2.12 0-2.45 1.66-2.45 3.36V23H8.97V8.25h-.62Z" />
    </svg>
  );
}
