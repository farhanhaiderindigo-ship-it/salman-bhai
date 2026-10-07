import { cn } from '@/lib/utils'

export function AiLabel({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={cn(
        'pointer-events-none absolute right-3 bottom-3 z-10 font-sans text-[9px] leading-none font-medium tracking-[0.24em] uppercase select-none md:right-4 md:bottom-4 md:text-[10px]',
        tone === 'light' ? 'text-ivory/55' : 'text-charcoal/50',
        className,
      )}
    >
      AI Generated
    </span>
  )
}
