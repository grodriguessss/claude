# Vocabulário estético, as famílias de direção

Este arquivo existe para resolver o problema que o Chase chama de cultivar gosto: sem vocabulário concreto, o pedido vira "deixa mais premium" e o resultado vira média.

Cada família traz termos que entram literalmente no campo **Aesthetic** do prompt de direção. Consulte `bake-off.md` para o formato do prompt.

## Como usar

1. No bake-off, escolher **cinco famílias distintas entre si**, nunca cinco variações da mesma.
2. Copiar os termos da família para o prompt sem traduzir a intenção.
3. Conferir na seção final quais famílias já foram usadas nos últimos projetos, para não repetir.

---

## As famílias

### 1. Editorial impresso
Referência mental: revista, jornal, livro de arte.
Termos: serifa de alto contraste, kicker em caixa alta, coluna estreita, fio de régua fina, número de volume e edição, fundo creme ou papel, itálico como ênfase, drop cap, marginália, muita margem.
Serve bem: marca de autoridade, conteúdo denso, consultoria, publicação.
Cuidado: fica frio se não houver conteúdo real de texto para sustentar.

### 2. Print-tech, papel com dado
Referência mental: relatório técnico impresso, mapa topográfico, planta.
Termos: fundo em tom terroso claro, ilustração de linha de curva de nível, chamada em mono, chip de identificador de transação, ticks de régua, coordenada, timestamp, grotesca de display, um acento quente.
Serve bem: analytics, produto de dado, engenharia, logística.

### 3. Instrumento de precisão
Referência mental: painel de aeronave, console de estúdio, mesa de som.
Termos: quase-preto, um acento único e vivo, medidor com escala segmentada, numeral tabular mono, hairline de separação, densidade alta, rótulo minúsculo em caixa alta, sem sombra.
Serve bem: dashboard operacional, monitoramento, ferramenta de profissional.

### 4. Bloco publicitário
Referência mental: pôster de campanha, outdoor, capa de disco.
Termos: condensada preta em caixa alta, tracking muito negativo, cor chapada de alta saturação, sem decoração, bloco de cor ocupando meia tela, produto no centro, flash direto, alto contraste.
Serve bem: marca com atitude, food, moda, evento, varejo.

### 5. Suave orgânico
Referência mental: papelaria fina, cerâmica, cosmético.
Termos: canvas em tom dessaturado, raio muito alto, sombra difusa quase inexistente, blob orgânico, tipografia geométrica arredondada, paleta de dois tons próximos mais um acento, ilustração de traço solto.
Serve bem: saúde, bem estar, educação infantil, produto de consumo suave.

### 6. Neo-brutalista contido
Referência mental: interface de terminal com atitude, fanzine.
Termos: borda preta grossa, sombra sólida deslocada sem blur, cor primária pura, raio zero, grotesca larga, grade visível, elemento levemente rotacionado, sublinhado grosso.
Serve bem: produto para desenvolvedor, ferramenta com personalidade, comunidade.
Cuidado: envelhece rápido e cansa em uso diário. Bom para landing, arriscado para app.

### 7. Vasto e quieto
Referência mental: cinema contemplativo, fotografia de paisagem.
Termos: espaço negativo enorme, imagem monumental, tipografia pequena no meio do vazio, quase monocromático, um acento derivado da própria foto, movimento lento e pesado, transição por dissolução.
Serve bem: marca premium, ticket alto, ciclo de decisão longo.

### 8. Dado como textura
Referência mental: visualização científica, arte generativa.
Termos: campo de pontos, matriz punchcard, dígito repetido formando forma, hachura diagonal, traço de 1px em densidade, gradiente por acúmulo e não por interpolação.
Serve bem: IA, pesquisa, produto quantitativo.

### 9. Papelaria digital
Referência mental: caderno, post-it, quadro de cortiça.
Termos: textura de papel sutil, card levemente rotacionado, cor de marca-texto, fita adesiva, escrita à mão como acento, sombra curta e macia, empilhamento desalinhado.
Serve bem: produtividade, colaboração, educação.

### 10. Retro-técnico
Referência mental: manual de aparelho dos anos 80, monitor CRT.
Termos: dither de 1 bit, paleta de dois tons, scanline, fonte bitmap ou mono estreita, moldura de janela desenhada, indicador de LED, tabela ASCII.
Serve bem: produto nichado, comunidade técnica, lançamento com tom de curiosidade.
Cuidado: acessibilidade sofre. Usar como camada, não como sistema inteiro.

### 11. Materialidade de vidro e metal
Referência mental: render de produto, joalheria.
Termos: objeto 3D translúcido, refração, especular reagindo ao cursor, iridescência contida, fundo em gradiente suave de um tom só, tipografia leve.
Serve bem: apresentação de case, página de lançamento.
Cuidado: é o vizinho mais próximo do slop de segunda geração. Só funciona com objeto próprio bem feito e com o resto da tela em silêncio.

### 12. Clássico remixado
Referência mental: pintura antiga com intervenção contemporânea.
Termos: obra em domínio público com grão, serifa refinada, moldura, legenda de museu, um elemento moderno intruso, paleta puxada da própria pintura.
Serve bem: marca que quer densidade cultural, conteúdo, ensaio.

---

## Registro de uso

Manter em documento de projeto (`claude/interface-direcoes-usadas.md`) a tabela de qual família foi usada em qual projeto e quando. Antes de propor as cinco do bake-off, ler esse registro e **excluir as duas mais recentes**. É a regra que impede a AJUX de desenvolver o próprio sotaque repetido.

Formato do registro:

```
| data | projeto | família escolhida | dispositivo de repertório | forma de gráfico assinatura |
```
