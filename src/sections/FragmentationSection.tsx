import { CalendarCheck, FileText, MessageCircle } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { Section } from '../components/Section'

export function FragmentationSection() {
  return (
    <Section id="fragmentacao" index={0} className="fragmentation-section">
      <div className="fragmentation-visual" aria-hidden="true">
        <Reveal className="fragment-card paper-card" delay={80}>
          <span className="fragment-icon"><FileText /></span>
          <small>ENCAMINHAMENTO</small>
          <strong>Documento impresso</strong>
          <i />
          <i />
          <i className="short" />
        </Reveal>
        <div className="broken-connection">
          <span />
          <b>×</b>
          <span />
        </div>
        <Reveal className="fragment-card message-card" delay={180}>
          <span className="fragment-icon"><MessageCircle /></span>
          <small>WHATSAPP</small>
          <strong>Retorno agendado</strong>
          <div><CalendarCheck size={15} /> mensagem recebida</div>
        </Reveal>
      </div>

      <div className="fragmentation-copy">
        <Reveal delay={260}>
          <p className="eyebrow">Uma jornada quebrada em partes</p>
          <h1 id="fragmentacao-title">O problema não é falta de informação.<br /><em>É ela estar fragmentada.</em></h1>
          <p className="lead compact">Documento. Mensagem. Profissional.<br />E alguém precisa juntar tudo.</p>
        </Reveal>
        <Reveal className="opening-question" delay={450}>
          <p>E se o tutor não precisasse lembrar,<br />organizar e interpretar <strong>sozinho</strong> toda<br />a jornada de saúde do seu pet?</p>
        </Reveal>
      </div>
    </Section>
  )
}
