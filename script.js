// Função para abrir o modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    localStorage.setItem('modalClosed', 'true'); // Armazena que o modal foi fechado
}

// Verifica se o modal já foi fechado e se a tela é grande o suficiente
function checkModal() {
    if (!localStorage.getItem('modalClosed') && window.innerWidth > 768) {
        openModal();
    }
}

// Adiciona o evento de clique no botão "Sim"
document.getElementById("confirmButton").addEventListener("click", closeModal);

// Adiciona evento para fechar o modal quando clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}

// Verifica o tamanho da tela assim que a página é carregada
window.onload = checkModal;

// Função para verificar se é um dispositivo móvel
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches; // Ajuste o valor conforme necessário
}

// Função para atualizar o vídeo de acordo com o dia da semana
function updateVideo() {
    const videoElement = document.getElementById('background-video');
    const dayOfWeek = new Date().getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

    // Verifica se é um dispositivo móvel
    if (isMobile()) {
        // Vídeos para dispositivos móveis
        switch (dayOfWeek) {
            case 1: // Segunda
            case 6: // Sábado
            case 0: // Domingo
                videoElement.src = 'src/rawMOBILE.mp4'; // Vídeo para Raw no mobile
                break;
            case 2: // Terça
                videoElement.src = 'src/nxtMOBILE.mp4'; // Vídeo para NXT no mobile
                break;
            case 3: // Quarta
            case 4: // Quinta
            case 5: // Sexta
                videoElement.src = 'src/smackMOBILE.mp4'; // Vídeo para SmackDown no mobile
                break;
            default:
                break;
        }
    } else {
        // Vídeos para desktop
        switch (dayOfWeek) {
            case 1: // Segunda
            case 6: // Sábado
            case 0: // Domingo
                videoElement.src = 'src/raw.mp4'; // Vídeo para Raw
                break;
            case 2: // Terça
                videoElement.src = 'src/nxt.mp4'; // Vídeo para NXT
                break;
            case 3: // Quarta
            case 4: // Quinta
            case 5: // Sexta
                videoElement.src = 'src/smack.mp4'; // Vídeo para SmackDown
                break;
            default:
                break;
        }
    }

    // Carrega o novo vídeo
    videoElement.load();
}

// Chama a função ao carregar a página
window.onload = updateVideo;

function changeChannel(event) {
    event.preventDefault();
    var link = event.target.getAttribute("href");
    var iframe = document.getElementById("player");
    iframe.src = link;

    // Tenta abrir o iframe em tela cheia
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Para o Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Para o Chrome, Safari e Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // Para o IE/Edge
        iframe.msRequestFullscreen();
    }
}

function openPlayer() {
    // Exibir um alerta como exemplo. Aqui você pode abrir um player real.
    alert("O player será aberto agora. Se o player travar, atualize a página.");
    
    // Aqui você pode adicionar a lógica para abrir o player.
    // Exemplo:
    // window.open("URL_do_seu_player", "_blank");
}


    const menuButton = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('open'); // Adiciona ou remove a classe 'open'
    });


document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // TEMPORIZADOR 3s para fechar o modal
    setTimeout(function() {
        modal.style.display = "none";
    }, 100000);

});


document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert("error 404");
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        alert("error 404");
    }
});



