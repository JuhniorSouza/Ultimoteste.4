// script.js

const chat = document.getElementById('chat');
const notificationSound = document.getElementById('notification-sound');

function playSound() {
  notificationSound.currentTime = 0;
  notificationSound.play();
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function createMessage(content, type = 'bot') {
  const msg = document.createElement('div');
  msg.className = `message ${type}`;
  msg.innerHTML = content;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
  playSound();
}

function createButton(text, onClick) {
  const btn = document.createElement('button');
  btn.className = 'chat-button';
  btn.textContent = text;
  btn.onclick = onClick;
  return btn;
}

function clearButtons() {
  const buttons = document.querySelectorAll('.chat-button');
  buttons.forEach(btn => btn.remove());
}

function createInputField(placeholder, name) {
  const input = document.createElement('input');
  input.placeholder = placeholder;
  input.name = name;
  input.className = 'chat-input';
  return input;
}

function handleCotacao() {
  clearButtons();
  createMessage('Vamos fazer sua cotação! Por favor, preencha os dados abaixo:');

  const form = document.createElement('form');
  form.className = 'chat-form';

  const nome = createInputField('Seu nome', 'nome');
  const cidade = createInputField('Cidade', 'cidade');
  const numero = createInputField('Número de celular', 'numero');
  const modelo = createInputField('Modelo exato do veículo', 'modelo');
  const placa = createInputField('Placa', 'placa');
