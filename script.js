/* script.js  for a chatbot */
function sendQuestion(question) {
    const chatBox = document.getElementById("chat-box");
    const userMessage = `<div class='chat-message user'>${question}</div>`;
    chatBox.innerHTML += userMessage;
    
    setTimeout(() => {
        let response = "";
        switch(question) {
            case "Que recherchez vous comme poste ?":
                response = "Je suis à la recherche d’un stage de développeur d'une durée de six mois.";
                break;
            case "Quand etes vous disponnible ?":
                response = "Je suis actuellement en formation chez Donkeyschool et disponible dès le 16 septembre 2025.";
                break;
            case "Comment vous contacter ?":
                response = "Vous pouvez me joindre par mail à math.9408@gmail.com.";
                break;
            case "Temps de trajet jusqu à Paris ?":
                response = "Depuis Chelles mon domicile, je mets 15 min avec la ligne P pour rejoindre la Gare de l’Est.";
                break;
            default:
                response = "Je n’ai pas compris votre question.";
        }
        chatBox.innerHTML += `<div class='chat-message bot'>${response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    const toggleIcon = document.getElementById("toggle-icon");
    chatContainer.classList.toggle("minimized");

    if (chatContainer.classList.contains("minimized")) {
        toggleIcon.textContent = "▲";
    } else {
        toggleIcon.textContent = "▼";
    }
}
