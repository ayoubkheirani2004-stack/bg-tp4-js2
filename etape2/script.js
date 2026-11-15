"use strict";
//declaration d'une fonction avec parametre (vu slide 46) 
function doInsertRowTable(num,Nom,Prenom,Points) {
    //retrouve les element par identifiant (slide 61)
    const table =document.getElementById("table");
    //cree un element de html et inserer DOM (slide 104)
    const row= document.createElement("tr"); 
    // les attribut slide 107
    row.setAttribute("class","row");
    //cree un element de html et inserer DOM (slide 104)
    const col1=document.createElement("td");
    const col2=document.createElement("td");
    const col3=document.createElement("td");
    const col4=document.createElement("td");
    const col5=document.createElement("td");
    // modification de contenu d'un element (slide 91) 
    col1.innerText= num;
    col2.innerText=Nom;
    col3.innerText=Prenom;
    col4.innerText=Points;
    //cree un element de html et inserer DOM (slide 104)
    const checkBox=document.createElement("input");
    // les attribut slide 107
    checkBox.setAttribute("type","checkBox");
    //rajouter un texte dans un contenu existe (slide 98)
    col5.append(checkBox);
    // les attribut slide 107
    col1.setAttribute("class","col_number");
    col2.setAttribute("class","col_text");
    col3.setAttribute("class","col_text");
    col4.setAttribute("class","col_number");
    col5.setAttribute("class","col_chkbox");
    //rajouter un texte dans un contenu existe (slide 98)
    row.append(col1,col2,col3,col4,col5);
    table.append(row);


    // on remarque que apres la verification des bouton que les lignes ajoute sont tous identique
    // je pense que ces resultat sont a cause de la fonction doInsertRowTable qu'elle est stable avec ces parametre

}