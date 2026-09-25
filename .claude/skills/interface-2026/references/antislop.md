# Anti-slop, o catálogo de tells

Slop não é feiura. É ausência de decisão. A tela sai coerente, funcional e sem nenhuma escolha visível, porque quando ninguém decide o modelo regride para a média, e a média de 2026 tem cara.

Este arquivo é a lista do que denuncia. Use como checklist de saída, nunca como inspiração ao contrário.

## Índice

1. As duas gerações de slop
2. Os cinco tells que o olho pega primeiro
3. Catálogo por dimensão
4. Lista de banimento padrão
5. O teste dos trinta segundos

---

## 1. As duas gerações de slop

**Geração 1, já morta e ainda aparecendo.** Fundo branco, fonte Inter em tudo, gradiente azul para roxo na palavra-chave do título, três cards iguais com ícone de linha, botão com `border-radius: 8px`, seção de pricing com o plano do meio marcado "Popular".

**Geração 2, a perigosa.** É boa. Dark mode quase preto, um orb de brilho difuso ao fundo, bento grid, nav em pílula flutuante, glassmorphism, anel de progresso em percentual, tipografia decente. Passa em qualquer checklist de qualidade e ainda assim grita que saiu de dois prompts, porque é a mesma tela que trezentos produtos entregaram no mesmo trimestre.

A conclusão que interessa: **modelo melhor não resolve, só move a fronteira do genérico.** O que resolve é decisão declarada e repertório próprio.

---

## 2. Os cinco tells que o olho pega primeiro

Ninguém diz "a escala tipográfica está errada". Dizem "parece barato". Traduzido:

| Tell | Sintoma | Correção |
|---|---|---|
| Tipografia | cinco estilos diferentes num hero só | no máximo três, e a variação vem de tamanho, não de família |
| Espaçamento | todo gap igual, nada parece agrupado | ritmo por proximidade, itens do mesmo grupo mais perto entre si do que do grupo vizinho |
| Cor | acento em nav, hero, card e rodapé | um acento por viewport, o resto neutro |
| Hierarquia | caixa cinza em volta de cada card para separar | deixar o espaço em branco separar, borda só onde houver ambiguidade real |
| Imagem | ícone de stock genérico em cada feature | imagem própria, produto real, dado com forma, ou nada |

---

## 3. Catálogo por dimensão

### Tipografia
1. Fonte Inter, ou a fonte de sistema, como escolha padrão sem justificativa.
2. Título grande com tracking neutro ou positivo. Display precisa de tracking negativo entre -0.02em e -0.03em.
3. Line-height de 1.5 em manchete. Título grande pede 0.95 a 1.15.
4. Escala tipográfica esparramada. Dezessete tamanhos no DOM significa dezessete decisões que ninguém tomou. Referência boa opera com seis a oito.
5. Gradiente aplicado em texto via `background-clip: text`. Sinal quase infalível de geração automática.
6. Peso 600 usado como "importante" em toda a tela, sem nada em 400 nem em 800 para contrastar.

### Cor
1. Gradiente linear de azul para roxo em qualquer lugar.
2. Branco puro `#ffffff` em texto de corpo sobre fundo escuro. Usar cinza claro entre `#d0d6e0` e `#8a8f98`.
3. Preto puro `#000000` como fundo de dark mode. Usar quase-preto entre `#08090a` e `#141414`.
4. Cor decidida por saturação e não por papel. Toda cor precisa responder "o que ela significa aqui".
5. Paleta de seis cores distribuídas por igual. Referência boa opera com um neutro, um acento e no máximo dois semânticos.
6. Verde para sucesso e vermelho para erro sem nenhum outro uso de cor na tela inteira. Semântica sem identidade também é genérico.

### Espaço e layout
1. Tudo centralizado. Hero centralizado, seção centralizada, rodapé centralizado.
2. Container de 1440px porque foi o default, sem decisão de medida de linha.
3. Grade de três colunas repetida em toda seção da página.
4. Todos os cards do mesmo tamanho. Bento existe justamente para quebrar isso.
5. Padding igual em cima, baixo, esquerda e direita em componente que pede assimetria.
6. Seção separada por régua horizontal de largura total. Ritmo por espaço lê melhor que ritmo por linha.

### Forma e elevação
1. `border-radius: 8px` em absolutamente tudo.
2. Mais de cinco valores de raio no DOM.
3. Sombra pesada de múltiplas camadas com blur enorme em card estático. Card pede sombra fraca, popover pede forte.
4. Glassmorphism aplicado sem fundo por trás que justifique o vidro.
5. Elevação por sombra em dark mode. Ali profundidade vem de superfície mais clara, não de sombra.
6. Borda de 1px em cinza médio em volta de tudo.

### Ícone e componente
1. Emoji usado como ícone. Pesos, estilos e cores inconsistentes entre si.
2. Ícone de biblioteca diferente misturado na mesma tela.
3. Ícone grande demais. Regra: casar o ícone com a line-height do texto ao lado, tipicamente 20px ou 24px.
4. Avatar circular com gradiente e a inicial dentro. Trocar por card de conta com nome, papel e ação.
5. Card morto que não faz nada, herdado de um layout que a IA copiou.
6. Botão com padding vertical igual ao horizontal. Guia: largura do padding cerca de duas vezes a altura.

### Dado e gráfico
1. Barra retangular padrão da biblioteca, sem nenhum tratamento.
2. Anel de progresso em 75% como elemento decorativo.
3. Número grande sem comparação ao lado.
4. Os mesmos quatro KPIs repetidos em três telas do mesmo produto.
5. Gráfico com legenda de sete séries em cores arbitrárias.
6. Eixo com grade completa em cinza médio competindo com o dado.

### Texto de interface
1. Travessão em qualquer forma. Denuncia texto gerado.
2. "Leveraging", "empower", "seamless", "unlock", "revolutionize", "transformar sua rotina", "levar ao próximo nível".
3. Regra de três em toda frase. Clareza, autenticidade e impacto.
4. Botão escrito "Subscribe" onde caberia "Começar". Verbo de compromisso onde cabia verbo de início.
5. Microcopy vaga. "Setup rápido" perde para "pronto em 2 toques".
6. Empty state escrito "Nenhum dado encontrado".

### Movimento
1. Transição de 150ms linear em tudo.
2. Bounce e mola em interface de produto.
3. Animação que ignora `prefers-reduced-motion`.
4. Elemento que entra com rotação.
5. Parallax aplicado sem camadas, só no fundo.
6. Nada anima. Ausência total de movimento também é falta de decisão.

---

## 4. Lista de banimento padrão

Vai em todo guardrail de prompt, salvo justificativa escrita:

```
NUNCA: gradiente azul para roxo. Fonte Inter ou system-ui como padrão.
        Blob 3D brilhante de SaaS. Grade de ícones de feature.
        Branco puro em corpo de texto. Preto puro em fundo escuro.
        border-radius 8px uniforme. Anel de progresso decorativo.
        Emoji como ícone. Glassmorphism sem fundo que justifique.
        Travessão no texto. Stock photo sem tratamento.
        Paleta distribuída por igual. Tudo centralizado.
```

A lista é o piso. Cada projeto acrescenta banimentos próprios que saem da direção escolhida.

---

## 5. O teste dos trinta segundos

Antes de entregar qualquer tela, responder por escrito:

1. **Qual decisão visível eu tomei aqui que outra pessoa não teria tomado?** Se a resposta for "usei a cor da marca", não houve decisão.
2. **Se eu trocar a cor de acento e a fonte, essa tela vira qual concorrente?** Se virar qualquer um, a estrutura é genérica e o problema não é cor.
3. **Quantos acentos existem neste viewport?** Mais de um, cortar.
4. **Qual é a única coisa que o usuário deve fazer nesta tela, e ela é o elemento de maior contraste?** Se não for, refazer a hierarquia.
5. **Que forma nesta tela não sai de biblioteca?** Se nenhuma, escolher uma e construir.
6. **Passa na lista de banimento?** Rodar `scripts/lint_slop.py` e ler os avisos.

Reprovar em dois ou mais itens quer dizer refazer, não ajustar.
