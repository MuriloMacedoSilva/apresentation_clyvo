import { CalendarDays, FileHeart, FlaskConical, RotateCcw, Syringe } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

const journey = [
  { label: 'Consulta', icon: CalendarDays },
  { label: 'Prontuário', icon: FileHeart },
  { label: 'Exames', icon: FlaskConical },
  { label: 'Vacinas', icon: Syringe },
  { label: 'Retorno', icon: RotateCcw },
]

export function ContinuitySection() {
  return (
    <Section id="continuidade" index={1} className="continuity-section">
      <Reveal>
        <p className="eyebrow">CLYVO VET</p>
        <h2 id="continuidade-title">Da consulta pontual<br />ao cuidado contínuo.</h2>
      </Reveal>

      <div className="journey-line" aria-label="Jornada contínua do cuidado">
        {journey.map(({ label, icon: Icon }, index) => (
          <Reveal className="journey-step" delay={100 + index * 80} key={label}>
            <span><Icon /></span>
            <strong>{label}</strong>
          </Reveal>
        ))}
      </div>

      <Reveal className="thesis" delay={520}>
        <p>O ERP administra a clínica.</p>
        <strong>A CLYVO administra a continuidade<br />do cuidado e do relacionamento.</strong>
      </Reveal>
    </Section>
  )
}
