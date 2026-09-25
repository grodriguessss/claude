# Repertório visual, dispositivos extraídos das referências do Gabriel

Este arquivo não é teoria. É a lista dos movimentos concretos que aparecem nas interfaces que o Gabriel selecionou como boas, escritos de um jeito que dá para executar. Quando faltar ideia de como resolver uma tela, o lugar de olhar é aqui antes de qualquer biblioteca de componente.

Coletado em 18/08/2026 a partir de 10 telas de referência e 12 animações de portfólio (Dribbble) mais o site brunasants.com.br.

## Índice

1. Os oito dispositivos que se repetem
2. Formas de gráfico que não são default
3. Cadastro das telas de referência
4. Espécimes negativos
5. Como usar isto num projeto

---

## 1. Os oito dispositivos que se repetem

Ordenados por frequência na amostra. Os três primeiros aparecem em oito ou mais das dez telas e por isso valem como padrão de casa, não como opção.

### 1.1 Moldura de canvas (aparece em 8/10)

A aplicação nunca encosta na borda do viewport. Ela mora como um cartão de raio alto flutuando sobre um **canvas tingido**, e a cor do canvas sai da paleta da marca em versão dessaturada ou saturada ao extremo.

Amostras: sálvia acinzentado, menta, lima chartreuse, lavanda, ciano, cinza neutro.

Por que funciona: cria uma segunda camada de identidade sem tocar em nenhum componente. Duas telas com a mesma estrutura e canvas diferente já são duas marcas. É o jeito mais barato de fugir do "toda plataforma parece igual".

Como executar: `body` recebe a cor de canvas, o shell da aplicação recebe `border-radius` entre 24px e 40px, `margin` de 16px a 40px e uma sombra difusa de opacidade baixíssima. Nunca `border-radius: 8px` no shell, a leitura de moldura só acontece com raio grande.

Contra-indicação: produto que o usuário passa oito horas por dia dentro. Ali a moldura rouba área útil. Nesse caso a moldura vira apenas uma faixa de canvas de 12px a 16px, ou some.

### 1.2 Inversão como recurso de profundidade (aparece em 8/10)

Em vez de empilhar sombra, o layout inverte luminosidade. Um painel escuro dentro de aplicação clara, ou uma casca escura contendo área de conteúdo clara.

Amostras concretas: card de análise de sono preto dentro de dashboard claro; rail de navegação quase preto encostado em conteúdo claro; card promocional escuro com foto no meio de uma fileira de cards claros; casca preta de raio alto contendo área cinza claro.

Por que funciona: o olho lê o painel invertido como "outro plano" instantaneamente, sem precisar de borda nem de sombra. E resolve a hierarquia de uma seção inteira com uma decisão só.

Regra de dose: um bloco invertido por viewport. Dois viram xadrez.

### 1.3 Chip de delta colado no número (aparece em 9/10)

Nenhum número aparece sozinho. Todo valor carrega ao lado uma pílula pequena com a variação e o sinal, e logo abaixo a base de comparação em texto miúdo.

Formato observado: `4,3k` + pílula `+5%` + linha `kcal today`. Ou `16.431` + pílula `▲ 15.5%` + linha `vs. 14,653 last period`.

Por que funciona: número sozinho obriga o usuário a perguntar "isso é bom?". A pílula responde antes da pergunta. É exatamente o princípio de ancoragem do estudo 08 aplicado a dashboard.

Como executar: pílula com `border-radius: 999px`, padding horizontal cerca de 8px, fundo em tinta de 10% a 15% da cor semântica, texto na cor semântica cheia, tamanho 11px a 12px, peso médio. Verde para melhora, vermelho ou coral para piora, cinza para estável. Seta ou triângulo minúsculo antes do número.

### 1.4 Estado vazio desenhado, não omitido

O que falta aparece como forma fantasma. Capacidade restante em blocos de contorno tracejado. Dias sem dado como barras cinza claro no mesmo lugar onde a barra cheia estaria. Colunas de silhueta atrás das barras reais.

Por que funciona: comunica escala e teto sem escrever "de 1000". E dá textura visual ao gráfico em vez de deixar buraco.

Como executar: mesma geometria da forma cheia, `fill: transparent`, `border: 1px dashed` na cor de traço fraca, ou `fill` na cor neutra 100. Nunca esconder.

### 1.5 Tipografia de display dentro do produto

Dashboards de referência carregam um título de 48px a 72px, grotesca, tracking negativo, leading apertado. Não é landing page, é a tela interna do app.

Amostras: "Health Overview", "Main Dashboard", "Managing Your Team and Workflows", "Client Data".

Por que funciona: é o sinal mais rápido de que alguém dirigiu a tela. Slop escreve "Dashboard" em 24px semibold e segue a vida.

Como executar: título de página entre `clamp(2.5rem, 4vw, 4.5rem)`, `letter-spacing: -0.02em` a `-0.03em`, `line-height: 0.95` a `1.05`. Peso 700 a 900 dependendo da família.

### 1.6 Chip embutido dentro da linha de título

Movimento raro e forte. O headline é interrompido por pílulas inline: um avatar circular, um ícone dentro de uma pílula colorida, uma tag.

Exemplo literal observado: "Managing [avatar] Your Team and [pílula lima com faísca] Workflows".

Por que funciona: transforma tipografia em composição. É o oposto exato de um `<h1>` limpo, e ninguém que gera tela por prompt genérico faz isso.

Como executar: `display: inline-flex; align-items: center;` no chip, `vertical-align: middle`, altura do chip próxima ao x-height da linha, `border-radius: 999px`.

### 1.7 Pílula e stadium como linguagem de forma dominante

O raio é comprometido: ou totalmente arredondado (`999px`) ou reto. Quase nada no meio. Botões, tabs, badges, barras de gráfico, avatares, tudo obedece a mesma escolha.

Por que funciona: o estudo 03 mostra o oposto disso como sintoma. O Glaido tinha nove valores de raio no DOM e por isso parecia dois produtos na mesma página. Escala curta e comprometida lê como um produto só.

Como executar: escala de raio com no máximo quatro degraus. Sugestão de casa: `2px / 12px / 24px / 999px`. Escolha qual dos quatro domina e use os outros como exceção justificada.

### 1.8 Foto ou render real como uma célula do grid

Imagem entra como um bloco do bento, do mesmo tamanho dos cards de dado, não como banner nem como ícone.

Amostras: foto de arquitetura ocupando uma célula quadrada entre cards de métrica; card escuro com retrato de personagem AI e CTA branco por cima; render 3D de foguete contido dentro do card de upgrade; objetos de vidro 3D flutuando sobre a UI numa apresentação em perspectiva.

Por que funciona: resolve a queixa do estudo 03 sobre "ícones de stock genéricos" sem virar decoração. A imagem ganha peso de conteúdo porque ocupa slot de conteúdo.

Regra de dose: uma célula de imagem por viewport em produto, duas em landing.

---

## 2. Formas de gráfico que não são default

Este é o achado mais aproveitável da amostra inteira, e o que mais rápido tira a cara de gerado. **Nenhuma** das telas boas usa a barra retangular padrão de biblioteca. Consulte também `graficos-e-dados.md`.

| Forma observada | Onde apareceu | Quando usar |
|---|---|---|
| Barra stadium (coluna de topo e base totalmente arredondados) | dashboard de operações, análise de sono | série temporal curta, até 12 pontos |
| Barra stadium empilhada com marcador de ponto | dashboard de operações | duas séries que somam num total |
| Progresso em blocos segmentados de pílula, cheios e tracejados | operações e transferência de dados | consumo contra teto, cota, capacidade |
| Preenchimento hachurado diagonal em vez de chapado | barras de gasto, barras de sono, limite mensal | quando duas séries dividem a mesma cor de família |
| Campo de pontos (dot density) formando a distribuição | receita mensal, CRM | volume ao longo do tempo com sensação orgânica |
| Punchcard de pontos com opacidade variável | índice de bem estar | intensidade por dia ou hora, matriz |
| Circle packing de três círculos sobrepostos | consumo calórico | composição de três partes de tamanho muito diferente |
| Histograma de traços de 1px (hairline ticks) | reconciliação, discrepâncias | densidade alta em espaço horizontal curto |
| Arco segmentado em vez de rosca contínua | saúde financeira, taxa de recompra | percentual único de destaque |
| Linha bezier suave sobre campo pontilhado | produtividade, foco | tendência de duas séries que se cruzam |
| Barra fantasma cinza com uma única barra em cor | dia mais ativo, semana | destacar um ponto dentro de uma série |

Regra que atravessa todas: **a cor entra pelo gráfico, não pelo botão.** É a correção que o estudo 07 aplica ao LinkGuard. Se a tela está sem graça, a resposta é dado com forma, não ícone colorido.

---

## 3. Cadastro das telas de referência

### 3.1 Gestão de workflows, canvas sálvia e acento lima
Estrutura: rail de ícones quase preto de raio alto, título display com chips inline, fileira de tabs em pílula com a ativa preta, três cards de KPI onde o do meio é lima cheio, gráfico de barras stadium bicolor, rail direito de cards verde acinzentado com afordância de seta.
O que roubar: os chips no título, o card do meio em cor cheia enquanto os vizinhos ficam neutros, os blocos de progresso tracejados.

### 3.2 ACRU, financeiro claro e denso
Estrutura: três colunas, semântica de cor fixa em amarelo para poupança, verde para receita, laranja para despesa, aplicada em barra, legenda, ponto, lista de categoria e barra de meta.
O que roubar: a disciplina semântica levada até o fim, o preenchimento hachurado, a árvore de navegação com linha vertical de conexão, a barra de gasto contra teto com dois rótulos nas pontas.

### 3.3 Reserva de salas, canvas menta e teal profundo
Estrutura: bento de células heterogêneas dentro do painel esquerdo, calendário em painel branco à direita, agenda em timeline com cards de borda esquerda colorida.
O que roubar: o bento misturando card de dado, card cheio de cor, foto e ilustração no mesmo grid; cards empilhados levemente deslocados sugerindo pilha.

### 3.4 Clerio, apresentação em perspectiva
Estrutura: UI inteira rotacionada em 3D, cortada pela moldura, objetos de vidro flutuando por cima, headline branco sobre gradiente.
O que roubar: isto é linguagem de **apresentação de case**, não de produto. Guardar para a entrega da peça no portfólio, não para a tela que o usuário vai operar.

### 3.5 flux, canvas lima com casca preta
Estrutura: casca preta contendo área clara, rail escuro, display grande, circle packing, punchcard de pontos, card escuro invertido para sono com barras hachuradas.
O que roubar: a paleta de três cores com papel definido (preto estrutura, lima destaque, lavanda série secundária); a coragem de usar chartreuse como canvas.

### 3.6 LoopAI, canvas lavanda com marca d'água diagonal
Estrutura: card branco flutuante, KPIs com chip de delta, campo de pontos como gráfico, rail direito com lista de tarefa e anéis de progresso, painel de assistente em lavanda.
O que roubar: textura diagonal sutil no canvas, chips de status com três cores semânticas discretas, um único gradiente contido no CTA.

### 3.7 CRM em perspectiva com verde elétrico
Estrutura: painéis sobrepostos em ângulo, timeline em pílula preta com um verde muito saturado, card de chamada com foto real, cards de lead com chips de origem e escala de interesse em pontos coloridos.
O que roubar: a escala de interesse por pontinhos em vez de número ou estrela; o verde único e agressivo contra preto e branco.

### 3.8 Welcome Kristin, produtividade
Estrutura: dois tiles com gradiente mesh, card de perfil com anel de progresso no avatar, linha bezier dupla sobre campo pontilhado, rail vertical de mês com pílula ativa.
Ressalva honesta: os tiles de gradiente mesh são o ponto mais próximo do slop nesta amostra. Funcionam porque o resto da tela é quieto e porque o gradiente é orgânico, não linear roxo azul. Se for usar, use um par e nada mais na tela.

### 3.9 Shopeers, e-commerce
Estrutura: SaaS claro convencional, azul primário, KPI com delta, medidor segmentado, barra fantasma com uma azul.
Ressalva honesta: é a tela mais padrão do conjunto. Serve como piso de competência, não como teto de ambição. Se o resultado ficar parecido com essa, está correto e não está autoral.

### 3.10 Apps Store, gestão de projeto em ciano
Estrutura: gantt com barras stadium em cores doces contendo avatares dentro da barra, card arrastado renderizado inclinado com cursor, popover de chamada flutuante, chat com forma de onda de áudio.
O que roubar: renderizar o estado de interação (card inclinado, cursor) na peça estática; avatar dentro da barra do gantt em vez de ao lado.

### 3.11 Estudos Dribbble em movimento (12 animações)
Padrões de motion recorrentes: entrada por stagger de baixo para cima com deslocamento curto; números contando até o valor; barras crescendo da base; painel lateral deslizando; troca de aba com underline correndo. Nada de bounce, nada de rotação, nada de mola exagerada. Duração longa e easing suave, o oposto de transição de 150ms linear.

### 3.12 brunasants.com.br, site de serviço
Estrutura: promessa direta no hero, processo em quatro etapas numeradas, portfólio em cards, prova com clientes nomeados, três faixas de preço, FAQ que antecipa objeção, dupla saída WhatsApp e formulário.
O que roubar: escassez declarada no topo ("agenda aberta, 2 vagas"); especificidade como prova ("Page Speed acima de 90"); fundador visível em vez de agência sem rosto; microcopy que assume a ansiedade do cliente na pergunta do FAQ.

---

## 4. Espécimes negativos

Guardar para reconhecer o inimigo. Encontrados dentro do próprio material de referência.

**Dashboard de IA genérico.** Anel de progresso em 75%, cartões de vidro fosco, gradiente azul para violeta no fundo, tipografia sem tracking, ícone genérico em cada card. Esse é o slop de segunda geração descrito no estudo 02. Se a tela entregue tiver três desses cinco itens, ela é slop.

**Tela monocromática saturada.** O contra-exemplo do estudo 07: a mesma interface pintada inteira em laranja ou amarelo. Dado rico, leitura zero. Cor não é decisão de humor, é decisão de contraste.

**Grade de ícones de feature.** Três a seis cards iguais, cada um com ícone de linha genérico no topo, título em negrito e dois parágrafos. Aparece em toda landing gerada. Substituir por prova, número ou imagem de produto.

---

## 5. Como usar isto num projeto

1. Antes de desenhar, escolher **um** dispositivo da seção 1 que ainda não foi usado nos últimos três projetos, e comprometer a tela com ele.
2. Escolher **uma** forma de gráfico da seção 2 como a forma-assinatura do projeto. Todas as visualizações daquele produto herdam a família dessa forma.
3. Comparar a tela final contra a seção 4. Se bater em dois itens, refazer.
4. Registrar em documento de projeto qual dispositivo e qual forma de gráfico foram usados, com data e cliente, para não repetir a mesma combinação no projeto seguinte. É esse registro que impede a AJUX de virar o próprio template.
