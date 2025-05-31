/* Seleciona o elemento input que mostra o resultado (campo de texto) */
let elementoResultado = document.querySelector(".js-resultado");

/* Seleciona todos os botões que possuem a classe js-btn-padroes (números e operadores) */
let botoesPadroes = document.querySelectorAll(".js-btn-padroes");

/* Seleciona o botão de igual (classe js-btn-igual) */
let botaoResultado = document.querySelector(".js-btn-igual");

/* Seleciona o botão "AC" (All Clear) */
let botaoAC = document.querySelector(".js-btn-ac");

/* Seleciona o botão de "+/-" (trocar sinal) */
let botaoMaisMenos = document.querySelector(".js-btn-mais-menos");

/* Seleciona o botão "DEL" (deletar última entrada) */
let botaoDeletar = document.querySelector(".js-btn-del");

/**
 * Adiciona um número ou operador ao display (campo de texto)
 * @param {string} numeroDigitado - caractere (número ou símbolo) clicado pelo usuário
 */
function adicionarElementoAoInputResultado(numeroDigitado) {
  // Chama função para evitar duplicar símbolos (por exemplo, "+-")
  verificarSimboloDuplicado(numeroDigitado);

  // Se estiver tentando inserir um operador como primeiro caractere, não faz nada
  if (verificarSimboloInicial(numeroDigitado)) return;

  // Concatena o caractere clicado no valor atual do input
  elementoResultado.value += numeroDigitado;
}

/**
 * Executa o cálculo da expressão contida no input usando eval().
 * Usa try/catch para capturar erros de sintaxe ou expressões inválidas.
 */
function executarCalculo() {
  try {
    // Avalia a expressão matemática como string e substitui o valor do input pelo resultado
    elementoResultado.value = eval(elementoResultado.value);
  } catch {
    // Caso dê erro (por exemplo, expressão mal formada), exibe alerta para o usuário
    alert("Algo deu errado. Tente novamente.");
  }
}

/**
 * Limpa todo o conteúdo do display (input).
 */
function limparResultado() {
  elementoResultado.value = "";
}

/**
 * Troca o sinal do valor atual no display.
 * Se o valor for numérico, multiplica por -1.
 */
function trocarSinalDaConta() {
  // Number() retorna NaN se não for número; o if só passa se for valor numérico
  if (Number(elementoResultado.value)) {
    elementoResultado.value = elementoResultado.value * -1;
  }
}

/**
 * Deleta o último caractere digitado no input (como backspace).
 */
function deletarUltimaLetraDoResultado() {
  // slice(0, -1) corta a string removendo o último caractere
  elementoResultado.value = elementoResultado.value.slice(0, -1);
}

/**
 * Verifica se o usuário está tentando digitar dois operadores consecutivos (por exemplo, "++" ou "*-").
 * Se sim, deleta o último caractere (operador duplicado anterior) antes de inserir o novo.
 * @param {string} numeroDigitadoRecebidoPorParametro - símbolo clicado (número ou operador)
 */
function verificarSimboloDuplicado(numeroDigitadoRecebidoPorParametro) {
  // Pega o último caractere atualmente exibido no input
  let ultimoValorNoInputResultado =
    elementoResultado.value[elementoResultado.value.length - 1];

  // Se já existe um caractere e ambos (o último e o novo) não são números (ou seja, símbolos)
  // e não sejam zeros (trata zeros como números válidos), então apaga o último e deixa entrar o novo
  if (
    ultimoValorNoInputResultado &&
    !Number(ultimoValorNoInputResultado) &&
    !Number(numeroDigitadoRecebidoPorParametro) &&
    ultimoValorNoInputResultado != 0 &&
    numeroDigitadoRecebidoPorParametro != 0
  ) {
    deletarUltimaLetraDoResultado();
  }
}

/**
 * Verifica se o usuário está tentando inserir um operador como primeiro caractere.
 * Se o display estiver vazio e o caractere digitado não for número, retorna true para impedir a inserção.
 * @param {string} numeroDigitadoRecebidoPorParametro - símbolo clicado
 * @returns {boolean} - true se for operador inicial inválido, undefined caso contrário
 */
function verificarSimboloInicial(numeroDigitadoRecebidoPorParametro) {
  if (
    elementoResultado.value.length == 0 &&
    !Number(numeroDigitadoRecebidoPorParametro)
  ) {
    return true;
  }
}

/**
 * Adiciona todos os listeners de clique aos botões para que executem as ações corretas:
 * - Ao clicar em um botão numérico ou de operador, chama adicionarElementoAoInputResultado()
 * - Ao clicar em "=", chama executarCalculo()
 * - Ao clicar em "AC", chama limparResultado()
 * - Ao clicar em "+/-", chama trocarSinalDaConta()
 * - Ao clicar em "DEL", chama deletarUltimaLetraDoResultado()
 */
function gerenciarEscutadores() {
  // Para cada botão que possui classe js-btn-padroes (números e operadores)
  botoesPadroes.forEach((elementoCorrente) => {
    elementoCorrente.addEventListener("click", () => {
      // Pega o valor armazenado em data-valor (atributo data-valor) do botão
      let valorDoElementoClicado = elementoCorrente.dataset.valor;
      // Adiciona o caractere ao display
      adicionarElementoAoInputResultado(valorDoElementoClicado);
    });
  });

  // Listener do botão "="
  botaoResultado.addEventListener("click", () => {
    executarCalculo();
  });

  // Listener do botão "AC"
  botaoAC.addEventListener("click", () => {
    limparResultado();
  });

  // Listener do botão "+/-"
  botaoMaisMenos.addEventListener("click", () => {
    trocarSinalDaConta();
  });

  // Listener do botão "DEL"
  botaoDeletar.addEventListener("click", () => {
    deletarUltimaLetraDoResultado();
  });
}

// Chama a função que configura todos os event listeners quando o script é carregado
gerenciarEscutadores();
