const perguntas = [
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo seu ID",
        "Seleciona todos os elementos de uma classe",
        "Seleciona o primeiro elemento que corresponde a um seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '=== (três iguais)' em comparações em JavaScript?",
      respostas: [
        "Compara valores sem considerar o tipo de dado",
        "Compara valores e tipos de dados, garantindo igualdade estrita",
        "Compara valores e tipos de dados, garantindo igualdade solta",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'hoisting' em JavaScript?",
      respostas: [
        "Elevar elementos na página HTML",
        "Levantar exceções durante a execução do código",
        "Içar declarações de variáveis e funções para o topo do seu contexto de execução",
      ],
      correta: 2
    },
    {
      pergunta: "Como se chama a prática de juntar dois arrays em JavaScript?",
      respostas: [
        "Concatenação",
        "Mesclagem",
        "Fusão",
      ],
      correta: 1
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "JavaScript Object Notation - uma linguagem de programação",
        "Java Scripted Object Navigator - uma biblioteca de navegação",
        "JavaScript Object Notation - um formato de dados leve e independente de linguagem",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "deleteLast()",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'map()' faz em um array em JavaScript?",
      respostas: [
        "Itera sobre os elementos e retorna um novo array com base em uma função de mapeamento",
        "Remove todos os elementos do array",
        "Inverte a ordem dos elementos no array",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "'null' representa a ausência de valor atribuído, enquanto 'undefined' indica uma variável que foi declarada, mas não inicializada",
        "'null' e 'undefined' são usados indistintamente para representar a ausência de valor",
        "'null' é usado para variáveis não inicializadas, enquanto 'undefined' é usado para valores nulos",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'parseInt()' em JavaScript?",
      respostas: [
        "Converte uma string em um número decimal",
        "Converte uma string em um número inteiro",
        "Converte um número em uma string",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizitem = template.content.cloneNode(true)
    quizitem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizitem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta= event.target.value == item.correta //true
        
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
      quizitem.querySelector('dl').appendChild(dt)
    }
  
    quizitem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizitem)
  }
  