import type { ReactNode } from 'react'

type MetricCardProps = {
  value: string
  label: string
  icon?: ReactNode
}

export function MetricCard({ value, label, icon }: MetricCardProps) {
  return (
    <article className="metric-card">
      {icon && <span className="metric-icon">{icon}</span>}
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  )
}
