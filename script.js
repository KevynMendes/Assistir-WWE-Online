function changeChannel(event) {
    event.preventDefault();
    var link = event.target.getAttribute("href");
    var iframe = document.getElementById("player");
    iframe.src = link;
}