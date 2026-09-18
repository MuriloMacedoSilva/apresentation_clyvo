import { useState } from 'react'
import { ImageOff } from 'lucide-react'

type PhoneMockupProps = {
  src: string
  alt: string
  label: string
  className?: string
  position?: string
  loading?: 'eager' | 'lazy'
}

export function PhoneMockup({ src, alt, label, className = '', position = 'top', loading = 'eager' }: PhoneMockupProps) {
  const [failed, setFailed] = useState(false)

  return (
    <figure className={`phone-mockup ${className}`} aria-label={alt}>
      <span className="phone-speaker" aria-hidden="true" />
      <div className="phone-screen">
        {failed ? (
          <div className="image-fallback">
            <ImageOff size={24} aria-hidden="true" />
            <span>Screenshot</span>
            <strong>{label}</strong>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            loading={loading}
            style={{ objectPosition: position }}
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </figure>
  )
}
