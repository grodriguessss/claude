# Bake-off, o processo 5 → 3 → 1

O erro que mais custa é tentar acertar de primeira. One-shot em design não converge, ele regride para a média, e depois vira o ciclo de "deixa mais premium" rezando para o output melhorar.

O processo aqui é um funil de comparação. Custa mais tokens na largada e economiza as dez iterações cegas que vêm depois.

## Índice

1. Anatomia do prompt de direção
2. Fase 1, cinco direções
3. Fase 2, três variações
4. Fase 3, hero e imagem
5. Fase 4, costura, cor e movimento
6. Fase 5, painel de ajuste ao vivo
7. Quando pular o bake-off

---

## 1. Anatomia do prompt de direção

Quatro campos. Nem um a menos. Nem um documento de dez mil linhas, que deixa tudo igual e estreito.

```
1. AESTHETIC:   [família de vocabulario-estetico.md] + 5 a 8 termos concretos
2. REFERENCE:   [screenshot ou URL], casar a SENSAÇÃO, não o conteúdo
3. INTENT:      o que a pessoa deve sentir em 3 segundos, e por quê
4. GUARDRAILS:  SEMPRE [constantes]. NUNCA [banimentos]
```

**Aesthetic.** A família geral mais os termos. Os termos são o que impede a interpretação genérica. "Editorial" sozinho não diz nada. "Serifa de alto contraste, kicker vermelho em caixa alta, fundo creme, número de volume e edição, fio de régua fina, itálico como ênfase" diz.

**Reference.** Imagem da biblioteca ou URL de site real. A regra de ouro é literal: **casar a sensação, não o conteúdo.** Não é para copiar layout nem texto. E vale tanto para o hero quanto para o corpo, que é onde quase todo mundo esquece de dar referência.

**Intent.** O quê, para quem e o que a pessoa deve fazer. É isso que dita densidade, comprimento e temperatura. "Deve transmitir inteligência séria e calma, não hype de SaaS. Em três segundos o fundador precisa pensar que essa gente entende de dado de verdade."

**Guardrails.** Sempre e nunca. Os "nunca" saem da lista de banimento em `antislop.md` mais os específicos do projeto. Os "sempre" são as constantes que dão coesão às cinco versões: uma imagem monumental ancora a página, imagem sempre processada e nunca crua, tipografia em extremos com pouco no meio, fundo quase monocromático com um único acento quente.

---

## 2. Fase 1, cinco direções

Prompt de fan-out:

> Construa a [página ou tela] de [produto], objetivo de conversão [ação]. CTA primário em toda versão é [texto], presente no topo e repetido no fim.
>
> INTENT: [...]
> GUARDRAILS SEMPRE: [...]
> NUNCA: [...]
>
> Cinco versões, cada uma em pasta própria de `v1` a `v5`, uma direção por versão, sem misturar direções.
>
> DIREÇÃO 1 [nome da família]: Aesthetic = [termos]. Reference = [arquivo ou URL], leia antes de desenhar, case a sensação e não o conteúdo. Slot de imagem = [descrição do que virá].
> DIREÇÃO 2 [...] até a 5.
>
> IMPORTANTE: não gerar nenhuma imagem agora. Reservar o slot do hero e preencher com stand-in em CSS chapado na paleta correta, para que a arte final entre depois sem mudar o layout.

Três regras que fazem essa fase funcionar:

1. **Cinco famílias distintas entre si.** Cinco variações de minimalismo não é bake-off, é ilusão de escolha.
2. **Sem imagem nesta fase.** Imagem é cara e trava a decisão de estrutura. Stand-in em CSS na paleta certa, substituível sem mexer no layout.
3. **Comparador lado a lado.** Gerar um `bakeoff.html` que carrega as cinco em iframe, com teclas 1 a 5 para alternar e `G` para grade. Decidir olhando junto, não abrindo cinco abas.

Entrega para o Gabriel: o comparador rodando mais uma tabela de uma linha por versão com nome, o que ela aposta e o risco dela.

---

## 3. Fase 2, três variações

Escolhida a direção, três variações **do mesmo DNA estético**, mudando a estrutura do corpo e não a paleta.

> Vamos com a versão [X]. Gere três variações dessa mesma estética, mantendo tipografia, paleta e acento idênticos, mudando o formato do corpo.

Eixos que valem variar: coluna única contra assimétrico contra emoldurado com scroll-snap; índice de navegação fixo que acompanha o scroll contra nav flutuante; densidade alta contra respiro largo; ordem das seções.

Eixos que **não** valem variar aqui: fonte, paleta, raio. Se mudar isso, voltou para a fase 1.

---

## 4. Fase 3, hero e imagem

Só agora entra imagem, e primeiro a do hero, porque ela redefine a cor de tudo.

1. Pedir **quatro candidatas** compostas de propósito para o layout escolhido, com a zona da manchete limpa e o peso visual onde o layout precisa. Resolução 2K.
2. Montar um **hero-lab.html** com chips e teclas 1 a 4 para trocar a foto ao vivo dentro do layout real. Julgar imagem fora do layout é chute.
3. Escolhida a imagem, pedir de três a cinco **gradações de cor** da mesma composição, do monocromático ao mais colorido, e comparar no mesmo lab.
4. Derivar o acento da interface da imagem escolhida. Datas, hovers e destaques passam a ecoar o tom da foto. É esse amarrado que faz a página falar num tom só.

Ferramentas de geração: qualquer MCP de imagem conectado na sessão. Verificar o que existe antes de assumir.

---

## 5. Fase 4, costura, cor e movimento

Três pedidos que separam a página boa da página premium:

**Costura entre hero e corpo.** A transição não pode ser um corte seco. Os últimos 20vh a 25vh do hero dissolvem no fundo da página sem borda visível, e a primeira seção parece condensar a partir da imagem.

**Amarração de cor.** Um único acento quente derivado da imagem, aplicado em marginália, hover e número de destaque.

**Peso no carregamento.** Segurar o fundo até a imagem carregar, entrar com easing a partir de escala 1.04 a 1.06, sequência de revelação de manchete para marginália para CTA para nav. No scroll, elementos sobem em 1.4s a 1.7s. `prefers-reduced-motion` desliga tudo de forma limpa, com failsafe de 2.5s que revela a página mesmo se a imagem travar. E varredura por `requestAnimationFrame` para nenhum título ficar preso em `opacity: 0`.

---

## 6. Fase 5, painel de ajuste ao vivo

Em vez de pedir dez versões da página com fontes diferentes, gerar um painel de tweaks no dev server que edita os tokens ao vivo.

O que expor: família de display, tracking do H1, tamanho e peso do H2, família e tamanho do corpo, cor de acento com três a cinco opções, intensidade de movimento, distância de revelação, layout do hero em dois ou três modos.

Botões obrigatórios: **copiar CSS** e **resetar**.

Princípio de dose: preferir dois ou três controles que **remodelam a sensação** a vinte micro-sliders de pixel. Layout do hero, intensidade de movimento e acento de marca valem mais que "padding do card".

---

## 7. Quando pular o bake-off

O funil completo não cabe em todo pedido. Pular quando:

1. O projeto já tem design system fechado e a tarefa é adicionar uma tela dentro dele. Aqui a resposta é obedecer o sistema, não explorar direção.
2. O pedido é correção pontual, e não criação.
3. É peça da AJUX com assinatura já definida.
4. O Gabriel disse explicitamente que quer uma versão só.

Nesses casos, entregar uma versão e declarar em uma linha qual direção foi assumida e por quê. Assumir em silêncio é o que vira genérico.
