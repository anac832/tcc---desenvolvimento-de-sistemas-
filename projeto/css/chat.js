const sendBtn = document.getElementById("sendBtn");
const msgInput = document.getElementById("msgInput");
const messages = document.getElementById("messages");

sendBtn.addEventListener("click", sendMessage);
msgInput.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const text = msgInput.value.trim();
    if (text === "") return;

    const div = document.createElement("div");
    div.classList.add("msg", "sent");
    div.textContent = text;

    messages.appendChild(div);
    msgInput.value = "";

    messages.scrollTop = messages.scrollHeight;
}

/* ==========================
   SISTEMA DE ABAS
   ========================== */

const tabs = document.querySelectorAll(".tab");
const statusText = document.getElementById("statusText");

const mensagens = {
    atendidos: "Nenhum cliente disponível.",
    aguardando: "Nenhum cliente aguardando no momento.",
    resolvido: "Nenhum atendimento resolvido ainda."
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const tipo = tab.dataset.status;
        statusText.textContent = mensagens[tipo];
    });
});


document.getElementById("openChat").addEventListener("click", function(e) {
    e.preventDefault(); // impede abrir imediatamente

    setTimeout(() => {
        window.location.href = "chat.html";
    }, 2000); // 1000 ms = 1 segundo
});

