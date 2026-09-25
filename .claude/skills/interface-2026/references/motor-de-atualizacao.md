# Motor de atualização

Skill de design apodrece mais rápido que skill de copy, porque estética tem ciclo curto. O que é assinatura em agosto vira default em janeiro, e a skill continua recomendando com a mesma confiança de sempre. Skill desatualizada com voz de autoridade é pior que skill nenhuma.

## As três camadas

**Lei.** Sobrevive à década. Psicologia, hierarquia, contraste, acessibilidade, os números de tipografia e espaço. Mora em `leis-visuais.md`, `psicologia-ux.md` e `graficos-e-dados.md`. Só muda em auditoria trimestral com evidência forte.

**Clima.** Muda em semanas. O que virou default e por isso deixou de ser assinatura, o que está saturado, que família estética estourou, que padrão de componente virou clichê, o que as ferramentas passaram a gerar sozinhas. Mora em documento de projeto, nunca chumbado no SKILL.md.

**Prova.** O que foi rodado de verdade. Que direção o cliente aprovou, qual reprovou e por quê, que combinação já foi usada e não pode repetir. Documento de projeto, com etiqueta de validado, hipótese ou contexto específico.

## Documentos de projeto

| Caminho | Camada | Conteúdo |
|---|---|---|
| `claude/interface-clima-atual.md` | Clima | o que virou default, o que saturou, o que está subindo. Cada item com fonte, data e validade |
| `claude/interface-direcoes-usadas.md` | Prova | tabela de projeto, data, família, dispositivo e forma de gráfico |
| `claude/interface-provas.md` | Prova | o que o cliente aprovou e reprovou, com o motivo declarado |

## Regra de leitura antes de agir

A skill lê `interface-clima-atual.md` e `interface-direcoes-usadas.md` antes de propor direção. Se o clima não existir, tiver mais de **60 dias** ou a ferramenta de projetos não estiver disponível, trabalhar por princípio, usar `vocabulario-estetico.md` como base e **dizer que está fazendo isso**. Nunca inventar tendência para preencher lacuna.

O aviso de lacuna se dá **uma vez por sessão**, junto com a recomendação de ligar o motor. Repetir em toda entrega vira ruído.

## Cadência

1. **Radar diário.** Teto de cinco itens. Filtro duro: só entra o que muda uma decisão. Dia sem novidade registra "sem mudança relevante". Motor obrigado a achar novidade todo dia começa a inventar novidade.
2. **Síntese semanal.** Promove para o clima só o que apareceu em três fontes independentes. Aposenta o vencido. Resolve contradição sem apagar o antigo.
3. **Reescrita mensal.** Toda adição exige um candidato a corte. Roda os testes de `evals.md`, sobe versão, escreve changelog, entrega o pacote novo para reinstalar.
4. **Auditoria trimestral.** Única autorizada a mexer na camada Lei.

## Formato de registro do radar

```
data da coleta | fonte com link e data de publicação | o que mudou, uma frase factual |
implicação prática para a próxima tela | força (confirmado / estudo / observação de mercado / palpite) | validade
```

## Fontes do radar

Awwwards e SOTD, Godly, Land-book, Refero (`styles.refero.design`) para design system legível por máquina, Mobbin para padrão de tela real por fluxo, Dribbble e Behance para forma emergente, 21st.dev para componente, changelog de Linear, Vercel, Stripe, Figma e Anthropic para o que os líderes mudaram, e o que os geradores de site estão entregando por padrão, porque isso define a nova linha do genérico.

## Textos prontos das tarefas agendadas

Criar sempre com a ferramenta de tarefas agendadas do Claude, nunca com agendador local de sessão, porque sessão agendada começa do zero e é descartada. Horários em UTC.

**Diário, `0 11 * * *`**
> Radar de interface. Varra Awwwards SOTD, Godly, Land-book, Mobbin, Dribbble popular e os changelogs de Linear, Vercel, Stripe, Figma e Anthropic desde a última coleta. Teto de cinco itens. Só entra o que muda uma decisão de tela: padrão que virou default e por isso deixou de ser assinatura, forma nova de componente ou de gráfico, mudança de ferramenta que altera o que sai por padrão. Para cada item registre data da coleta, fonte com link e data de publicação, o que mudou em uma frase factual, implicação prática, força e validade. Anexe ao fim de `claude/interface-clima-atual.md` na seção Radar. Se não houver nada relevante, registre "sem mudança relevante" com a data e pare. Não invente novidade.

**Semanal, `0 12 * * 1`**
> Síntese semanal de interface. Leia a seção Radar de `claude/interface-clima-atual.md`. Promova para a seção Clima confirmado apenas o que apareceu em três fontes independentes ou veio confirmado pela plataforma de origem. Aposente todo item com validade vencida sem reconfirmação, movendo para a seção Histórico com a data de aposentadoria. Quando houver contradição, registre as duas leituras com data, não apague a antiga. Limpe a seção Radar do que foi processado. Reescreva o arquivo inteiro e salve.

**Mensal, `0 13 1 * *`**
> Reescrita mensal da skill interface-2026. Leia `claude/interface-clima-atual.md`, `claude/interface-direcoes-usadas.md` e `claude/interface-provas.md`. Atualize a skill: mova para `antislop.md` o que virou default e por isso agora é tell; acrescente a `vocabulario-estetico.md` a família nova que se firmou; atualize `repertorio-visual.md` com dispositivo novo observado. Toda adição exige um candidato a corte, informe qual e por quê. Não toque em `leis-visuais.md`, `psicologia-ux.md` nem `graficos-e-dados.md`, que são camada Lei. Rode os testes de `references/evals.md` e reporte a nota. Suba a versão, escreva o changelog e entregue o pacote `.skill` atualizado como arquivo para reinstalar.

**Trimestral, `0 14 1 1,4,7,10 *`**
> Auditoria trimestral da camada Lei da skill interface-2026. Reveja `leis-visuais.md`, `psicologia-ux.md` e `graficos-e-dados.md` contra evidência publicada nos últimos doze meses: pesquisa de usabilidade, mudança de norma de acessibilidade (WCAG), estudo de conversão com amostra declarada. Só proponha alteração com evidência forte e citada. Para cada mudança proposta, escreva o que muda, a fonte, a força da evidência e o que deixa de valer. Se nada tiver evidência suficiente, registre que a camada Lei segue válida e pare. Entregue as propostas para aprovação humana antes de aplicar.

## Regras anti-degradação

1. Toda afirmação de clima tem validade. Vencida sem reconfirmação, sai.
2. Nada entra sem fonte e data.
3. Teto de tamanho por arquivo. `SKILL.md` até 450 linhas, referência até 350.
4. Uma ocorrência é acontecimento, duas é coincidência, três começa a ser padrão.
5. Resultado interno é amostra própria e se declara como tal quando contrariar dado externo.
6. Nunca reconstruir memória plausível. Log vazio responde que não há registro.
