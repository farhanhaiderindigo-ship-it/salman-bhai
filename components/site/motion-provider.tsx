'use client'

import { MotionConfig } from 'framer-motion'
import { LanguageProvider } from './language'

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>{children}</LanguageProvider>
    </MotionConfig>
  )
}
