import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { PresentationControls } from './components/PresentationControls'
import { usePresentationKeyboard } from './hooks/usePresentationKeyboard'
import { useSectionObserver } from './hooks/useSectionObserver'
import { AiSection } from './sections/AiSection'
import { BusinessSection } from './sections/BusinessSection'
import { ClosingSection } from './sections/ClosingSection'
import { ContinuitySection } from './sections/ContinuitySection'
import { FragmentationSection } from './sections/FragmentationSection'
import { HistorySection } from './sections/HistorySection'
import { MvpSection } from './sections/MvpSection'
import { RetentionSection } from './sections/RetentionSection'
import { TutorExperienceSection } from './sections/TutorExperienceSection'

const sections = [
  { id: 'fragmentacao', title: 'Fragmentação' },
  { id: 'continuidade', title: 'Continuidade' },
  { id: 'experiencia', title: 'Experiência do tutor' },
  { id: 'historico', title: 'Histórico longitudinal' },
  { id: 'ai', title: 'CLYVO AI' },
  { id: 'retencao', title: 'Retenção' },
  { id: 'mvp', title: 'MVP real' },
  { id: 'negocio', title: 'Modelo de negócio' },
  { id: 'fechamento', title: 'Cuidado que continua' },
] as const

const sectionIds = sections.map(({ id }) => id)

function App() {
  const presentationRef = useRef<HTMLElement>(null)
  const activeIndex = useSectionObserver(sectionIds, presentationRef)
  const [isFullscreen, setIsFullscreen] = useState(Boolean(document.fullscreenElement))

  const goTo = useCallback((index: number) => {
    const boundedIndex = Math.max(0, Math.min(index, sections.length - 1))
    document.getElementById(sections[boundedIndex].id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const toggleFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen()
      else await document.documentElement.requestFullscreen()
    } catch {
      // Browsers may reject fullscreen outside a direct user gesture.
    }
  }, [])

  const keyboardOptions = useMemo(() => ({
    onNext: () => goTo(activeIndex + 1),
    onPrevious: () => goTo(activeIndex - 1),
    onFirst: () => goTo(0),
    onLast: () => goTo(sections.length - 1),
    onFullscreen: toggleFullscreen,
  }), [activeIndex, goTo, toggleFullscreen])

  usePresentationKeyboard(keyboardOptions)

  useEffect(() => {
    const handleFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', handleFullscreen)
    return () => document.removeEventListener('fullscreenchange', handleFullscreen)
  }, [])

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!sectionIds.some((sectionId) => sectionId === id)) return
    window.requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }))
  }, [])

  return (
    <>
      <main ref={presentationRef} className="presentation" aria-label="Pitch CLYVO VET">
        <FragmentationSection />
        <ContinuitySection />
        <TutorExperienceSection />
        <HistorySection />
        <AiSection />
        <RetentionSection />
        <MvpSection />
        <BusinessSection />
        <ClosingSection />
      </main>

      <nav className="section-dots" aria-label="Navegação entre seções">
        {sections.map((section, index) => (
          <button
            type="button"
            key={section.id}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => goTo(index)}
            aria-label={`Ir para ${section.title}`}
            aria-current={index === activeIndex ? 'step' : undefined}
            data-tooltip={section.title}
          />
        ))}
      </nav>

      <PresentationControls
        current={activeIndex}
        total={sections.length}
        isFullscreen={isFullscreen}
        onPrevious={() => goTo(activeIndex - 1)}
        onNext={() => goTo(activeIndex + 1)}
        onFullscreen={toggleFullscreen}
      />
    </>
  )
}

export default App
