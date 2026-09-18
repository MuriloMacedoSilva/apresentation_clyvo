import { ChevronDown, ChevronUp, Expand, Shrink } from 'lucide-react'

type PresentationControlsProps = {
  current: number
  total: number
  isFullscreen: boolean
  onPrevious: () => void
  onNext: () => void
  onFullscreen: () => void
}

export function PresentationControls({
  current,
  total,
  isFullscreen,
  onPrevious,
  onNext,
  onFullscreen,
}: PresentationControlsProps) {
  return (
    <aside className="presentation-controls" aria-label="Controles da apresentação">
      <button type="button" onClick={onPrevious} disabled={current === 0} aria-label="Seção anterior">
        <ChevronUp size={17} />
      </button>
      <button type="button" onClick={onNext} disabled={current === total - 1} aria-label="Próxima seção">
        <ChevronDown size={17} />
      </button>
      <button type="button" onClick={onFullscreen} aria-label={isFullscreen ? 'Sair da tela cheia' : 'Entrar em tela cheia'}>
        {isFullscreen ? <Shrink size={16} /> : <Expand size={16} />}
      </button>
      <span className="section-count" aria-live="polite">
        {String(current + 1).padStart(2, '0')} <i>/</i> {String(total).padStart(2, '0')}
      </span>
    </aside>
  )
}
