import { CalendarCheck, FileHeart, FlaskConical, Pill, Syringe } from 'lucide-react'
import { PhoneMockup } from '../components/PhoneMockup'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

const history = [
  { label: 'Consulta', icon: CalendarCheck },
  { label: 'Prontuário', icon: FileHeart },
  { label: 'Prescrição', icon: Pill },
  { label: 'Exames', icon: FlaskConical },
  { label: 'Vacinação', icon: Syringe },
]

export function HistorySection() {
  return (
    <Section id="historico" index={3} className="history-section">
      <div className="history-copy">
        <Reveal>
          <p className="eyebrow">Histórico longitudinal</p>
          <h2 id="historico-title">A informação deixa de ser um arquivo.<br /><em>Ela passa a contar uma história.</em></h2>
        </Reveal>
        <Reveal className="pet-story" delay={120}>
          <div className="pet-avatar">L</div>
          <div><strong>Luna</strong><small>uma história, não arquivos isolados</small></div>
        </Reveal>
        <div className="vertical-timeline">
          {history.map(({ label, icon: Icon }, index) => (
            <Reveal className="history-node" delay={170 + index * 65} key={label}>
              <span><Icon /></span><strong>{label}</strong>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="history-visual">
        <Reveal delay={100}>
          <PhoneMockup
            src="/assets/screens/clinical-history.jpeg"
            alt="Histórico clínico real da Luna no aplicativo"
            label="Histórico Clínico"
            position="center 8%"
          />
        </Reveal>
        <Reveal className="floating-tag tag-prescription" delay={260}>Prescrição</Reveal>
        <Reveal className="floating-tag tag-blood" delay={330}>Hemograma</Reveal>
        <Reveal className="floating-tag tag-ultrasound" delay={400}>Ultrassonografia</Reveal>
        <Reveal className="floating-tag tag-vaccine" delay={470}>Antirrábica</Reveal>
      </div>
    </Section>
  )
}
