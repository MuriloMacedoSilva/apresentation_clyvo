import { Heart, PawPrint } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

export function ClosingSection() {
  return (
    <Section id="fechamento" index={8} className="closing-section dark-section">
      <Reveal className="closing-opening">
        <p>O cuidado não termina<br />quando a consulta termina.</p>
      </Reveal>
      <Reveal className="closing-brand" delay={220}>
        <span className="closing-symbol"><PawPrint /><Heart /></span>
        <strong>CLYVO</strong>
        <p>Cuidado que continua.</p>
      </Reveal>
    </Section>
  )
}
