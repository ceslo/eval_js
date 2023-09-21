var button = document.getElementById("envoyer");
button.addEventListener("click", function () {
  var filtre_alph = /^[A-Za-z]$/;
  var filtreCP = /^\d{5}$/;
  var filtre_mail = /^[a-z0-9.-]+@[a-z.-]+\.[a-z]{2,3}$/;

  if (filtre_alph.test(document.getElementById("nom").value) == false) {
    document.getElementById("er_nom").innerHTML =
      "Le nom ne doit comprendre que des caractères aplhabétiques";
  }
  if (filtre_alph.test(document.getElementById("prenom").value) == false) {
    document.getElementById("er_prenom").innerHTML =
      "Le prénom ne doit comprendre que des caractères aplhabétiques";
  }
  if (
    filtre_alph.test(document.getElementById("ville").value) == false &&
    document.getElementById("ville").value != ""
  ) {
    document.getElementById("er_ville").innerHTML =
      "Le nom de la ville ne doit comprendre que des caractères aplhabétiques";
  }
  if (filtreCP.test(document.getElementById("CP").value) == false) {
    document.getElementById("er_CP").innerHTML =
      "Le code postal doit comprendre 5 chiffres uniquement";
  }
  if (filtre_mail.test(document.getElementById("email").value) == false) {
    document.getElementById("er_email").innerHtml =
      "L'adresse e-mail n'est pas conforme";
  }
  if (document.getElementById("nom").value == "") {
    document.getElementById("er_nom").innerHTML = "Ce champ est obligatoire";
  }
  if (document.getElementById("prenom").value == "") {
    document.getElementById("er_prenom").innerHTML = "Ce champ est obligatoire";
  }
  if (document.getElementById("CP").value == "") {
    document.getElementById("er_CP").innerHTML = "Ce champ est obligatoire";
  }
  if (document.getElementById("email").value == "") {
    document.getElementById("er_email").innerHTML = "Ce champ est obligatoire";
  }
  if (document.getElementById("question").value == "") {
    document.getElementById("er_question").innerHTML =
      "Ce champ est obligatoire";
  }
  if (document.getElementById("sexe").checked == false) {
    document.getElementById("er_sexe").innerHTML = "Ce champ est obligatoire";
  }
  if (document.getElementById("ddn").value == "") {
    document.getElementById("er_ddn").innerHTML = "Ce champ est obligatoire";
  }
  if (document.getElementById("defaut").selected == true) {
    document.getElementById("er_sujet").innerHTML = "Ce champ est obligatoire";
  }
  if (document.getElementById("traitement_informatique").checked == false) {
    document.getElementById("er_traitement_info").innerHTML =
      "Ce champ est obligatoire";
  }
});
