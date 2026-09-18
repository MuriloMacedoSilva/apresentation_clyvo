import { useEffect, useRef } from 'react'

type KeyboardOptions = {
  onNext: () => void
  onPrevious: () => void
  onFirst: () => void
  onLast: () => void
  onFullscreen: () => void
}

export function usePresentationKeyboard(options: KeyboardOptions) {
  const locked = useRef(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null
      if (target?.matches('input, textarea, select, [contenteditable="true"]')) return
      if (event.repeat || locked.current) return

      let action: (() => void) | undefined
      if (['ArrowDown', 'PageDown', ' '].includes(event.key)) action = options.onNext
      if (['ArrowUp', 'PageUp'].includes(event.key)) action = options.onPrevious
      if (event.key === 'Home') action = options.onFirst
      if (event.key === 'End') action = options.onLast
      if (event.key.toLowerCase() === 'f') action = options.onFullscreen
      if (!action) return

      event.preventDefault()
      locked.current = true
      action()
      window.setTimeout(() => {
        locked.current = false
      }, 420)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [options])
}
