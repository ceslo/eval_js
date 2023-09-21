function calcRem(tot) {
  if (tot < 100) {
    var rem = 0;
  } else if (tot >= 100 && tot <= 500) {
    var rem = (5 * tot) / 100;
  } else {
    var rem = (10 * tot) / 100;
  }
  return rem;
}

function calcPort(tot2) {
  var p = (2 * tot2) / 100;
  if (p <= 6) {
    p = 6;
  } else if (p >= 6 && tot2 < 500) {
    p = (2 * tot2) / 100;
  } else {
    p = 0;
  }
  return p;
}

var check = /\d.*[0-9]*/;
var pu = window.prompt("Entrez ici le prix unitaire du produit commandé");
var qtecom = parseInt(
  window.prompt("Entrez ici la quantité d'articles souhaitée")
);
var tot = pu * qtecom;
var tot2 = tot - calcRem(tot);
var pap = tot2 + calcPort(tot2);

if (check.test(pu) == false || check.test(qtecom) == false) {
  document.getElementById("er_saisie").innerHTML =
    "Les valeurs saisies ne sont pas des nombres";
} else {
  document.getElementById("total").innerHTML =
    "Prix Total avant remise: " + tot + "€";

  document.getElementById("remise").innerHTML =
    "Remise: -" + calcRem(tot) + "€";

  document.getElementById("port").innerHTML =
    "Frais de port: " + calcPort(tot2) + "€";

  document.getElementById("pap").innerHTML = "Prix à payer: " + pap + "€";
}
