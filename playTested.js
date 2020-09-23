var robot1 = document.getElementsById("game");
robot1.addEventListener("animationstart", listener, false);
robot1.addEventListener("animationstart", listener, false);
robot1.addEventListener("animationend", listener, false);
robot1.addEventListener("animationiteration", listener, false);

robot1.className = "slidein";

function listener(event) {
    var l = document.createElement("p");
    switch(event.type) {
      case "animationstart":
        l.innerHTML = "Début : durée écoulée : " + event.elapsedTime;
        break;
      case "animationend":
        l.innerHTML = "Fin : durée écoulée : " + event.elapsedTime;
        break;
      case "animationiteration":
        l.innerHTML = "Nouvelle boucle démarrée à : " + event.elapsedTime;
        break;
    }
    document.getElementById("output").appendChild(l);
  }