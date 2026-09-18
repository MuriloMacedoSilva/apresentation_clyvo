import { Bot, CalendarDays, CheckCircle2, FileHeart, FlaskConical, MessageCircleQuestion, Pill, ShieldCheck, Sparkles, Syringe } from 'lucide-react'
import { PhoneMockup } from '../components/PhoneMockup'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

const contexts = [
  { label: 'Prontuários', icon: FileHeart },
  { label: 'Prescrições', icon: Pill },
  { label: 'Exames', icon: FlaskConical },
  { label: 'Vacinas', icon: Syringe },
  { label: 'Consultas', icon: CalendarDays },
]

export function AiSection() {
  return (
    <Section id="ai" index={4} className="ai-section dark-section">
      <div className="ai-heading">
        <Reveal>
          <p className="eyebrow"><Sparkles size={15} /> CLYVO AI</p>
          <h2 id="ai-title">Uma IA que conhece<br />a história <em>daquele pet.</em></h2>
          <p className="lead">Não responde apenas à pergunta.<br />Responde com base na história daquele pet.</p>
        </Reveal>
      </div>

      <div className="ai-product">
        <Reveal className="ai-phone-back" delay={190}>
          <PhoneMockup
            src="/assets/screens/tutor-ai-loading.png"
            alt="CLYVO AI analisando os registros autorizados"
            label="CLYVO AI carregando"
          />
        </Reveal>
        <Reveal className="ai-phone-front" delay={90}>
          <PhoneMockup
            src="/assets/screens/tutor-ai-home.png"
            alt="Tela inicial real da CLYVO AI"
            label="CLYVO AI"
          />
        </Reveal>
      </div>

      <div className="ai-flow">
        <Reveal className="flow-entry" delay={100}>
          <MessageCircleQuestion /><span>Pergunta do tutor</span>
        </Reveal>
        <span className="flow-arrow" aria-hidden="true">↓</span>
        <Reveal className="flow-authorized" delay={180}>
          <ShieldCheck /><span>Acesso autorizado pelo Java</span>
        </Reveal>
        <div className="context-grid">
          {contexts.map(({ label, icon: Icon }, index) => (
            <Reveal className="context-pill" delay={230 + index * 45} key={label}>
              <Icon /><span>{label}</span>
            </Reveal>
          ))}
        </div>
        <span className="context-converge" aria-hidden="true">↓ contexto clínico limitado</span>
        <Reveal className="ai-core" delay={500}>
          <Bot /><div><strong>.NET CLYVO AI</strong><small>Gemma</small></div>
        </Reveal>
        <Reveal className="ai-answer" delay={580}>
          <CheckCircle2 /><span>Resposta contextualizada</span>
        </Reveal>
        <Reveal className="ai-boundary" delay={640}>
          <strong>Resume. Explica. Contextualiza.</strong>
          <small>Não substitui diagnóstico ou prescrição veterinária.</small>
        </Reveal>
      </div>
    </Section>
  )
}
