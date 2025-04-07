const chat = document.getElementById('chat');
const sound = document.getElementById('notification-sound');

function playSound() {
  sound.play();
}

function addMessage(text, delay = 1000) {
  setTimeout(() => {
    const message = document.createElement('div');
    message.className = 'message bot';
    message.innerText = text;
    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
    playSound();
  }, delay);
}

function addOptions(options, delay = 1000) {
  setTimeout(() => {
    const container = document.createElement('div');
    container.className = 'options';

    options.forEach(opt => {
      const button = document.createElement('button');
      button.innerText = opt.label;
      button.onclick = () => opt.action();
      container.appendChild(button);
    });

    chat.appendChild(container);
    chat.scrollTop = chat.scrollHeight;
    playSound();
  }, delay);
}

function showInitialMessages() {
  addMessage("Olá! 👋 Seja bem-vindo à UNIVERSOAGV.");
  addMessage("Escolha uma das opções abaixo para começar:", 2000);

  addOptions([
    {
      label: "1️⃣ Fazer uma cotação",
      action: showCotacaoForm
    },
    {
      label: "2️⃣ Falar com um atendente",
      action: () => {
        window.location.href = "https://wa.me/5538999750635?text=Gostaria%20de%20fazer%20minha%20cota%C3%A7%C3%A3o";
      }
    },
    {
      label: "3️⃣ Saber mais sobre a AGV",
      action: showMaisInfo
    }
  ], 3500);
}

function showCotacaoForm() {
  addMessage("Preencha os dados abaixo para sua cotação:");

  const form = document.createElement('form');
  form.className = 'chat-form';

  const fields = [
    { name: 'nome', placeholder: 'Nome completo' },
    { name: 'cidade', placeholder: 'Cidade' },
    { name: 'numero', placeholder: 'Número de telefone' },
    { name: 'modelo', placeholder: 'Modelo exato do veículo' },
    { name: 'placa', placeholder: 'Placa do veículo' }
  ];

  fields.forEach(f => {
    const input = document.createElement('input');
    input.name = f.name;
    input.placeholder = f.placeholder;
    input.className = 'chat-input';
    form.appendChild(input);
  });

  const submit = document.createElement('button');
  submit.innerText = 'Enviar';
  submit.className = 'chat-button';
  submit.type = 'submit';

  form.appendChild(submit);

  form.onsubmit = (e) => {
    e.preventDefault();
    const dados = fields.map(f => `${f.placeholder}: ${form[f.name].value}`).join('%0A');
    const link = `https://wa.me/5538999750635?text=Gostaria%20de%20fazer%20minha%20cota%C3%A7%C3%A3o:%0A${dados}`;
    window.location.href = link;
  };

  chat.appendChild(form);
  chat.scrollTop = chat.scrollHeight;
}

function showMaisInfo() {
  addMessage("Escolha uma das opções para saber mais:");

  addOptions([
    {
      label: "📌 Como funciona uma associação",
      action: () => addMessage("Uma associação protege seu veículo por meio de rateio entre associados...")
    },
    {
      label: "🏢 Quem somos nós",
      action: () => addMessage("Somos a UNIVERSOAGV, há 10 anos no mercado de proteção veicular (desde 2015).")
    },
    {
      label: "🚀 Nosso diferencial",
      action: () => addMessage("Atendimento personalizado, agilidade no suporte e proteção em todo o Brasil.")
    },
    {
      label: "⭐ Nossa reputação",
      action: () => addMessage("Mais de 10 mil associados satisfeitos e nota máxima nas avaliações.")
    }
  ]);
}

window.onload = showInitialMessages;
