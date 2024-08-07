function ver (div) {
    var div1 = document.getElementById("HTML").classList.add("ocultar");
    var div2 = document.getElementById("CSS").classList.add("ocultar");
    var div3 = document.getElementById("React").classList.add("ocultar");
    var div4 = document.getElementById("JS").classList.add("ocultar");
    var div5 = document.getElementById("Node").classList.add("ocultar");
    var div6 = document.getElementById("DevOps").classList.add("ocultar");

    var contentDiv = document.getElementById(div);
    if (contentDiv.classList.contains("ocultar")) {
        contentDiv.classList.remove("ocultar");
    } else {
        contentDiv.classList.add("ocultar");
    }
};
