const chat = document.getElementById("chat");
const notifySound = document.getElementById("notify-sound");

function playSound() {
  notifySound.currentTime = 0;
  notifySound.play();
}

function addMessage(text, withDelay = true) {
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
  playSound();
}

function addButtons(options) {
  const btnContainer = document.createElement("div");
  btnContainer.className = "buttons";
  options.forEach(({ label, onClick }) => {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.onclick = () => {
      btnContainer.remove();
      onClick();
    };
    btnContainer.appendChild(btn);
  });
  chat.appendChild(btnContainer);
  chat.scrollTop = chat.scrollHeight;
}

function startChat() {
  addMessage("Olá! 👋 Seja bem-vindo(a) à UniversoAGV, uma das 5 maiores proteções veiculares do Brasil, com mais de 500 mil associados e excelente reputação no Reclame Aqui.");
  setTimeout(() => {
    addMessage("Como podemos te ajudar hoje?");
    addButtons([
      {
        label: "📨 Enviar dados para cotação",
        onClick: stepCotacao1
      },
      {
        label: "📱 Falar direto com um consultor",
        onClick: () => {
          window.location.href = "https://wa.me/5538999750635?text=Gostaria%20de%20fazer%20minha%20cota%C3%A7%C3%A3o";
        }
      },
      {
        label: "ℹ️ Saber mais sobre a AGV",
        onClick: saberMais
      }
    ]);
  }, 1000);
}

function stepCotacao1() {
  const perguntas = [
    "Qual seu nome completo?",
    "Cidade e estado?",
    "Modelo exato do veículo?",
    "Ano do veículo?",
    "Número de WhatsApp?",
    "Placa do veículo?"
  ];

  const respostas = [];
  let index = 0;

  function perguntar() {
    if (index < perguntas.length) {
      const pergunta = perguntas[index];
      const input = prompt(pergunta);
      if (input) {
        respostas.push(`${pergunta} ${input}`);
        index++;
        perguntar();
      }
    } else {
      const msg = respostas.join("\n");
      window.location.href = `https://wa.me/5538999750635?text=${encodeURIComponent("Gostaria de fazer minha cotação:\n" + msg)}`;
    }
  }

  perguntar();
}

function saberMais() {
  addMessage("Você quer saber mais sobre:");
  addButtons([
    {
      label: "🔍 Como funciona uma associação",
      onClick: () => addMessage("As associações funcionam como cooperativas... (texto explicativo).")
    },
    {
      label: "🏢 Quem somos nós",
      onClick: () => addMessage("Estamos há 10 anos no mercado, desde 2015, oferecendo proteção veicular com confiança.")
    },
    {
      label: "✨ Nosso diferencial",
      onClick: () => addMessage("Atendimento humanizado, cobertura nacional e planos acessíveis.")
    },
    {
      label: "⭐ Nossa reputação",
      onClick: () => addMessage("Uma das mais bem avaliadas no Reclame Aqui entre as proteções veiculares.")
    }
  ]);
}

startChat();
