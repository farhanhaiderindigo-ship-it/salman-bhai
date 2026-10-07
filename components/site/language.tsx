'use client'

import { createContext, useContext, useState } from 'react'
import { cn } from '@/lib/utils'

const LANGUAGES = ['EN', 'FR', 'DE'] as const
type Language = (typeof LANGUAGES)[number]

const LanguageContext = createContext<{
  language: Language
  setLanguage: (language: Language) => void
}>({ language: 'EN', setLanguage: () => {} })

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN')
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function LanguageSwitch({ className }: { className?: string }) {
  const { language, setLanguage } = useContext(LanguageContext)
  return (
    <div role="group" aria-label="Language" className={cn('flex items-center gap-3', className)}>
      {LANGUAGES.map((code, i) => (
        <span key={code} className="flex items-center gap-3">
          {i > 0 && (
            <span aria-hidden="true" className="h-2.5 w-px bg-current opacity-30" />
          )}
          <button
            type="button"
            onClick={() => setLanguage(code)}
            aria-pressed={language === code}
            className={cn(
              'eyebrow tracking-[0.2em] transition-opacity duration-500',
              language === code ? 'opacity-100' : 'opacity-45 hover:opacity-80',
            )}
          >
            {code}
          </button>
        </span>
      ))}
    </div>
  )
}
