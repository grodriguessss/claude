# Dra. Pietra & Dr. Guilherme · Design

**Direção:** editorial impresso com calor de consultório. Papel creme, Playfair reto e itálico na mesma frase (o sotaque dos posts do Instagram), moldura em arco (o espelho dos posts), um acento oliva e imagens com tratamento quente.

**Dispositivo assinatura:** Dicionário descomplicado, que traduz jargão odontológico para português claro. É a bio ("a gente descomplica o seu sorriso") virando interface.

## Paleta

| Token | Hex | Papel |
|---|---|---|
| `--color-bg` | #faf6f0 | fundo papel |
| `--color-surface` | #f3ebe1 | seções alternadas |
| `--color-surface-deep` | #e9dccb | molduras vazias |
| `--color-surface-inverse` | #1f1814 | dicionário, CTA final |
| `--color-text` | #2b211c | texto principal |
| `--color-text-soft` | #54433a | corpo |
| `--color-text-muted` | #76604f | kicker, legenda (5.5:1) |
| `--color-accent` | #5c6046 | acento único: CTA e ênfase |
| `--color-accent-on-dark` | #9a9d7f | acento sobre escuro |
| `--color-warm` | #dcbea7 | calor em imagem e brilho, nunca em botão |

## Tipografia

Playfair Display (400, itálico 400) para display. Hanken Grotesk (400, 500, 600) para texto. IBM Plex Mono 400 só em rótulo técnico (kicker, numeração 01/08, rótulos de canto, CROSP).
Escala de 6 degraus: 12 · 16 · 18 a 21 · 26 a 36 · 36 a 60 · 46 a 96 px. Monogramas são marca e ficam fora da escala.
Itálico só na palavra emocional ou de oferta (descomplica, sem complicar, sem pressa), nunca na funcional.

## Espaço e raio

Espaço base 4: 4, 8, 12, 16, 24, 32, 48, 64, 96, 144. Seção: 88 a 160px.
Raio: 0 · 6 · 28 · pílula. O arco é pílula no topo e 6 na base.

## Matéria e papelaria

Grão de papel gerado como imagem (`assets/grain.png`) sobre a página inteira em multiply. Um único elemento de papelaria: o ticket serrilhado da avaliação no CTA final. Rótulos técnicos em mono nos cantos do arco, como na referência de capa editorial.

## Rubrica interface-2026 (revisão de 28/09/2026)

| Critério | Nota | Por quê |
|---|---|---|
| Decisão declarada | 3 | direção, termos, motivo e banimentos escritos |
| Anti-slop | 3 | linter limpo, sem tell no teste dos 30 segundos |
| Repertório | 3 | pílula de imagem no título, inversão, arco, ticket e rótulo mono coerentes |
| Hierarquia | 3 | três níveis e um acento oliva |
| Sistema | 3 | tokens semânticos, escala de 6, raio de 4 degraus |
| Acessibilidade | 3 | contraste medido (muted 5.5:1), foco, alvo de 44px, reduced-motion |
| Honestidade | 2 | chutes listados; faltam dados reais de prova social |
Total: 20 de 21.

## Banimentos deste projeto

Azul clínico. Depoimento inventado. Número de vaidade sem fonte. Vídeo de procedimento com boca aberta. Foto de dentista de banco de imagem se passando pelos dois.

## Para substituir antes de publicar

- `assets/depois.webp` no hero: trocar pela foto do casal (vertical 4:5).
- `.person__photo` em Nós: fotos individuais 3:4 (hoje mostram o monograma).
- Antes e depois: trocar por caso real, com autorização do paciente e dentro das regras do CFO.
- Tratamentos listados foram assumidos a partir da bio. Validar com eles.
- Endereço da clínica em São Carlos.

## Chutes e o que muda se estiverem errados

| Chute | Se estiver errado |
|---|---|
| Lista de 5 tratamentos | remover a linha do tratamento e o termo do dicionário ligado a ele |
| CROSP 174593 é da Pietra e 161438 do Guilherme | trocar nos cards de Nós e no rodapé |
| Sobrenomes Michelin e Mattos (lidos na placa de um post) | trocar em hero, Nós e rodapé |
| "Mostramos opções e valores antes" como processo | reescrever passo 03 e o ticket |
| Pagamento: nada prometido (sem Pix, sem parcelamento) | se tiver parcelamento, entra no ticket, perto do CTA |

## Movimento (rodada 3)

- Hero: título entra linha a linha por máscara (1.2s, stagger 110ms), foto revela de baixo para cima.
- Faixa de tratamentos com pílulas de imagem, 48s por volta, pausa no hover.
- Frase "Adiar o simples" acende palavra por palavra no scroll.
- Tratamentos: palco fixo em arco que troca de foto por revelação conforme o item ativo; no mobile cada item tem foto própria.
- Dicionário virou tradutor em formato de stories: jargão aparece, é riscado, a tradução entra palavra por palavra. Avança sozinho a cada 7.5s só quando visível, pausa no hover e para quando a pessoa escolhe um termo.
- Linhas do passo a passo se desenham; parallax leve no modelo 3D, na sala e na escova.
- Tudo desliga com prefers-reduced-motion. JavaScript puro, sem biblioteca.

## Créditos de imagem (Unsplash, licença livre)

| Arquivo | Origem |
|---|---|
| t-lentes.webp | https://unsplash.com/photos/photo-1660300110546-3b39e353b672 |
| t-implantes.webp | https://unsplash.com/photos/photo-1660300110556-fa3ccf6f4eb1 |
| t-clareamento.webp | https://unsplash.com/photos/photo-1654373535457-383a0a4d00f9 |
| t-resina.webp | https://unsplash.com/photos/photo-1690167687106-180b0ea1d813 |
| t-limpeza.webp | https://unsplash.com/photos/photo-1617984161716-189c889bd474 |
| escova.webp | https://unsplash.com/photos/photo-1634068966402-86a27b9d57c1 |
| sala.webp | https://unsplash.com/photos/photo-1759262151080-e05ba1c6294f |

As demais imagens vêm do template Dentel (referência de prospecção). Trocar por fotos próprias da clínica antes de publicar de verdade.
