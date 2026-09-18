import { BarChart3, Bot, Building2, Network, PawPrint, Stethoscope, UserRound } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

const roadmap = [
  { label: 'IA premium', icon: Bot },
  { label: 'Analytics', icon: BarChart3 },
  { label: 'Integrações', icon: Network },
  { label: 'Redes e hospitais', icon: Building2 },
]

export function BusinessSection() {
  return (
    <Section id="negocio" index={7} className="business-section">
      <div className="business-heading">
        <Reveal>
          <p className="eyebrow">Modelo de negócio</p>
          <h2 id="negocio-title">B2B2C <em>SaaS</em></h2>
          <p className="lead">A clínica paga pela continuidade.<br />O tutor recebe a experiência.</p>
        </Reveal>
      </div>

      <Reveal className="business-flow" delay={100}>
        <div className="business-node"><Building2 /><strong>CLÍNICA</strong><small>assina a plataforma</small></div>
        <div className="business-arrow"><span>assinatura</span>→</div>
        <div className="business-node clyvo-node"><img src="/assets/clyvo-logo.png" alt="CLYVO" /></div>
        <div className="business-arrow"><span>experiência contínua</span>→</div>
        <div className="business-node"><UserRound /><strong>TUTOR</strong><small>acompanha o cuidado</small></div>
        <div className="business-arrow pet-arrow">→</div>
        <div className="business-node pet-node"><PawPrint /><strong>PET</strong></div>
      </Reveal>

      <div className="business-bottom">
        <Reveal className="scale-block" delay={280}>
          <span>Escala por</span>
          <strong>Pets ativos</strong>
          <strong>Profissionais</strong>
          <strong>Unidades</strong>
        </Reveal>
        <Reveal className="roadmap-block" delay={360}>
          <span>Próximas camadas</span>
          <div>
            {roadmap.map(({ label, icon: Icon }) => <small key={label}><Icon />{label}</small>)}
          </div>
        </Reveal>
      </div>
      <Stethoscope className="business-watermark" aria-hidden="true" />
    </Section>
  )
}
