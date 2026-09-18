import { useEffect, useState } from 'react'

export function useSectionObserver(sectionIds: string[], rootRef: React.RefObject<HTMLElement | null>) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const sections = sectionIds.map((id) => document.getElementById(id)).filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.55) return
          const index = sectionIds.indexOf(entry.target.id)
          if (index < 0) return
          setActiveIndex(index)
          entry.target.classList.add('is-visible')
          history.replaceState(null, '', `#${entry.target.id}`)
        })
      },
      { root, threshold: [0.55, 0.72] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [rootRef, sectionIds])

  return activeIndex
}
