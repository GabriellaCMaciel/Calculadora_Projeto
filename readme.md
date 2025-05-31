# Calculadora Simples em JavaScript

Bem-vindo(a) ao repositório da **Calculadora Simples**, um projeto de estudante que simula as funcionalidades básicas de uma calculadora de mesa (desktop). Este projeto foi desenvolvido com HTML, CSS e JavaScript puro, com o objetivo de praticar manipulção de DOM, eventos e lógica de cálculo.

---

## 🚀 Descrição do Projeto

Esta calculadora permite ao usuário:
- Inserir números e operadores matemáticos básicos (`+`, `-`, `*`, `/`).
- Realizar cálculos em tempo real e exibir o resultado no display.
- Apagar o último dígito inserido (botão `DEL`).
- Limpar todo o display (botão `AC`).
- Trocar o sinal do valor exibido (botão `+/-`).
- Prevenir inserção de operadores consecutivos ou operadores como primeiro caractere inválido.

O layout foi inspirado em calculadoras de mesa, utilizando um design clean e cores sutis, alinhado ao estilo **Neumorphism** (efeito “soft UI”) para botões e display.

---

## 🎨 Tecnologias Utilizadas

- **HTML5**: marcação semântica da página e estrutura dos botões.
- **CSS3** (com variáveis): estilo responsivo, grade (CSS Grid), gradientes e sombras para simular profundidade.
- **JavaScript ES6+**: lógica de cálculo, controle de eventos e manipulação de DOM.
- **Google Fonts (Inter)**: fonte suave e moderna para interface.
- **Eval**: função nativa do JavaScript para interpretar e calcular a expressão matemática inserida.

---

## 🖼️ Capturas de Tela

> ![Calculadora em Ação](./docs/captura.gif)
> *Animação ilustrando o uso da calculadora (inserir números, operações e exibir resultado).*

---

## 📂 Estrutura de Pastas

calculadora-projeto/
├── index.html # Arquivo HTML principal
├── styles/
│ └── styles.css # Arquivo de estilo CSS
├── script/
│ └── script.js # Lógica JavaScript para a calculadora
├── docs/
│ └── captura.gif # Captura de tela / GIF demonstrativo
└── README.md # Este arquivo de documentação


- **`index.html`**: contém a estrutura da calculadora, incluindo o display (campo de input) e botões (números e operações).
- **`styles/styles.css`**: estilização completa do layout, aplicando cores, sombras e posicionamento em grid.
- **`script/script.js`**: gerencia seletores, funções de cálculo e listeners de eventos.
- **`docs/`**: pasta destinada a arquivos de documentação, como imagens ou GIFs de demonstração.

---

## ⚙️ Como Executar o Projeto Localmente

Para executar este projeto em sua máquina:

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seuusuario/calculadora-projeto.git

2. Navegue até a pasta do projeto
    ```bash
   cd calculadora-projeto

3. Abra o arquivo index.html no navegador

- Dê um duplo clique em index.html, ou

- Utilize a linha de comando para servir via um servidor local (opcional):