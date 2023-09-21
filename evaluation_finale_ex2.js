function multi(n) {
  if (check.test(n) == false) {
    window.alert("la saisie doit être un nombre");
  } else {
    tab = [];
    for (y = 1; y <= 10; +y) {
      tab[y] = y + " x " + n + " = " + y * n;
      ++y;
    }
    return tab;
  }
}
var check = /^[0-9]$/;
var n = parseInt(
  window.prompt("Quelle table de multiplication souhaitez-vous afficher?")
);
document.getElementById("table").innerHTML = multi(n);
