import { BellRing, CalendarCheck, HeartPulse, Repeat2, ShieldCheck, TrendingUp } from 'lucide-react'
import { MetricCard } from '../components/MetricCard'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

const pipeline = ['Acompanhamento', 'Adesão', 'Retorno', 'Retenção', 'LTV']

export function RetentionSection() {
  return (
    <Section id="retencao" index={5} className="retention-section">
      <Reveal>
        <p className="eyebrow">Continuidade como valor</p>
        <h2 id="retencao-title">Continuidade também gera<br />valor para a clínica.</h2>
      </Reveal>

      <div className="retention-pipeline" aria-label="Ciclo de valor da continuidade">
        {pipeline.map((item, index) => (
          <Reveal className="pipeline-item" delay={100 + index * 70} key={item}>
            <span>{index + 1}</span><strong>{item}</strong>
          </Reveal>
        ))}
      </div>

      <Reveal className="validation-label" delay={440}>
        <span>KPIs de validação</span>
        <small>hipóteses a medir, não resultados alcançados</small>
      </Reveal>
      <div className="metrics-grid">
        <Reveal delay={470}><MetricCard value="90d" label="Retenção" icon={<Repeat2 />} /></Reveal>
        <Reveal delay={520}><MetricCard value="NPS" label="Experiência" icon={<HeartPulse />} /></Reveal>
        <Reveal delay={570}><MetricCard value="LTV" label="Por pet" icon={<TrendingUp />} /></Reveal>
        <Reveal delay={620}><MetricCard value="↑" label="Adesão preventiva" icon={<ShieldCheck />} /></Reveal>
      </div>

      <div className="contact-points" aria-label="Pontos legítimos de contato">
        <span><BellRing /> Lembrete</span>
        <span><CalendarCheck /> Retorno</span>
        <span><ShieldCheck /> Prevenção</span>
      </div>
    </Section>
  )
}
