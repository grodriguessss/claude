# Psicologia de interface, a tela como pergunta

Camada Lei. Estes princípios têm estudo por trás e não envelhecem em ciclo de plataforma.

Ideia que organiza tudo: **cada elemento da tela faz uma pergunta ao usuário, e a pergunta escolhida decide se ele age ou hesita.** Duas telas com o mesmo produto, mesmo preço e mesma oferta convertem de formas radicalmente diferentes porque disparam perguntas diferentes.

## Índice

1. Os seis princípios
2. Trocar a pergunta difícil pela fácil
3. Aplicação por momento de produto
4. Ética e o limite do dark pattern

---

## 1. Os seis princípios

### 1.1 Smart defaults
Campo vazio é uma decisão que o usuário precisa tomar antes de qualquer coisa acontecer. Empilhadas, viram fadiga de decisão e a resposta mais fácil vira nenhuma resposta.

Evidência: no estudo das geleias de Columbia, 24 opções expostas geraram 3% de compra, 6 opções geraram 30%. E entre 70% e 90% dos usuários nunca alteram o valor default, porque leem o pré-selecionado como recomendação.

Execução: pré-preencher todo campo com a escolha mais comum. Trocar input aberto por chip, stepper e card sempre que o conjunto de respostas for pequeno. Informar que já existe resultado esperando antes do clique, no estilo "12 opções disponíveis".

### 1.2 Goal gradient
Quanto mais perto a pessoa **sente** que está do fim, mais rápido avança. E quem desenha escolhe onde fica a linha de largada.

Evidência: cartão de fidelidade com 8 selos vazios contra cartão com 10 selos e 2 já carimbados, mesma exigência real. O segundo grupo concluiu a quase o dobro da taxa.

Execução: nunca começar o usuário em zero. Achar algo que ele já fez e contar como passo um. Criar conta já é passo um, não evento separado. Progresso em 20% lê como impulso, 0% lê como parado.

### 1.3 Reciprocidade
Quem recebe primeiro sente compulsão de retribuir. A maioria dos produtos pede antes de dar, e o usuário sai porque ainda não recebeu nada.

Evidência: Cialdini classifica reciprocidade como o driver isolado mais forte. Amostra grátis em varejo eleva compra em ordens de grandeza.

Execução: entregar um resultado real e útil antes de pedir cadastro. Parcial, não completo. O cadastro deixa de ser muro e vira retribuição. Padrão de referência: relatório com nota, contagem de problemas por severidade e só então "salvar meu relatório".

### 1.4 Efeito IKEA e efeito de posse
Quem constrói passa a valorizar muito mais. E nem precisa construir, basta sentir que aquilo é seu.

Evidência: Norton, Mochon e Ariely, Journal of Consumer Psychology, 2012.

Execução: deixar personalizar antes de pedir cadastro. Nome do espaço, cor, estilo, meta, idioma. O botão muda de "criar conta" para "continuar", porque a essa altura sair não é pular um formulário, é abandonar algo que a pessoa fez.

### 1.5 Aversão à perda
A dor de perder é cerca de duas vezes mais forte que o prazer de ganhar o equivalente. Vender o ganho usa o motivador fraco.

Evidência: Kahneman, prêmio Nobel.

Execução: mostrar o que a pessoa perde se não agir, com especificidade. Arquivos pelo nome, prazo com contagem, o que sai do plano. A recusa também deixa de ser neutra: em vez de "talvez depois", algo que declare o risco assumido.

### 1.6 Ancoragem e contraste
O mesmo preço parece caro ou irrisório dependendo do que veio imediatamente antes. O primeiro número vira a régua.

Execução: nunca mostrar custo isolado. Colocar o valor grande antes do valor pequeno. Mostrar preço original riscado ao lado do preço com desconto e o percentual. Expressar o custo como fração do que já foi decidido.

---

## 2. Trocar a pergunta difícil pela fácil

O padrão que atravessa os três testes A/B do estudo 08:

| Tela que perde | Pergunta que ela dispara | Tela que ganha | Pergunta nova |
|---|---|---|---|
| paywall com preço e lista de features | isto vale 19 por mês? | "como funciona seu teste grátis" com linha do tempo de 3 passos | posso testar de graça? |
| corrida com preço em faixa de 13 a 17 | quanto estou disposto a arriscar? | preço fechado de 15,99 com "a 2 minutos" e selo mais barato | qual eu quero? |
| listagem com foto pequena e campos | quanto custa e onde clico? | foto grande, título sensorial, preço ancorado, total no botão | quando eu vou? |

Regras que saem daí:

1. **Faixa cria dúvida.** O cérebro agarra o número alto. Se dá para mostrar um número fechado, faixa não é transparência, é hesitação induzida.
2. **Viés de transparência.** Revelar proativamente uma desvantagem aumenta confiança. Dizer que vai avisar antes de cobrar faz mais trabalho que três bullets de benefício. E o enquadramento importa: "vamos te lembrar que o teste está acabando" ganha de "vamos avisar antes de cobrar".
3. **Verbo leve ganha de verbo de compromisso.** "Começar" contra "assinar". E possessivo em primeira pessoa cria posse antes do clique: "começar meu teste".
4. **Especificidade é confiança.** Número mata incerteza. "Pronto em 2 toques" ganha de "cadastro rápido". "Entrega em 23 minutos" ganha de "entrega rápida".
5. **Imagem tem que mostrar o que se leva.** Arte decorativa não responde "o que eu recebo".
6. **Redutor de risco encostado no CTA.** A objeção número um respondida antes de ser feita: cancelamento livre, sem cartão, garantia com prazo.
7. **Consistência de compromisso.** Confirmar o que já foi decidido acima das opções reduz a decisão que sobra. Mostrar o destino antes de mostrar os carros.
8. **Total visível no botão.** "Reservar por 445 no total" mata a ansiedade de taxa escondida na tela seguinte.

---

## 3. Aplicação por momento de produto

**Primeiro contato.** Reciprocidade e ancoragem. Valor antes do pedido. Número grande antes do número pequeno.

**Onboarding.** Goal gradient e efeito IKEA. Nunca em zero, personalizar antes de cadastrar, cadastro depois do investimento de tempo.

**Formulário.** Smart defaults e Lei de Hick. Menos opções por vez, pré-preenchido, chip e stepper no lugar de campo aberto.

**Paywall e upgrade.** Trocar a pergunta, viés de transparência, aversão à perda com especificidade, saída honesta e visível.

**Uso recorrente.** Feedback imediato, microinteração de confirmação, estado vazio que ensina, progresso que reconhece o que já foi feito.

**Cancelamento.** Aqui a ética manda. Saída visível, mesmo peso do resto da interface, sem labirinto.

---

## 4. Ética e o limite do dark pattern

A linha é simples e prática: **o princípio pode enquadrar a verdade, nunca fabricar uma.**

Permitido: escolher qual verdade aparece primeiro, dar o passo um de graça, mostrar a perda real de quem não age, pré-selecionar a opção que serve a maioria.

Proibido: esconder a saída, escassez inventada, contagem que reinicia, progresso que não corresponde a nada, valor de personalização que não existe depois do cadastro, recusa escrita para envergonhar.

Teste único: se o usuário descobrir depois como a tela foi construída, ele se sente respeitado ou enganado? Se for enganado, refazer.
