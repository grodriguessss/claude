---
name: "direcao-criativa-master"
description: "Skill MASTER de direção criativa para qualquer arte de social media no Figma (carrossel, estático, story, banner): consulta obrigatória do Acervo de Referências no Figma, DNA visual, imagem, textura, tipografia, diagramação e revisão. Use antes de montar qualquer post de qualquer cliente."
---

# Direção criativa MASTER

Esta é a skill que manda em todas as outras de design. As skills de cliente (Prefeitura VG, Scale Academy, WellVibe, Koda, Newhouse etc.) entram só com tokens (cor, fonte, logo, onde fica o arquivo). O método é este aqui. `figma-diagramacao-criativa`, `figma-metodo-gabriel` e `figma-craft-ajux` continuam válidas para mecânica de Figma e composição; esta skill é a camada de cima: repertório, matéria, imagem e decisão criativa.

Carregar sempre `figma-use` antes de qualquer `use_figma`.

## 0. O acervo (consulta obrigatória)

Arquivo Figma: **Acervo de Referências — Direção Criativa**, fileKey `0C1akxRL9BgoBSVe9YKMZf` (time "A equipe de Paulo Sergio Reis Neto", conta gabrielcarlos1aa@gmail.com).

| Página | id | O que tem |
|---|---|---|
| 00 · Como usar este acervo | 0:1 | Capa com o DNA em 10 pontos, índice e regra de uso |
| 01 · Instagram · curadoria Gabriel | 1:2 | 12 posts curados por ele, todos os slides, uma seção por post com nota "O que roubar" |
| 02 · Dribbble · posters e identidade | 1:3 | 36 posters e identidades com o mesmo DNA |
| 03 · Pinterest · carrosséis e colagem | 1:4 | 67 carrosséis, colagens e papelaria (envelopes, lacres, selos, postais) |
| 04 · Kit de elementos | 1:5 | Material bruto para recortar ou usar como referência de geração |

**Antes de montar qualquer post**, sem exceção:

1. `get_metadata` na página 01 (e 02 ou 03 conforme o tipo de peça) e `get_screenshot` de 3 a 6 seções.
2. Escolher **três referências de páginas diferentes** com papéis diferentes: uma de **estrutura** (esqueleto do slide, onde vai texto e imagem), uma de **matéria e elemento** (textura, papelaria, objeto), uma de **tipografia** (par de fontes, hierarquia, palavra em destaque).
3. Escrever em uma frase o frankenstein antes de abrir o Figma: "estrutura de X + textura de Y + tipografia de Z, a serviço desta copy". Se a frase não nasce da copy, a escolha está errada.
4. Nunca reproduzir a diagramação inteira de uma referência. Referência é repertório, não molde. Ele reprova cópia na hora.

As seções da página 01, pelo nome, são o índice de linguagens disponíveis:

- **@alke.estudio** scrapbook rosa + lima: fichário, selo serrilhado, clipe, corrente, serif condensada, marca-texto.
- **@ux.dudu** (2 posts) aba de navegador como progresso, mockup em cima, texto embaixo, fechamento dither/halftone.
- **@shahednext** preto + um vermelho, rasgo de papel revelando gravura, barcode e rótulos mono como decoração.
- **@lukauomi** ritmo de leitura: uma frase por slide, dark/light alternado, silhueta chapada.
- **@geovanerdsgn** UI como decoração: toggle, ticket serrilhado, grid numerado, foto de mesa escurecida.
- **@deborag.psi** paleta rotativa por slide, sitcom em polaroid/selo, manuscrita em uma palavra, texto minúsculo como textura.
- **@nicoleholz.psi** monocromia azul com cinco texturas, serif itálica em palavras-chave, envelope, andorinha, botânica.
- **@matchferreira** texto justificado gigante sobre foto autoral, zero decoração.
- **@jeanoliveirasm** uma cor saturada + branco + preto, título-sticker com contorno, fluxograma de pílulas, selfie.
- **@celiocreative** mockup de produto com 3D orbitando, círculos concêntricos, retrato de fechamento com serif itálica.
- **@zbalosch** papel bege com luz de janela, condensada pesada, formas 3D matte, numeração 01/08.

## 1. DNA visual (o que todas as referências têm em comum)

1. **Uma cor de acento por sistema.** O resto é papel, preto, branco e cinzas. Duas cores de acento já é ruído.
2. **Duas vozes tipográficas.** Sans neutra para corpo e rótulos; serif display, itálica ou condensada pesada em UMA palavra ou linha. Manuscrita entra como tempero em uma palavra, nunca em frase inteira.
3. **Tudo tem matéria.** Grão, papel, luz de janela, plástico, tecido, ondas sutis. Fundo chapado limpo só quando a ausência é o conceito (caso @matchferreira).
4. **Papelaria como sistema.** Selo serrilhado, envelope, clipe, tape, ticket, barcode, carimbo, lacre. Escolher um ou dois por sistema e repetir.
5. **UI como decoração.** Aba de navegador, toggle, cursor, rótulo mono 01/08, botão. Mistura impresso + interface.
6. **Foto nunca solta.** Polaroid, selo, borda branca, dither, halftone, escurecida, colada com tape. A foto entra na proporção real, nunca cortada em outra proporção.
7. **Sistema com variação.** Mesmo esqueleto em todos os slides, trocando cor, elemento ou posição. Capa e CTA quebram o padrão (fundo diferente, escala diferente).
8. **Rótulos técnicos nos cantos.** Handle, número do slide, categoria, "salve para depois" em mono pequeno. É decoração e é credibilidade.
9. **Os dois extremos de texto funcionam.** Bloco minúsculo ilegível como textura; bloco gigante justificado como imagem. O meio-termo (texto médio centralizado sem intenção) é o que fica genérico.
10. **Elemento gerado ou recortado, nunca vetor desenhado à mão.** Silhueta forte vale mais que detalhe.

## 2. Imagem e elemento

Ordem de origem do elemento:

1. **Acervo, página 04** (kit) ou qualquer referência: duplicar, recortar (Magnific `images_remove_background` ou máscara), crop no bbox, aplicar como fill FIT.
2. **Gerar no Magnific** (Seedream 5 Pro, qualidade e resolução mais baixas). Prompt padrão para elemento: objeto único, isolado em fundo branco liso, luz de estúdio, sem texto, sem gente, sem mãos. Para 2D chapado: flat vector illustration, bold clean outlines, editorial sticker style, palette da marca. Gerar 3 variantes e escolher olhando.
3. **Foto de produto de cliente:** SEMPRE anexar a foto real como referência de imagem na geração. Nunca gerar só por descrição.
4. **Foto de pessoa ou cena:** o prompt já descreve a composição do layout (onde fica o sujeito, espaço negativo para o texto, fundo na cor e luz da marca). Gerar em tight crop para fidelidade e compor no Figma.
5. **Sem créditos:** buscar imagem, recortar, usar do mesmo jeito. Nunca travar entrega por isso.

Nunca gerar imagem por iniciativa própria: só quando a copy pede ou quando ele pede. Quando ele pede, já tem o ok, não perguntar de novo.

Texturas: grão e papel vêm de imagem (kit ou geração "paper texture, fine grain, neutral"), aplicadas por cima do container em blend Multiply ou Overlay com opacidade baixa, atravessando slides. Luz de janela: imagem de sombra de persiana em Multiply. Dither e halftone: Magnific ou plugin, sempre sobre foto e nunca sobre texto.

## 3. Tipografia

Pares que funcionam dentro do DNA (Google Fonts disponíveis no Figma): Instrument Serif Italic + Inter; DM Serif Display + Manrope; Playfair Display + Space Grotesk; Bebas Neue ou Anton (condensada pesada) + IBM Plex Sans; Fraunces + Geist; Caveat ou Sacramento só na palavra manuscrita; Space Mono, Geist Mono ou IBM Plex Mono para rótulos; Libre Barcode para barcode real.

Regras: headline de capa curta e convidativa (capa que entrega a conclusão é reprovada); palavra de acento é a emocional ou a de oferta, nunca a funcional; sem viúvas; sem pleonasmo na copy; sem travessão em peça; hierarquia por tamanho, linhas parentes coladas, blocos diferentes com respiro.

## 4. Diagramação (resumo; o detalhe está nas skills de Figma)

- Ler a copy antes da imagem: o campo semântico define o elemento.
- Ler a imagem pelos terços: texto na região oposta à área de interesse; alavancas são mover texto, espelhar foto, subir ou descer a foto, desfocar fundo.
- Distribuir 4 a 6 arquétipos de posição de texto num lote e nunca repetir arquétipo em peças vizinhas.
- Menos da metade das peças leva elemento; o resto vive de tipografia e matéria.
- Tudo num eixo só: texto à direita, logo e fios à direita.
- Degradê nunca engole o assunto; corte da foto nunca aparece.

## 5. Mecânica Figma que ele exige

- Carrossel sempre 1080x1440, um frame por slide.
- Luzes, texturas e elementos gráficos ficam no nível do container, por cima dos frames, para atravessar de um slide ao outro.
- No fim de todo carrossel: uma slice por slide (1080x1440, no container, por cima de tudo) para exportar.
- Nunca remover ou sobrescrever elemento criado por ele; criar ao lado e deixar ele decidir.
- Antes de começar um carrossel, perguntar: criar direto no Figma? tem referência já dentro do Figma? ele manda as imagens ou gera via MCP?
- Fonte local que não carrega: clonar nó que já a tenha ou usar equivalente do Google Fonts e avisar qual camada trocar.

## 6. Revisão antes de entregar

Camada 1, erro grosseiro (se tem um, ele nem olha o resto): elemento ou fio sobre texto, fonte errada, quebra de linha errada, logo fora do eixo, degradê engolindo o assunto, corte da foto aparecendo, elemento vetor desenhado à mão, foto cortada fora da proporção, texto sem contraste, capa longa.

Camada 2, refinamento: uma cor de acento só, matéria presente, variação entre slides, rótulos nos cantos, palavra de acento certa, respiro.

`get_screenshot` de cada frame e montar folha de contato local para olhar o lote inteiro de uma vez. É assim que a repetição aparece.

## 7. Alimentar o acervo

Quando ele mandar links novos (Instagram, Pinterest, Dribbble, Behance):

1. Abrir no browser do Cowork (`Claude_Browser`). Instagram sem login mostra o post; fechar o modal e extrair com `javascript_tool` o JSON embutido: procurar em `script[type="application/json"]` o objeto com `code` igual ao shortcode e `carousel_media` ou `image_versions2`; pegar o candidato de maior largura de cada item. Pinterest: `img[src*="pinimg.com/236x"]`, trocar por `/originals/`. Dribbble: `.shot-thumbnail img` (data-src), baixar de `cdn.dribbble.com/userupload/...`.
2. Baixar com curl no sandbox (a URL assinada do Instagram precisa vir completa). Nunca screenshot no lugar da imagem.
3. Olhar tudo em folha de contato e escrever a nota "O que roubar" por post: sistema, matéria, tipografia, o que quebra o padrão.
4. No Figma: nova seção na página certa, retângulos na proporção real (540 de largura na página 01, masonry na 02 e 03), `upload_assets` com `nodeIds` e POST multipart. Reflow de texto: `textAutoResize='NONE'` → `resize(w,300)` → `'HEIGHT'` antes de medir altura.
5. Atualizar a lista de linguagens da seção 0 desta skill com o novo perfil.