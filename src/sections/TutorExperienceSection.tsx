import { BellRing, CalendarClock, FileCheck2, Stethoscope } from 'lucide-react'
import { PhoneMockup } from '../components/PhoneMockup'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

const benefits = [
  { label: 'O que aconteceu', caption: 'prontuário e histórico', icon: FileCheck2 },
  { label: 'O que precisa de atenção', caption: 'exames e vacinas', icon: BellRing },
  { label: 'O que vem depois', caption: 'consulta e retorno', icon: CalendarClock },
]

export function TutorExperienceSection() {
  return (
    <Section id="experiencia" index={2} className="experience-section">
      <div className="experience-copy">
        <Reveal>
          <p className="eyebrow">Experiência do tutor</p>
          <h2 id="experiencia-title">Menos carga mental.<br /><em>Mais continuidade.</em></h2>
        </Reveal>
        <div className="benefit-list">
          {benefits.map(({ label, caption, icon: Icon }, index) => (
            <Reveal className="benefit-item" delay={120 + index * 90} key={label}>
              <span><Icon /></span>
              <div><strong>{label}</strong><small>{caption}</small></div>
            </Reveal>
          ))}
        </div>
        <Reveal className="supporting-statement" delay={440}>
          <Stethoscope size={20} />
          <p>A responsabilidade de lembrar<br />não fica só com o tutor.</p>
        </Reveal>
      </div>

      <div className="experience-phones">
        <Reveal className="secondary-phone" delay={240}>
          <PhoneMockup
            src="/assets/screens/tutor-notifications.jpeg"
            alt="Tela real de notificações do tutor"
            label="Notificações do Tutor"
            position="center 8%"
          />
        </Reveal>
        <Reveal className="primary-phone" delay={100}>
          <PhoneMockup
            src="/assets/screens/tutor-dashboard.png"
            alt="Dashboard real do tutor no aplicativo CLYVO"
            label="Dashboard do Tutor"
            loading="eager"
          />
        </Reveal>
      </div>
    </Section>
  )
}
