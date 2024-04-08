function changeChannel(event) {
    event.preventDefault();
    var link = event.target.getAttribute("href");
    var iframe = document.getElementById("player");
    iframe.src = link;
}

window.onload = function() {
    var today = new Date();
    var dayOfWeek = today.getDay();

    var imageSrc;
    var linkBackgroundColor;
    
    if (dayOfWeek === 0 || dayOfWeek === 1 || dayOfWeek === 2) { // Domingo (0), Segunda (1) ou Terça (2)
        imageSrc = "src/raw.jpg";
        linkBackgroundColor = "crimson"; 
    } else if (dayOfWeek >= 3 && dayOfWeek <= 5) { // Quarta (3) a Sexta (5)
        imageSrc = "src/smackdown.jpg";
        linkBackgroundColor = "blue"; 
    } else { // Sábado (6)
        imageSrc = "src/WM40.jpg";
        linkBackgroundColor = "crimson";
    }

    var player = document.getElementById("player");
    player.src = imageSrc;

    var links = document.querySelectorAll("ul#canais li a");
    links.forEach(function(link) {
        link.style.backgroundColor = linkBackgroundColor;
    });
};

function aumentarContador() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("viewCount").textContent = xhr.responseText;
        }
    };
    xhr.open("GET", "aumentar_contador.php", true);
    xhr.send();
}


