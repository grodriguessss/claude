# Tokens, stack e handoff

Como o design vira código sem virar CSS solto.

## 1. Escolha de stack

| Situação | Stack | Por quê |
|---|---|---|
| landing, hotsite, peça de campanha, one-pager | HTML, CSS e JS estático com pasta `tokens/` | roda em qualquer lugar, sem build, handoff trivial, performance alta por padrão |
| produto com estado, rotas, formulário complexo, área logada | React com Tailwind e tokens em CSS custom properties | componente e estado justificam o peso |
| protótipo de validação, artefato para o Gabriel olhar | HTML único autocontido | abre no navegador, não precisa de nada |
| dashboard interno | depende de onde vai morar. Se já existe app, seguir o app |

Declarar a escolha em uma linha antes de escrever a primeira linha de código. Escolha silenciosa vira retrabalho.

## 2. Arquitetura de tokens

Camadas, nesta ordem. Nunca pular uma.

```
tokens/
  base.css          primitivos brutos, a paleta inteira em rampa, a escala de espaço, a escala de tipo
  colors.css        semânticos: superfície, texto, borda, acento, estados
  typography.css    famílias, escala, tracking, leading, pares prontos
  spacing.css       escala de 4pt e os gaps nomeados
  radius.css        no máximo 4 degraus
  elevation.css     sombra por nível, e a variante hairline para dark
  motion.css        durações, easings, distâncias de revelação
```

Regra que evita o pior erro: **componente nunca consome primitivo.** Consome semântico. `--color-surface-raised`, não `--gray-50`. Assim trocar tema é trocar uma camada.

Nomear por papel e não por aparência. `--color-accent`, não `--color-lime`. No dia em que o acento virar coral, o nome continua verdadeiro.

## 3. Estrutura de projeto estático

```
projeto/
  index.html
  tokens/           as camadas acima
  styles/
    base.css        reset, tipografia base, layout primitives
    components.css  os componentes do projeto
    app.css         o que é específico de página
  js/
    app.js
  assets/
```

Regras de organização:
1. Nada de estilo inline em elemento estrutural.
2. Um componente por bloco em `components.css`, com o nome batendo com a classe.
3. Toda cor de componente vem de token semântico. Grep por `#` em `components.css` deve voltar vazio.
4. Fundo de fallback em classe de `<img>` é proibido. É a origem mais comum de retângulo cinza atrás de PNG transparente.

## 4. Fonte

1. Web-safe ou hospedada. `.ttc` é ignorado por navegador. Formatos que servem: `.woff2` de preferência, `.otf` como alternativa.
2. Declarar `font-display: swap` e pré-carregar a de display.
3. Se a fonte da marca não estiver disponível, escolher substituta e **declarar a substituição** ao entregar, junto com a métrica que muda. Substituição silenciosa é o pior tipo de erro, porque o cliente descobre na aprovação.
4. Limite prático: duas famílias mais uma mono opcional.

## 5. Acessibilidade, mínimo não negociável

1. Contraste 4.5:1 em corpo, 3:1 em texto grande e em elemento de interface.
2. Ordem de foco visível e lógica. `:focus-visible` estilizado, nunca `outline: none` sem substituto.
3. Alvo de toque de 44px por 44px no mobile.
4. Toda imagem com `alt` que descreva função, ou `alt=""` quando for decorativa de fato.
5. Hierarquia de heading sem pulo, um `h1` por página.
6. `prefers-reduced-motion` respeitado.
7. Formulário com `<label>` associado, mensagem de erro ligada por `aria-describedby`.
8. Nada depende só de cor para comunicar estado.

## 6. Performance

1. Imagem em AVIF ou WebP com fallback, `loading="lazy"` abaixo da dobra, `width` e `height` declarados para não haver salto de layout.
2. CSS crítico inline quando a landing for de campanha paga.
3. Fonte com `preload` e subset quando possível.
4. Meta de Page Speed acima de 90 no mobile em landing. É a referência que o próprio mercado brasileiro de serviço já usa como prova.

## 7. Handoff

Ao fechar uma peça, entregar:

1. O projeto rodando.
2. Um `DESIGN.md` na raiz descrevendo a direção escolhida em uma frase, a paleta com hex e papel de cada cor, a escala tipográfica com valores, a escala de espaço e raio, e a lista de banimentos daquele projeto.
3. A lista de substituições e chutes: fonte trocada, imagem de placeholder, dado inventado, ícone assumido. Tudo que precisa de validação humana, em lista, visível.
4. O registro no documento de projeto conforme `vocabulario-estetico.md`, para não repetir a direção no projeto seguinte.

Quando o design nascer em ferramenta visual e for para código, a exportação precisa **apontar para os tokens**, não gerar CSS solto. É a referência aos tokens que preserva a fidelidade e barateia a implementação.
