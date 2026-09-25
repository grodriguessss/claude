# Leis visuais, os números que não mudam

Camada Lei. Isto aqui não é tendência, é como o olho funciona. Só muda em auditoria trimestral com evidência forte.

Quando o pedido for de execução e não de direção, este é o arquivo que resolve.

## Índice

1. Hierarquia
2. Tipografia
3. Espaço e grade
4. Cor
5. Dark mode
6. Sombra e elevação
7. Ícone e botão
8. Estados e feedback
9. Microinteração
10. Overlay e imagem

---

## 1. Hierarquia

Três alavancas e só três: **tamanho, posição, cor**. O que cria hierarquia é o contraste entre elas, nunca o valor absoluto.

1. O mais importante fica perto do topo.
2. Maior e colorido lê como mais importante que menor e neutro.
3. Imagem sempre que houver imagem honesta disponível. Foto quebra o padrão de rótulo e valor mais rápido que qualquer ajuste de peso.
4. Informação em pares de rótulo e valor com o mesmo peso lê como planilha. Escolher o protagonista, aumentar, e rebaixar o resto a metadado.
5. Relação entre dois dados vira componente visual, não duas linhas de texto. Origem e destino viram dois pinos ligados por linha tracejada, não "Entrega em" e "Retirada em".

## 2. Tipografia

1. Uma família sans bem escolhida resolve quase todo projeto. Duas famílias só quando a segunda tem papel declarado, tipicamente display contra corpo, ou mono para dado.
2. Título grande: `letter-spacing` entre **-2% e -3%**, `line-height` entre **110% e 120%**. É o ajuste que dá cara profissional mais rápido.
3. Corpo: `line-height` entre 1.5 e 1.65. Medida de linha entre 60 e 75 caracteres.
4. Quantidade de tamanhos: até **seis** em site ou landing, com amplitude grande, por exemplo 64 / 42 / 32 / 20 / 16 / 14. Em dashboard a amplitude encolhe muito, raramente passa de **24px** no maior, porque a densidade é alta.
5. Rótulo e eyebrow: caixa alta, 11px a 12px, `letter-spacing` positivo entre +0.06em e +0.12em. É o único lugar onde tracking positivo é correto.
6. Número em tabela e dado: fonte mono ou variante tabular, `font-variant-numeric: tabular-nums`, para as colunas alinharem.
7. Tipografia fluida em display: `clamp()` calculado sobre `min(vw, vh)` e não só sobre `vw`, senão o título estoura em viewport baixo.

## 3. Espaço e grade

1. Grade de 12 colunas serve para **responsividade de conteúdo repetido**, não para landing autoral. 12 no desktop, 8 no tablet, 4 no mobile.
2. Espaço em branco importa mais que a grade. Referência de respiro entre itens irmãos: cerca de **32px**.
3. Agrupar por proximidade. Elementos que pertencem ao mesmo bloco ficam mais perto entre si do que do bloco vizinho. Isso é hierarquia sem tinta.
4. Escala de espaçamento em múltiplos de **4**, porque sempre dá para dividir pela metade sem quebrar consistência. Escala útil: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
5. Container: entre **1160px e 1240px** lê melhor que 1440px na maioria dos casos. Ritmo entre seções por espaço, tipicamente 96px a 160px, não por régua.
6. Assimetria é permitida e recomendada. Duas colunas de 62/38 ou 48/52 leem mais dirigidas que 50/50 repetido.

## 4. Cor

1. Começar por **uma** cor primária. Clarear para fundo, escurecer para texto. Daí sai a rampa de dez tons que serve chip, estado e gráfico.
2. Um acento por viewport. Acento em tudo não é acento nenhum.
3. Semântica fixa e respeitada em todo o produto: azul confiança e informação, verde sucesso, amarelo aviso, vermelho perigo. Se o produto usar uma dessas como cor de marca, a semântica precisa mudar de tom, não de significado.
4. Cor com propósito. Cada uso responde a "o que isto significa". Cor por humor é decoração e decoração some no scroll.
5. Contraste: corpo de texto no mínimo **4.5:1**, texto grande e elemento de interface no mínimo **3:1**. Verificar, não estimar.
6. A cor deve entrar preferencialmente pelo **dado** e pela **imagem**, e só depois pelo controle. Dashboard sem graça se resolve com gráfico com forma e cor, não com botão colorido.
7. Derivar o acento da imagem quando houver imagem dominante. Puxar um tom da foto para os detalhes de interface faz a página falar num tom só.

## 5. Dark mode

Não é inverter. É outro sistema.

1. Fundo em quase-preto, entre `#08090a` e `#141414`. Preto puro achata.
2. Profundidade por luminosidade: quanto mais elevada a superfície, **mais clara** ela é. Card acima do fundo, popover acima do card.
3. Sombra praticamente não funciona. Elevação por hairline, uma borda interna de 1px em branco de opacidade muito baixa, tipo `inset 0 1px 0 rgba(255,255,255,.06)`.
4. Borda clara cria contraste demais. Reduzir para opacidade entre 6% e 12%.
5. Chip e cor saturada: baixar saturação e brilho no fundo do chip, subir no texto do chip. Inverter essa lógica cria a hierarquia.
6. Texto de corpo nunca em branco puro.
7. A paleta tem mais liberdade do que se imagina. Roxo, vermelho e verde profundos funcionam bem, não é obrigatório navy e cinza.

## 6. Sombra e elevação (light mode)

1. A maioria das sombras vem forte demais. Baixar opacidade e aumentar blur.
2. Card pede sombra fraca. Popover, menu e modal pedem sombra forte, porque flutuam sobre outro conteúdo.
3. Sombra em duas camadas lê melhor que em uma: uma curta e escura para o contato, uma longa e clara para o ambiente.
4. Combinar sombra interna com externa produz botão tátil.
5. Regra final: **se a sombra é a primeira coisa que você nota, está errada.**

## 7. Ícone e botão

1. Um único set de ícone monoline no projeto inteiro, com a mesma espessura de traço. Phosphor e Lucide são bases sólidas.
2. Tamanho do ícone casado com a line-height do texto vizinho, tipicamente 20px ou 24px, e o texto encostado com gap de 8px.
3. Emoji não é ícone. Exceção: quando emoji é escolha declarada de estilo do produto inteiro, como no Notion.
4. Padding de botão: horizontal cerca de duas vezes o vertical. Referência: 16px vertical e 32px horizontal em botão grande.
5. Par de CTA primário e secundário lado a lado, com contraste bem diferente. Ghost button para navegação e ação terciária.
6. Alvo de toque mínimo de 44px por 44px em qualquer coisa clicável no mobile.

## 8. Estados e feedback

Regra de ouro: **toda ação do usuário tem resposta.**

1. Botão: no mínimo **default, hover, pressed, disabled**, mais **loading** quando houver espera.
2. Input: **default, focus, filled, error**, e **warning** quando houver problema não bloqueante. Focus com borda e leve halo, error com borda e mensagem específica.
3. Estado vazio: nunca "nenhum dado encontrado". Dizer o que é aquilo, por que está vazio e qual a próxima ação, com o botão ali.
4. Loading: skeleton no formato do conteúdo que vai chegar, não spinner centralizado, quando o layout for previsível.
5. Erro: dizer o que aconteceu e o que fazer. Código de erro só como complemento.
6. Sucesso: confirmação visível e efêmera. Ação destrutiva pede confirmação e desfazer.

## 9. Microinteração

Feedback elevado um nível: além de "aconteceu", confirma o quê e dá personalidade.

1. Copiar precisa confirmar que copiou. Um chip que sobe resolve.
2. Hover revela informação secundária, tooltip com o nome real da ação.
3. Duração: 120ms a 200ms para resposta direta de controle, 400ms a 800ms para entrada de conteúdo, 1.2s a 1.8s para revelação em scroll com peso.
4. Easing: sair rápido e chegar devagar. `cubic-bezier(.16,1,.3,1)` para entrada, `cubic-bezier(.4,0,.2,1)` para transição de estado.
5. Entrada em stagger de 40ms a 80ms entre irmãos, deslocamento curto de 8px a 24px, nunca rotação.
6. `prefers-reduced-motion: reduce` desliga tudo de forma limpa e o conteúdo aparece completo. Sempre com failsafe: se o asset não carregar em 2.5s, revelar assim mesmo.

## 10. Overlay e imagem

1. Overlay chapado sobre foto estraga a foto e o texto ao mesmo tempo.
2. Usar gradiente linear que mostra a imagem em cima e converge para fundo legível embaixo.
3. Progressive blur sobre o gradiente entrega leitura mais moderna e preserva mais da imagem.
4. Imagem no hero precisa mostrar o que a pessoa está comprando ou usando. Arte decorativa bonita que não responde "o que eu levo" não converte.
5. Reservar o slot da imagem antes de gerar a imagem. Preencher com stand-in em CSS na paleta certa, para que a arte final entre sem mudar o layout.
6. Fundo transparente de PNG exige checar cor de fallback na classe do `<img>`. É a origem mais comum de fundo indesejado atrás de imagem.
