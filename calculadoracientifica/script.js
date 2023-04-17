let result = document.getElementById("result");
let radDeg = "deg"; // Default mode is degree
let inverse = false; // Default is inverse mode off

function clearScreen() {
  result.innerHTML = "";
}

function toggleRadDeg() {
  radDeg = (radDeg === "deg") ? "rad" : "deg";
  result.innerHTML = ""; // Clear the screen
}

function toggleInverse() {
  inverse = !inverse;
  result.innerHTML = ""; // Clear the screen
}

function appendCharacter(char) {
  result.innerHTML += char;
}

function calculate() {
  try {
    let expression = result.innerHTML;
    if (inverse) {
      expression = "inv(" + expression + ")";
    }
    if (radDeg === "rad") {
      expression = "rad(" + expression + ")";
    }
    let resultValue = eval(expression);
    result.innerHTML = resultValue;
  } catch (error) {
    result.innerHTML = "Error";
  }
}


// Função para definir o tema de fundo como preto em degradê
function changeBackground(color) {
  document.body.style.background = `linear-gradient(to bottom, ${color}, #ffffff)`;
}

function setPreto() {
  document.body.style.background = "linear-gradient(to bottom, #000000, #ffffff)";
}

// Função para definir o tema de fundo como azul piscina em degradê
function setAzulPiscina() {
  document.body.style.background = "linear-gradient(to bottom, #4fc3f7, #ffffff)";
}

// Função para definir o tema de fundo como verde claro em degradê
function setVerdeClaro() {
  document.body.style.background = "linear-gradient(to bottom, #a5d6a7, #ffffff)";
}

// Adicionando os eventos de clique nos botões
document.getElementById("btnPreto").addEventListener("click", setPreto);
document.getElementById("btnAzulPiscina").addEventListener("click", setAzulPiscina);
document.getElementById("btnVerdeClaro").addEventListener("click", setVerdeClaro);

// Função para aplicar o gradiente de cor de fundo e ajustar o tamanho para preencher a tela
function alterarFundo(gradiente) {
  // Aplica o gradiente de cor de fundo à propriedade 'background' do elemento body
  document.body.style.background = gradiente;
  // Ajusta o tamanho do gradiente de cor de fundo para cobrir toda a página
  document.body.style.backgroundSize = '100% 100%';
  document.body.style.backgroundPosition = 'top left';
}