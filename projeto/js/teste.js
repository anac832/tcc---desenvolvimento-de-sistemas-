
document.addEventListener('DOMContentLoaded', () => {
  // =================== CHAT PRINCIPAL ===================
  const chatContainer = document.querySelector('.chat-container');
  if (chatContainer) {
    const messages = [
      { from: 'bot', text: 'Olá! Como posso te ajudar hoje?' },
      { from: 'user', text: 'Oi! Quero saber mais sobre o produto.' },
      { from: 'bot', text: 'Claro! Nosso produto é incrível e tem garantia de 1 ano.' },
    ];

    function showMessage(index) {
      if (index >= messages.length) return;

      const msg = messages[index];

      if (msg.from === 'bot') {
        const typing = document.createElement('div');
        typing.classList.add('typing');
        chatContainer.appendChild(typing);
        chatContainer.scrollTop = chatContainer.scrollHeight;

        setTimeout(() => {
          typing.remove();

          const div = document.createElement('div');
          div.classList.add('chat-message', msg.from);
          div.textContent = msg.text;
          chatContainer.appendChild(div);

          setTimeout(() => {
            div.style.opacity = 1;
            div.style.transform = 'translateY(0)';
          }, 50);

          chatContainer.scrollTop = chatContainer.scrollHeight;
          showMessage(index + 1);
        }, 1500);
      } else {
        setTimeout(() => {
          const div = document.createElement('div');
          div.classList.add('chat-message', msg.from);
          div.textContent = msg.text;
          chatContainer.appendChild(div);

          setTimeout(() => {
            div.style.opacity = 1;
            div.style.transform = 'translateY(0)';
          }, 50);

          chatContainer.scrollTop = chatContainer.scrollHeight;
          showMessage(index + 1);
        }, 800);
      }
    }
    showMessage(0);
  }

  // =================== MINI CHAT FLUTUANTE ===================
  const miniChatBox = document.getElementById('mini-chat-box');
  const miniChatMessages = document.getElementById('mini-chat-messages');
  if (miniChatBox && miniChatMessages) {
    const miniChatData = [
      { from: 'bot', text: 'Olá! Bem-vindo ao atendimento virtual.' },
      { from: 'user', text: 'Boa tarde! Quais são os horários de entrega?' },
      { from: 'bot', text: 'Entregamos de segunda a sexta, das 9h às 18h.' },
    ];

    function showMiniChatMessage(index) {
      if (index >= miniChatData.length) return;

      const msg = miniChatData[index];

      if (msg.from === 'bot') {
        const typing = document.createElement('div');
        typing.classList.add('typing');
        miniChatMessages.appendChild(typing);
        miniChatMessages.scrollTop = miniChatMessages.scrollHeight;

        setTimeout(() => {
          typing.remove();

          const div = document.createElement('div');
          div.classList.add('chat-message', msg.from);
          div.textContent = msg.text;
          miniChatMessages.appendChild(div);

          setTimeout(() => {
            div.style.opacity = 1;
            div.style.transform = 'translateY(0)';
          }, 50);

          miniChatMessages.scrollTop = miniChatMessages.scrollHeight;
          showMiniChatMessage(index + 1);
        }, 1500);
      } else {
        setTimeout(() => {
          const div = document.createElement('div');
          div.classList.add('chat-message', msg.from);
          div.textContent = msg.text;
          miniChatMessages.appendChild(div);

          setTimeout(() => {
            div.style.opacity = 1;
            div.style.transform = 'translateY(0)';
          }, 50);

          miniChatMessages.scrollTop = miniChatMessages.scrollHeight;
          showMiniChatMessage(index + 1);
        }, 800);
      }
    }

    // Função global
    window.toggleChat = function () {
      const isHidden = miniChatBox.style.display === 'none';
      miniChatBox.style.display = isHidden ? 'flex' : 'none';
      if (isHidden) {
        miniChatMessages.innerHTML = '';
        showMiniChatMessage(0);
      }
    };
  }

  // =================== SUBMENU ===================
  const submenuItems = document.querySelectorAll('.menu li.has-submenu');
  submenuItems.forEach(item => {
    const link = item.querySelector('a');
    const submenu = item.querySelector('.submenu');
    if (link && submenu) {
      link.addEventListener('mouseenter', () => {
        submenu.style.display = 'block';
      });
      item.addEventListener('mouseleave', () => {
        submenu.style.display = 'none';
      });
    }
  });

// =================== MOSTRAR/OCULTAR SENHA ===================
const senha = document.getElementById("senha");
const toggle = document.getElementById("toggleSenha");

let mostrando = false;

toggle.addEventListener("click", () => {
  mostrando = !mostrando;

  // Alterna o tipo do input
  senha.type = mostrando ? "text" : "password";

  // Alterna o ícone
  toggle.innerHTML = mostrando
    ? `
      <!-- Olho RIScado profissional -->
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
        <path fill="none" stroke="#555" stroke-width="2"
              d="M1 12s4-7 11-7s11 7 11 7s-4 7-11 7S1 12 1 12z"/>
        <circle cx="12" cy="12" r="3" fill="#555"/>
        <line x1="4" y1="4" x2="20" y2="20" stroke="#555" stroke-width="2"/>
      </svg>
    `
    : `
      <!-- Olho normal profissional -->
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
        <path fill="none" stroke="#555" stroke-width="2"
              d="M1 12s4-7 11-7s11 7 11 7s-4 7-11 7S1 12 1 12z"/>
        <circle cx="12" cy="12" r="3" fill="#555"/>
      </svg>
    `;
});





  // =================== FAQ ===================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const button = item.querySelector('.faq-question');
    if (!button) return;
    button.addEventListener('click', () => {
      faqItems.forEach((i) => {
        if (i !== item) i.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  });
});
