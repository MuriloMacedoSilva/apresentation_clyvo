# CLYVO VET — apresentação web

Apresentação em scrollytelling para o pitch final da CLYVO VET. O projeto é totalmente estático, funciona offline depois do build e não depende de API, backend, Render, Ollama ou serviços externos.

## Executar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview -- --host
```

Atalho equivalente para build e preview:

```bash
npm run present
```

Recomenda-se executar `npm run build` antes da banca e apresentar a versão gerada em `dist/` por meio de `npm run preview -- --host`.

## Controles

- `ArrowDown`, `PageDown` ou `Space`: próxima seção
- `ArrowUp` ou `PageUp`: seção anterior
- `Home`: primeira seção
- `End`: última seção
- `F`: entrar ou sair de tela cheia
- Mouse e trackpad continuam disponíveis para scroll normal

## Assets locais

Os screenshots reais foram copiados de `../prints_telas/` para `public/assets/screens/`, preservando os arquivos originais:

- `tutor-dashboard.png`: experiência e MVP do Tutor
- `tutor-notifications.jpeg`: notificações do Tutor
- `tutor-ai-home.png`: tela inicial da CLYVO AI
- `tutor-ai-loading.png`: estado de análise da CLYVO AI
- `veterinarian-dashboard.jpeg`: MVP do Veterinário
- `clinical-history.jpeg`: histórico longitudinal da Luna
- `vaccination.jpeg`: apoio visual de vacinação
- `appointments.jpeg`: apoio visual de consultas
- `role-selection.jpeg`: seleção de perfil disponível para uso futuro

O componente `PhoneMockup` possui fallback textual caso qualquer imagem deixe de carregar.

## Estrutura

- `src/components`: componentes visuais e controles da apresentação
- `src/hooks`: observação das seções e atalhos de teclado
- `src/sections`: as nove cenas da narrativa
- `src/styles`: tokens, layout, animações e ajustes por viewport
- `public/assets`: logo oficial e screenshots locais
