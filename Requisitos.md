## Requisitos

- Geral
  
  - [ ] Manipule o HTML usando somente React.
  
  - [ ] Você deve criar o projeto com o `create-react-app` padrão, SEM usar nenhum *template*, e delete os arquivos que não serão utilizados.
  
  - [ ] O template gerará os arquivos base, incluindo o arquivo `package.json` e `package-lock.json`. Esses arquivos devem estar **sempre** na raiz do repositório no GitHub. Se tiver dentro de uma pasta do repositório, a avaliação vai falhar. Além do bot não aceitar, não é uma boa prática.
  
  - ✅ **Certo** ⇒ `projeto8-jogoforca` > `package.json`
  
  - ❌ **Errado** ⇒ `projeto8-jogoforca` > outra pasta > `package.json`
  
  - [ ] Seu projeto deverá ser desenvolvido utilizando Git e GitHub.
  
  - [ ] A cada requisito implementado faça um *commit* com uma mensagem descritiva do que você evoluiu. Caso queira dividir um requisito em vários *commits*, não há problema. Mas evite colocar mais de um requisito no mesmo *commit.*
  
  - [ ] Muito cuidado para não committar a `node_modules`. Se ela estiver committada, a avaliação também falhará. Não é boa prática comittar essa pasta no git.
  
  - [ ] Não é permitido o uso de `useEffect`!

- Componentização
  
  - [ ] O seu jogo deverá ter 3 componentes:
    
    - [ ] `App` (chamará os demais componentes)
    - [ ] `Jogo` (imagem da forca, botão de iniciar, palavra do jogo)
    - [ ] `Letras` (conjunto de botões com as letras)
  
  - 🔥 Dica
    
    - Mantenha todos os estados da aplicação no `App` e passe seus valores como `props` para os componentes que precisarem!
      
      ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5b40f1d1-babe-4a26-a672-7a8a2626801f/Untitled.png)

- Pré-jogo
  
  - [x] Crie um arquivo chamado `palavras.js` e coloque ele dentro da pasta `src` (o nome e o local precisam ser esses ou a avaliação falhará!).
  
  - [x] Dentro do arquivo, insira o array de palavras disponibilizado abaixo:
    
    - Arquivo de palavras
      
      ```jsx
      const palavras = [
          "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abrigo", "abrir",
          "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco",
          "caixa", "chantilly", "cachorro", "cuidado", "caneta", "carinho", "cabra", "cesto",
          "dados", "dizer", "danone", "dente", "diamante", "diafragma", "detonar", "dia",
          "elefante", "esmeralda", "esfinge", "esfera", "encontro", "ema", "escola", "economia",
          "formiga", "fama", "festa", "fiador", "ferver", "flauta", "figo", "fiapo", "fotografia",
          "goiaba", "gelo", "grito", "guria", "goleiro", "golfinho", "golfe", "girar",
          "harmonia", "haste", "hectare", "hepatite", "hiena", "hidrante",
          "igreja", "importante", "idoso", "irado", "identidade", "idioma", "idade", "idiota",
          "jantar", "jumento", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco",
          "laranja", "lua", "luz", "lindo", "lacraia", "lactose", "lacrar",
          "manga", "morango", "mico", "matar", "mingau", "moqueca", "mocassin",
          "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nabo",
          "ovo", "ostra", "obstetra", "orangotango", "olhar", "ortodoxo", "ouro", "ornamento",
          "pato", "polvo", "povoar", "pano", "princesa", "pizza", "patroa",
          "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar",
          "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura",
          "salada", "salamandra", "sacola", "siri", "sabre", "sucarose", "sabedoria", "sacerdote",
          "tatu", "tabacaria", "taberneiro", "torrada", "tamanho", "tatuagem", "trem",
          "uva", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir",
          "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa",
          "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale",
          "zebra", "zagueiro", "zero", "zoeira", "zepelim", "zinco", "zumbido"
      ]
      
      export default palavras
      ```
    
    - Esse array possui strings que serão as palavras que o jogador deverá adivinhar. Você deverá importar esse array no componente `App` para utilizá-lo.
    
    - Você não deve mudar o nome do array nem o export! Mas se quiser mudar o conteúdo para adicionar palavras, fique à vontade! 😄
    
    - Deixe somente as palavras nesse arquivo. **Não exporte nem implemente mais nada no arquivo** (como uma função para escolher uma palavra, por exemplo), pois o arquivo poderá ser substituído ao longo da avaliação automática.
  
  - [ ] Os botões de letras devem ser mapeados através de um array do alfabeto:
    
    - Array do alfabeto
      
      ```jsx
      const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
      ```
  
  - [ ] Antes de o jogo iniciar, o input e os botões de letras devem estar desabilitados.
    
    - Os botões desabilitados **devem** possuir o atributo `disabled` no HTML.

- Ao apertar “Escolher Palavra”
  
  - [ ] Letras passam a ficar habilitadas.
  
  - [ ] A contagem de erros nesse momento é 0, a imagem da forca vazia é mostrada.
  
  - [ ] Você deve sortear uma das palavras do array que está no arquivo `palavras.js` para o usuário tentar adivinhar.
  
  - [ ] Aparece a palavra a ser adivinhada na tela, com um *underline* ( `_` ) para cada letra que a palavra possui.
  
  - 🔥 Dica
    
    - Se você transformar a palavra em um array, será muito mais fácil de fazer as operações e comparações que irão acontecer no jogo 😉

- Ao pressionar uma letra
  
  - [ ] O botão de uma letra já clicada deve ficar desabilitado.
  - [ ] Se a palavra escolhida no jogo tiver a letra que o usuário apertou:
    - [ ] O *underline* da posição correspondente à letra deve ser substituído pela letra em si.
    - [ ] As palavras disponibilizadas não possuem caracteres especiais, então não precisa se preocupar com isso!
  - [ ] Se a palavra escolhida no jogo NÃO tiver a letra que o usuário apertou:
    - [ ] Sua contagem de erros deve aumentar.
    - [ ] A imagem na forca deve mudar (forca0 > forca1 > forca2… e assim sucessivamente).

- Fim de jogo
  
  - [ ] Botões de letras devem ser desabilitados.
  - [ ] Caso o usuário ganhe:
    - [ ] Quando o usuário ganha, a palavra completa fica em **verde**.
  - [ ] Caso o usuário perca:
    - [ ] A imagem final que deve aparecer é a do boneco enforcado (forca6).
    - [ ] A palavra deve ser revelada, mas em **vermelho**.
  - [ ] Para continuar a jogar, o usuário deve apertar o botão “Escolher Palavra” e o jogo deve ser reiniciado.

- *Deploy*
  
  - Ao terminar o projeto, você obrigatoriamente deverá realizar o *deploy* utilizando a Vercel.

- **Para correção automática**
  
  [Jogo da Forca - Seletores](https://www.figma.com/file/jMOhjKXPNlCF5nsXlEdezl/Jogo-da-Forca---Seletores?node-id=0%3A1&t=44iltPZdoQGdcl8r-0)
  
  ⚠️ Atenção: Caso você tenha componentizado os elementos, **NÃO** coloque o data-identifier nas tags dos componentes React e sim nas tags HTML. Exemplo:
  
  ```jsx
  ERRADO: <MeuLindoBotaoComponentizado data-test="blabla" />
  CERTO: <button data-test="blabla" />
  ```
  
  🤔 Por quê? ****Porque atributos colocados nas tags dos componentes não são inseridos no HTML final gerado pelo React, somente atributos explicitamente colocados nas tags HTML.
  
  - A avaliação só funcionará se o servidor React iniciar **sem erros** com o comando `npm run start`. Qualquer erro que impeça o React de iniciar também inviabiliza a correção. Antes de enviar o código para correção, garanta que o `npm run start` está rodando sem erros de compilação.
  
  - 💡 Para saber se realmente o seletor está inserido, você pode inspecionar o elemento na tela
    
    ![indefier.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bdcf05dd-c3ca-4a2f-94d5-4be335ea9275/indefier.gif)
  
  - **E se eu estiver usando Styled Components? (bônus)**
    
    Nesse caso, você pode sim colocar o `data-test` na tag do componente! Isso porque o styled components automaticamente repassa todos os atributos pra tag HTML final:
    
    ```jsx
    const MeuLindoBotao = styled.button`...`;
    
    <MeuLindoBotao data-test="blabla" /> (CORRETO!)
    ```
  
  - **E se eu quiser componentizar um botão pra ser usado em vários lugares com data-tests diferentes?**
    
    Nesse caso, você pode repassar todas as props pra tag HTML final de uma forma bem prática:
    
    ```jsx
    // No componente do botão:
    function BotaoCustomizado({ props }) {
        return <button {...props}>...</button>
    }
    
    // Onde for usar o componente:
    <BotaoCustomizado data-test="blabla" />
    <BotaoCustomizado data-test="blublu" />
    ```

## ☑️ Bônus

- Reiniciar o jogo a qualquer momento
  
  - [ ] A qualquer momento, o usuário pode reiniciar o jogo pressionando o botão “escolher palavra”.
  
  - [ ] Uma nova palavra é sorteada.
  
  - O jogo deve voltar ao estado inicial (0 erros, imagem inicial da forca, palavra apenas com risquinhos, todos os botões de letras habilitados).

- *Input* de chute
  
  - [ ] Crie um novo componente no seu projeto chamado `Chute`. Esse componente deverá ter um input e um botão onde o usuário poderá chutar a palavra inteira caso ele deseje
  - [ ] Ao fazer isso, se acertar a palavra, ele ganha imediatamente.
    - [ ] A palavra correta aparece completa e na cor verde
  - [ ] Mas, se errar, ele perde imediatamente, independente da contagem anterior de erros. A imagem que deve aparecer nesse momento é a do bonequinho enforcado (forca6).
  - [ ] O input deve ser desabilitado em dois casos: antes de iniciar o jogo e depois de finalizar (ganhar ou perder)

- Considerar caracteres especiais
  
  - [ ] Quando o usuário pressionar uma letra sem acento (ex: a) e, na palavra, houver a mesma letra mas com acento (ex: à, á, â, ã), ela deve ser considerada como certo.
  
  - [ ] Além dos acentos, considere também que c e ç são equivalentes.
  
  - Caso faça esse desafio, substitua o array de palavras por este novo.
    
    ```jsx
    const palavras = [
        "abacate", "abacaxi", "abelha", "abanador", "antologia", "amor", "aba", "abraço", "ábaco", "abrigo", "abrir", 
        "banana", "boi", "batata", "bacalhau", "bexiga", "bowl", "batedeira", "bisturi", "barreira", "banco", 
        "caixa", "chantilly", "comércio", "cachorro", "cuidado", "caneta", "carinho", "cupuaçu", "cabra", "cesto", 
        "dados", "dizer", "danone", "dente", "diário", "diamante", "diafragma", "detonar", "dia", "dromedário", 
        "elefante", "esmeralda", "espátula", "estômago", "esfinge", "esfera", "encontro", "ema", "escola", "economia", 
        "formiga", "fama", "festa", "fiador", "ferver", "flauta", "fichário", "figo", "fiapo", "fotografia", 
        "goiaba", "gelo", "grito", "gamão", "guria", "goleiro", "golfinho", "golfe", "girar", "glúten", 
        "helicóptero", "harmonia", "haste", "hectare", "hábito", "hepatite", "hiena", "hemisfério", "hidrante",
        "igreja", "ícone", "importante", "ímpar", "idoso", "irado", "identidade", "idioma", "idade", "idiota", 
        "jantar", "jumento", "jambú", "jibóia", "jararaca", "janela", "jerimum", "jaula", "jabuti", "jaleco", 
        "laranja", "lua", "leão", "limão", "larápio", "luz", "lindo", "lacraia", "lactose", "laço", "lacrar", 
        "mamão", "manga", "morango", "mico", "matar", "mingau", "moqueca", "macacão", "mocassin", "maçaneta", 
        "nectarina", "nada", "navio", "namorado", "ninja", "natal", "narciso", "narina", "nádega", "nabo", 
        "ovo", "ostra", "obstetra", "oblíquo", "orangotango", "olhar", "óculos", "ortodoxo", "ouro", "ornamento", 
        "pato", "polvo", "povoar", "pólvora", "palhaço", "paróquia", "pano", "princesa", "pizza", "patroa", 
        "queijo", "quitanda", "quinta", "quantia", "quarentena", "quadrilha", "quaresma", "quartzo", "quebrar", "quarteirão", 
        "risada", "rio", "remar", "rato", "racional", "rainha", "radioatividade", "raiz", "raiva", "rachadura", 
        "salada", "salamandra", "sacola", "siri", "sábado", "safanão", "sabre", "sucarose", "sabedoria", "sacerdote", 
        "tatu", "tabacaria", "taberneiro", "tábua", "torrada", "três", "terço", "tamanho", "tatuagem", "trem", 
        "uva", "uísque", "união", "universo", "unanimidade", "ubuntu", "universidade", "urso", "uivar", "unir", 
        "vela", "valeta", "vacilo", "valor", "vagem", "vadiagem", "vaca", "valentia", "vidro", "valsa", 
        "xícara", "xadrez", "xilofone", "xarope", "xenofobia", "xereta", "xerife", "xaveco", "xixi", "xale", 
        "zebra", "zagueiro", "zero", "zoeira", "zodíaco", "zangão", "zepelim", "zinco", "zoológico", "zumbido"
    ]
    
    export default palavras
    ```

- Estilização do projeto utilizando `styled-components`
