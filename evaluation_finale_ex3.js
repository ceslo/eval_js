function f (p)
{
    var tab = ["Audrey","Aurelien","Flavien", "Jérémy","Laurent","Nouara","Salem","Samuel", "Stephane"];
    if(tab.includes(p)==true)
    {
        var i=tab.indexOf(p)
        tab.splice(i,1)
        document.getElementById("texte").innerHTML= tab
    }
    else{
        document.getElementById("texte").innerHTML="Le prénom donné ne fait pas partie du tableau"
    }
    
};

var prenom=window.prompt("Entrez un prénom");
f(prenom);
