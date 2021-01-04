"use strict";
let k = 0;
function carreMagique(dim){
    let i = 0;
    let tab = [];
    let doublon = false;
    for(let i = 0; i < dim; i++){
        tab[i] = i + 1;
    }
    for(i = dim; i < dim*dim;){
        if(!doublon)
            tab[i] = 1;
        doublon = false;
        //Vérification rangée
        for(let row = i - i % dim; row < i; row++){
            if(tab[row] === tab[i]){
                k++;
                tab[i]++;
                row = (i - i % dim) - 1;
                if(tab[i] > dim){
                    doublon = true;
                    break;
                }
            }
        }
        if(!doublon){
            //Vérification colonne
            for(let col = i % dim; col < i; col += dim){
                if(tab[col] === tab[i]){
                    k++;
                    tab[i]++;
                    col = (i % dim) - dim;
                    doublon = true;
                    break;
                }
            }
        }
        if(!doublon && i % (dim + 1) === 0){
            // Vérification diagonale descendante
            for(let dg = i % (dim+1); dg < i; dg += (dim + 1)){
                if(tab[dg] === tab[i]){
                    k++;
                    tab[i]++;
                    dg = (i % (dim+1)) - (dim+1);
                    doublon = true;
                    break;
                }
            }
        }
        if(!doublon && i % (dim - 1) === 0 && i !== dim * dim -1){
            //Vérification diagonale montante
            for(let dd = (i % (dim-1)) + (dim-1); dd < i; dd += (dim-1)){
                if (tab[dd] === tab[i]){
                    k++;
                    tab[i]++;
                    dd = i % (dim-1);
                    doublon = true;
                    break;
                }
            }
        }
        if(tab[i] > dim){
            i--;
            doublon = true;
            tab[i]++;
        }
        if(!doublon){
            i++;
        }
    }
    return tab;
}
let carre = carreMagique(8);
let table = document.createElement('table');
for(let i = 0; i < Math.sqrt(carre.length) ; i++) {
    table.insertRow();
    for(let j = 0; j < Math.sqrt(carre.length) ; j++)
        table.rows[i].insertCell().textContent = carre[i * Math.sqrt(carre.length) + j];
}
out.appendChild(table);
console.log(k);
