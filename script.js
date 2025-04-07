const chat = document.getElementById("chat");
const notify = document.getElementById("notification-sound");

function sendMessage(content, delay = 1000) {
  setTimeout(() => {
    const message = document.createElement("div");
    message.className = "message bot";
    message.innerHTML = content;
    chat.appendChild(message);
    notify.play();
    chat.scrollTop = chat.scrollHeight;
  }, delay);
}

function renderButtons() {
  sendMessage(`
    <div class="options">
      <button onclick="window.location.href='https://wa.me/5538999750635?text=Gostaria%20de%20fazer%20minha%20cota%C3%A7%C3%A3o'">
        Enviar dados para receber minha cotação através do WhatsApp
      </button>
      <button onclick="window.location.href='https://wa.me/5538999750635?text=Gostaria%20de%20fazer%20minha%20cota%C3%A7%C3%A3o'">
        Ser direcionado diretamente para um consultor
      </button>
    </div>
  `, 2500);
}

// Dispara ao abrir a página
sendMessage("👋 Olá! Bem-vindo(a) à UNIVERSOAGV, a proteção veicular entre as 5 maiores do Brasil, com cerca de 500 mil associados e uma das mais bem avaliadas no Reclame Aqui! 🚗💼", 1000);
renderButtons();
