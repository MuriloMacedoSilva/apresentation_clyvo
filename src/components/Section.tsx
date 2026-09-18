import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: number
  className?: string
  children: ReactNode
}

export function Section({ id, index, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`pitch-section ${className}`} data-index={index} aria-labelledby={`${id}-title`}>
      <div className="section-inner">{children}</div>
    </section>
  )
}
