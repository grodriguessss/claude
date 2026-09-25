# Gráfico e dado, onde a personalidade entra mais barato

Achado central do repertório: **nenhuma interface boa da amostra usa a barra padrão de biblioteca.** A forma do dado é o lugar onde uma decisão de dez minutos separa a tela autoral da tela gerada, e quase ninguém mexe nisso.

Este arquivo se combina com a skill `dataviz` quando ela estiver disponível: `dataviz` cuida de paleta acessível, escolha de forma por tipo de dado e consistência de sistema. Aqui está o que fazer para não ficar genérico.

## 1. Regra de abertura

Antes de qualquer gráfico, responder três coisas:

1. **Qual pergunta este gráfico responde?** Se ninguém consegue formular a pergunta, o gráfico é decoração e sai.
2. **Qual é a forma-assinatura deste produto?** Escolher uma família de forma e fazer todas as visualizações herdarem dela. Coerência de forma é o que faz o dashboard parecer um sistema.
3. **A cor entra pelo dado?** Se a tela está sem graça, a correção é dado com forma e cor, não botão colorido nem ícone.

## 2. Catálogo de formas

### 2.1 Barra stadium
Coluna com topo e base totalmente arredondados, raio igual à metade da largura. Substitui a barra retangular em qualquer série de até doze pontos.
Variação forte: duas séries empilhadas dentro da mesma pílula, cada uma com um marcador de ponto no topo do seu segmento.
Quando não usar: mais de vinte pontos, porque a pílula fina perde a leitura do raio.

### 2.2 Progresso em blocos segmentados
Em vez de barra contínua, uma fileira de oito a doze blocos em forma de pílula. Os consumidos ficam cheios, os restantes ficam com contorno tracejado.
Melhor uso: cota, capacidade, crédito, limite. Comunica o teto sem escrever o teto.

### 2.3 Preenchimento hachurado
Listras diagonais finas em vez de cor chapada. Serve para diferenciar duas séries da mesma família cromática sem precisar de uma segunda cor, e para marcar dado projetado ou parcial contra dado realizado.
Executar com `repeating-linear-gradient(45deg, cor 0 2px, transparent 2px 5px)` ou `<pattern>` em SVG.

### 2.4 Campo de pontos
A série vira uma nuvem de pontos empilhados, um ponto por unidade ou por faixa. Dá sensação orgânica e aguenta densidade alta sem virar mancha.
Melhor uso: volume ao longo do tempo, distribuição, atividade.

### 2.5 Punchcard
Matriz de pontos onde a opacidade ou o tamanho carrega a intensidade. Eixo horizontal de tempo, eixo vertical de categoria ou hora.
Melhor uso: padrão de uso, hábito, sazonalidade.

### 2.6 Circle packing
Círculos sobrepostos de tamanho proporcional. Funciona com três a cinco partes e só quando os tamanhos são bem diferentes entre si.
Melhor uso: composição de um total, quando a proporção importa mais que o valor exato.

### 2.7 Histograma de hairlines
Traços verticais de 1px lado a lado. Cabe muito dado em pouco espaço horizontal e lê como instrumento.
Melhor uso: densidade alta em card pequeno, rodapé de KPI.

### 2.8 Arco segmentado
Semicírculo ou arco de 270 graus dividido em traços, com a porção preenchida em cor e o resto em neutro. Substitui a rosca contínua e o anel de progresso, que são marca registrada de slop.
Sempre com o número grande no centro e o contexto embaixo, no formato "68%" mais "na rota para a meta de 80%".

### 2.9 Barra fantasma com destaque
Toda a série em cinza claro e apenas um ponto em cor. Responde "qual foi o melhor dia" antes de o usuário procurar.

### 2.10 Linha bezier sobre campo texturizado
Duas curvas suaves que se cruzam, sobre fundo de pontos ou de grade muito fraca, com tooltip flutuante no ponto de interesse. Evita a linha dura de biblioteca.

### 2.11 Sparkline dentro do KPI
Micrográfico de 40px a 60px de altura dentro do card de número. É o jeito mais rápido de trazer cor real para uma fileira de KPIs sem colorir ícone.

## 3. Anatomia do card de KPI

Ordem que funciona, de cima para baixo:

1. Ícone monoline em container neutro, à esquerda, e o rótulo da métrica ao lado, em 13px a 14px.
2. Menu de três pontos à direita, se houver ação.
3. Valor em display, 32px a 48px, tabular, peso alto.
4. Chip de delta colado ao valor, com sinal e cor semântica.
5. Base de comparação em 11px a 12px, cor neutra fraca. "vs. 14.653 no período anterior".
6. Sparkline ou barra de progresso ocupando a largura, opcional.

Erros que aparecem sempre: número sem comparação, rótulo maior que o valor, ícone colorido decorativo, quatro KPIs idênticos repetidos em três telas do mesmo produto.

## 4. Tabela e lista densa

1. Numeral tabular obrigatório, `font-variant-numeric: tabular-nums`.
2. Alinhar número à direita, texto à esquerda, data ao centro ou à direita.
3. Zebra de linha só quando houver mais de oito colunas. Abaixo disso, hairline entre linhas resolve melhor.
4. Trazer identidade visual para dentro da linha: logo da marca, avatar, chip de origem, escala de pontinhos para rating. É isso que separa tabela de planilha.
5. Ação da linha colapsada em menu de três pontos, não três botões visíveis.
6. Status sempre como chip com cor semântica e texto, nunca só cor.

## 5. Grade, eixo e legenda

1. Linha de grade em opacidade baixíssima, ou só horizontal, ou nenhuma. Nunca grade completa em cinza médio.
2. Eixo Y com três a cinco marcações. Mais que isso é ruído.
3. Legenda encostada no dado sempre que possível: rotular a própria série no fim da linha em vez de criar caixa de legenda separada.
4. Zero do eixo Y respeitado em barra. Cortar a base de barra distorce e queima confiança.
5. Tooltip como card pequeno com sombra, listando cada série com seu ponto colorido e valor, mais a data no topo.

## 6. Acessibilidade de dado

1. Cor nunca é o único portador de significado. Sempre acompanhada de forma, posição ou rótulo.
2. Testar a paleta em deuteranopia e protanopia antes de fechar.
3. Contraste mínimo de 3:1 entre séries adjacentes e contra o fundo.
4. Tabela equivalente disponível para leitor de tela, ou `aria-label` descrevendo a tendência em uma frase.
