# Testes de qualidade

Roda na reescrita mensal e sempre que a skill for alterada. Cada teste tem prompt, o que se espera e o que reprova.

## Rubrica, 0 a 3 por critério

| Critério | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Decisão declarada | nenhuma direção nomeada | direção citada sem termos | direção com termos | direção com termos, motivo e o que foi recusado |
| Anti-slop | três ou mais tells | dois tells | um tell | zero tells |
| Repertório | forma toda de biblioteca | uma forma tratada | forma-assinatura escolhida | assinatura coerente em toda a tela |
| Hierarquia | plana | um nível claro | três níveis | três níveis e um único acento |
| Sistema | valores soltos no código | alguns tokens | tokens completos | tokens semânticos, sem hex em componente |
| Acessibilidade | não verificada | contraste ok | contraste, foco e alvo | tudo mais reduced-motion e leitura sem cor |
| Honestidade | chute entregue como fato | chute não sinalizado | chutes listados | chutes listados com o que muda se estiverem errados |

Piso de aprovação: **16 de 21**, e nenhum critério em 0.

## Testes

### T1, pedido cru de landing
Prompt: "faz uma landing pra uma ferramenta de IA que organiza reuniões"
Espera: diagnóstico do que falta, direção assumida e declarada, bake-off proposto ou uma versão com direção nomeada, lista de chutes.
Reprova: entregar hero centralizado, gradiente, três cards de feature com ícone, sem citar direção nenhuma.

### T2, pedido de dashboard
Prompt: "preciso de um dashboard de vendas com faturamento, ticket médio, conversão e ranking de produto"
Espera: forma-assinatura de gráfico escolhida e justificada, KPI com delta e base de comparação, um acento, densidade adequada, estado vazio previsto.
Reprova: quatro cards iguais com ícone colorido, anel de progresso decorativo, barra padrão de biblioteca, número sem comparação.

### T3, resistência a pedido de slop
Prompt: "faz igual aquele estilo de SaaS moderno, dark com gradiente roxo e glassmorphism"
Espera: aceitar a direção do Gabriel, executar bem, e ao mesmo tempo dizer em uma linha qual parte disso é padrão saturado e o que trocaria para manter o mesmo clima com assinatura própria. Entregar mesmo assim.
Reprova por dois lados: recusar e dar sermão, ou executar sem nenhuma ressalva.

### T4, correção de tela existente
Prompt: cola de HTML ou screenshot de tela vibe-codada, "melhora isso"
Espera: diagnóstico por dimensão usando `antislop.md`, prioridade por impacto sobre esforço, correções concretas com valores, e o antes e depois do que muda de fato.
Reprova: reescrever tudo sem diagnóstico, ou listar generalidades como "melhorar espaçamento".

### T5, respeito a sistema existente
Prompt: "acrescenta uma tela de configurações no app, seguindo o que já existe"
Espera: ler os tokens e componentes existentes, obedecer, e não abrir bake-off. Se algo do sistema estiver quebrado, apontar em uma linha e seguir obedecendo.
Reprova: propor direção nova, inventar componente fora do sistema, abrir funil de cinco versões.

### T6, repetição
Prompt: dois pedidos seguidos de landing para clientes diferentes, na mesma sessão
Espera: duas direções diferentes entre si, e a consulta ao registro de direções usadas antes de propor a segunda.
Reprova: as duas landings com a mesma estrutura, mesma paleta lógica e mesma família tipográfica.

### T7, honestidade sobre clima
Prompt: "o que está em alta em interface agora?"
Espera: ler `claude/interface-clima-atual.md`. Se não existir ou estiver vencido, dizer isso claramente, responder por princípio e recomendar ligar o motor. Uma vez, não em toda resposta.
Reprova: afirmar tendência com confiança sem fonte nem data.

### T8, texto de interface
Prompt: qualquer entrega que inclua microcopy
Espera: zero travessão, zero jargão inflado, botão com verbo específico, estado vazio que ensina, especificidade numérica onde couber.
Reprova: "leveraging", "próximo nível", "nenhum dado encontrado", travessão em qualquer lugar.

## Linter

`scripts/lint_slop.py` roda contra HTML, CSS e JSX e reporta os tells mecânicos: gradiente roxo azul, Inter como fonte declarada, contagem de valores de raio, branco puro em corpo, preto puro em fundo, `background-clip: text`, travessão em conteúdo, contagem de acentos, ausência de `prefers-reduced-motion`, hex chumbado em arquivo de componente.

O linter pega o que é mecânico. Ele não substitui a rubrica, que é onde mora o julgamento.
