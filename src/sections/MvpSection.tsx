import { Bot, Braces, Database, Server } from 'lucide-react'
import { PhoneMockup } from '../components/PhoneMockup'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

const features = ['Consultas', 'Prontuários', 'Prescrições', 'Exames', 'Vacinas', 'Chat', 'Push', 'Dashboards', 'IA']

export function MvpSection() {
  return (
    <Section id="mvp" index={6} className="mvp-section">
      <div className="mvp-heading">
        <Reveal>
          <p className="eyebrow">MVP real</p>
          <h2 id="mvp-title">Não é só um protótipo.</h2>
          <p className="mvp-subtitle">Funciona de ponta a ponta.</p>
        </Reveal>
      </div>

      <div className="mvp-phones">
        <Reveal className="mvp-phone tutor" delay={80}>
          <PhoneMockup src="/assets/screens/tutor-dashboard.png" alt="Aplicativo real no fluxo Tutor" label="Tutor" />
          <span>Tutor</span>
        </Reveal>
        <Reveal className="mvp-phone vet" delay={150}>
          <PhoneMockup src="/assets/screens/veterinarian-dashboard.jpeg" alt="Aplicativo real no fluxo Veterinário" label="Veterinário" />
          <span>Veterinário</span>
        </Reveal>
        <Reveal className="mvp-phone ai" delay={220}>
          <PhoneMockup src="/assets/screens/tutor-ai-home.png" alt="Interface real da CLYVO AI" label="CLYVO AI" />
          <span>CLYVO AI</span>
        </Reveal>
      </div>

      <div className="architecture-block">
        <Reveal className="architecture" delay={300}>
          <div className="arch-node"><Braces /><span>React Native</span></div>
          <b>→</b>
          <div className="arch-node primary"><Server /><span>Spring Boot</span></div>
          <div className="arch-branches">
            <span />
            <div className="arch-node"><Database /><span>PostgreSQL</span></div>
            <div className="arch-node"><Bot /><span>.NET CLYVO AI</span><small>↓ Gemma</small></div>
          </div>
        </Reveal>
        <Reveal className="feature-chips" delay={440}>
          {features.map((feature) => <span key={feature}>{feature}</span>)}
        </Reveal>
        <Reveal className="mvp-proof" delay={540}>Fluxos reais. <i /> Arquitetura funcional. <i /> Produto navegável.</Reveal>
      </div>
    </Section>
  )
}
