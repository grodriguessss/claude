---
name: figma-diagramacao-criativa
description: "Monta peças de social media no Figma com diagramação variada, escolha de elemento a partir da copy e leitura da imagem pela regra dos terços"
---

# Diagramação criativa no Figma

Esta skill existe para um problema específico: quando você monta 20, 30, 50 peças de
uma vez, a tentação é achar uma fórmula que funciona e repetir. O resultado é um lote
que o cliente olha e diz "está tudo igual". Ela impede isso.

## Passo 1 — Extrair a gramática do que já foi aprovado

Antes de criar qualquer coisa, leia com `get_metadata` ou `use_figma` as peças que o
cliente já aprovou e monte uma tabela com os valores reais: fonte, tamanho, line-height,
letter-spacing, cores em hex, posição do logo, altura e stops de cada degradê.

Nunca estime esses valores de olho num screenshot. Um título de 186px que quebra a
palavra em duas linhas é um erro grosseiro e derruba a revisão inteira.

Das peças aprovadas, destile **de quatro a seis arquétipos de diagramação** — não um.
Cada arquétipo é uma posição de texto diferente: topo, base, lateral, centro, bloco
chapado, foto desfocada. Dê nome a cada um.

## Passo 2 — Ler a imagem antes de decidir onde vai o texto

Divida a foto em 9 células, meça energia de borda mais contraste local em cada uma, e
identifique a área de interesse e a faixa calma:

```python
from PIL import Image, ImageOps, ImageFilter
import numpy as np

def analisa(caminho, alvo=9/16):
    im = Image.open(caminho).convert('RGB')
    w, h = im.size
    if w/h > alvo:
        nw = int(h*alvo); im = im.crop(((w-nw)//2, 0, (w-nw)//2+nw, h))
    else:
        nh = int(w/alvo); im = im.crop((0, (h-nh)//2, w, (h-nh)//2+nh))
    im = im.resize((270, 480))
    g = ImageOps.grayscale(im)
    bordas = np.asarray(g.filter(ImageFilter.FIND_EDGES), dtype=float)
    arr = np.asarray(g, dtype=float)
    energia = bordas + np.abs(arr - arr.mean())*0.35
    # média por célula 3x3 -> ladoInteresse, faixaCalma, ladoTexto, espelhar
```

O texto vai na região **oposta** à área de interesse. Três alavancas quando eles brigam:

1. Mover o bloco de texto para a faixa calma.
2. Espelhar a foto na horizontal (o assunto troca de lado, o texto fica onde precisa).
3. Subir ou descer a foto dentro do frame para o assunto escapar do degradê.

O degradê nunca pode engolir o assunto. Se cobriu a ponte, sobe a foto até a ponte
reaparecer acima do degradê.

## Passo 3 — Escolher o elemento a partir da copy

Leia o texto da peça e pergunte o que ele pede. Floricultura pede pétalas. Dia dos
Surdos pede mãos em Libras. Trânsito pede semáforo. O elemento sai do conteúdo, nunca
de um catálogo genérico.

Regras duras:

- **Nunca desenhe o elemento à mão em vetor.** Gere no Magnific e remova o fundo, ou
  busque uma imagem e recorte. Vetor desenhado na mão sai amador.
- Alterne 3D e 2D chapado para o recurso não virar maneirismo. Prompt que funciona para
  o 2D: *flat 2D vector illustration, bold clean outlines, simple geometric shapes,
  editorial sticker style, palette of <cores da marca>, isolated on plain pure white
  background, no text, no shadow*.
- **Menos da metade das peças leva elemento.** O resto vive de tipografia.
- O elemento vai no espaço vazio, do lado oposto ao texto, sangrando pela borda. Se não
  cabe sem competir com o conteúdo, ele sai.
- Recorte local de fundo branco: máscara `min > 238 and (max-min) < 14`, flood a partir
  das bordas com `scipy.ndimage.label` para não furar brancos internos, crop no bbox do alpha.

## Passo 4 — Montar em lotes e revisar de olho

Um builder paramétrico com os arquétipos, rodado em lotes de cinco. Depois de cada lote,
`get_screenshot` de cada frame, baixe os PNGs e monte uma folha de contato local para
olhar o lote inteiro de uma vez. É assim que você enxerga a repetição que não aparece
quando você olha uma peça por vez.

Distribua os arquétipos de forma que nenhum se repita em peças vizinhas, e limite o
arquétipo mais óbvio a poucas aparições no lote.

## Passo 5 — Checar o erro grosseiro antes de entregar

O cliente avalia em duas camadas. Primeiro o erro grosseiro; se tem qualquer um, o resto
nem é olhado:

- elemento ou fio em cima do texto
- fonte errada
- corte da foto aparecendo na borda do frame
- logo ou assinatura fora do eixo do texto
- palavra quebrando no meio
- texto sem contraste contra a foto
- peça sem conteúdo (um branch do builder que não rodou)

Só depois vem o refinamento. Verifique programaticamente: conte os filhos de cada frame
contra o esperado, procure hashes de imagem duplicados entre peças, confirme que a
sequência de dias está completa e em ordem.

## Coerência de eixo

Se o texto está à direita, o logo, a assinatura e os fios vão para a direita também.
Nada fica órfão de alinhamento. A foto é sempre maior que o frame e deslocada, para
nunca aparecer emenda; quando ainda assim aparecer, o degradê fica exatamente por cima
do corte.

## Cuidado com edição simultânea

Se o cliente está com o arquivo aberto, nós criados podem sumir por undo dele e camadas
podem ser agrupadas. Releia o estado real da linha antes de qualquer correção em lote, e
não apague nada que você não criou.