---
name: figma-metodo-gabriel
description: "Acrescenta a regra de origem dos elementos (gerar no Magnific ou recortar, nunca desenhar) e o truque do degradê sobre o corte da foto"
---

# Método de Figma do Gabriel

## 1. O ciclo criativo (antes de abrir o Figma)

Nunca monte só encaixando texto numa foto. Quatro leituras:

**Leia a copy.** Qual o campo semântico? Copy sobre floricultura pede pétalas. Setembro Amarelo pede o laço. Queimada pede fumaça. Alfabetização pede letras.

**Leia a imagem.** Onde está a área de interesse (terços / proporção áurea)? Que espaço vazio ela oferece?

**Decida o elemento.** O que deixa a peça mais bonita e conversa com o assunto? Se não acrescenta, não entra.

**Componha** aplicando a seção 3.

Isso é esperado sem que ele peça. A proposta de elemento vem pronta.

## 2. De onde vem o elemento (regra dura)

**Nunca desenhe o elemento à mão em vetor.** Vetor feito por IA fica amador e ele reprova na hora.

A ordem é:

1. **Gerar no Magnific.** `images_generate` com prompt pedindo o objeto isolado em fundo branco liso, sem texto, sem gente, sem mãos. Gere 3 variantes numa chamada só e escolha a melhor olhando.
2. **`images_remove_background`** para virar PNG com alfa.
3. **Recortar o bbox do alfa** antes de subir, senão o elemento entra com margem morta e fica pequeno no frame.
4. Subir com `upload_assets` e aplicar como fill `scaleMode: FIT` num retângulo com a proporção real do recorte.

**Sem créditos no Magnific:** buscar imagem no Google, recortar o fundo e usar do mesmo jeito.

Checar `account_balance` antes e avisar que a geração consome crédito.

### Repertório de elementos por tema

| Campo da copy | Elemento |
|---|---|
| Primavera, flores, jardim | Pétalas, ramo cortado pela borda |
| Saúde mental, campanha de mês | Laço da cor da campanha |
| Meio ambiente, árvore, parque | Folhas, silhueta de copa |
| Queimada, fogo, seca | Fumaça, brasa |
| Educação, alfabetização | Letras soltas, livro, lápis |
| Obra, asfalto, zeladoria | Faixa de sinalização, cone |
| Saúde, SUS | Coração, linha de batimento |
| Cidadania, atendimento | Balão de fala |
| Data cívica | Bandeira estilizada |

**Como entra:** grande e sangrando pela borda, ou pequeno e repetido nos cantos. Sempre no espaço vazio, sempre atrás do texto na ordem de camadas, sempre na paleta da marca.

## 3. Controle de composição

O texto nunca ocupa a área de interesse. Alavancas, nesta ordem:

1. Mover o bloco de texto para o terço mais calmo.
2. Espelhar a imagem na horizontal quando o assunto está do lado onde o texto precisa ficar.
3. Subir ou descer a foto dentro do frame para o assunto escapar do degradê.
4. Desfocar o fundo quando a imagem é cheia e o texto precisa do centro.

**O degradê não pode engolir a área de interesse.** Se cobriu, suba a imagem.

**Corte da foto não pode aparecer.** Se a foto não alcança a borda do frame, estenda até cobrir ou posicione o degradê exatamente sobre a emenda, para parecer que a imagem não termina ali.

**Elemento não encosta em texto.** Se encostou, estreite a coluna de texto ou empurre o elemento para fora. Deixe folga visível.

### Diagramação

- Tudo segue um eixo só: texto à direita significa logo, assinatura e fios à direita.
- Decoração vai no vazio, nunca sobre conteúdo.
- Elemento repetido perde valor: na próxima entra rotacionado, em outra escala, ou sangrando pela borda.
- Hierarquia por tamanho; linhas parentes coladas, blocos diferentes com respiro.
- Mistura de fontes como tempero: uma palavra em manuscrita dentro de caixa alta.
- Nada de viúvas.
- Foto full bleed; Boost resolution quando borrar.
- Referência é repertório, não molde.

Vale para story, feed, carrossel e banner.

## 4. Como ele julga

**Camada 1, erro grosseiro:** elemento ou fio sobre texto, fonte errada, quebra de linha errada, logo fora do eixo, degradê engolindo o assunto, corte da foto aparecendo, elemento desenhado à mão. Se tem qualquer um, ele nem olha o resto.

**Camada 2, refinamento:** proporção, respiro, escolha de foto, sutileza.

**Renderize e OLHE antes de entregar.** Um screenshot pega quase toda a camada 1.

## 5. Armadilhas técnicas do MCP do Figma

- **Fonte local não carrega** (Aircrew, Autography): clone um nó que já a tenha, ou use o equivalente do Google Fonts e avise qual camada trocar.
- **`createVector` desloca o traço:** setar `x = 0` depois de atribuir `vectorPaths` move o bounding box. Posicione pelo canto real do path.
- **`upload_assets` empilha:** enviar imagem para nó que já tem fill adiciona um segundo preenchimento. Confira, ou atribua o `imageHash` direto.
- **Renomear em lote sobrescreve:** renomeie para temporário primeiro.
- **Texto pode estourar a largura:** depois de mudar corpo, cheque `height` para ver se quebrou linha.

## 6. Organização do arquivo

"Pasta" é **página** do Figma, uma por cliente; dentro, seções por mês cuja numeração não corresponde ao calendário. Nunca apague nem sobrescreva elemento criado por ele: crie ao lado.

## 7. Specs por cliente

### Prefeitura de Várzea Grande

- **Cores:** verde `#099500`, amarelo `#FFA812`, verde limão `#99FE00`, verde escuro `#0B3D12`
- **Tipografia:** Onest ExtraBold nas headlines; Sacramento na manuscrita
- **Logo:** https://www.varzeagrande.mt.gov.br/public/images/logo.png (2528x1191, PNG transparente)
- **Assinatura fixa:** logo mais "Acesse o nosso site" em amarelo itálico e "varzeagrande.mt.gov.br"
- **Público:** muita gente mais velha, legibilidade é o primeiro filtro