 function puissanceNoeud (Po, nbAbonnés){
     let res = Po*nbAbonnés;
     return res ;
 }

function Cumul(i, colName){
    let cumul=0;
    return cumul;
}


 function cumulPuissanceFoissonnée(kf ,i ,colName, Po){
    let cumul = Cumul(i,colName);
     let res = kf*cumul*Po;
     return res;
 }

 



 function cumulPuissanceNoeud(kf ,i , Po, colName1 , colName2){
     let CumPuiFois = cumulPuissanceFoissonnée(kf,i,colName1,Po); // Colname1 parce que la puissance foisonnée concerne le nombre d'abbonnes au noeuds 
     let cumulChargePro = cumul(i,colName2); // ColName 2 : Cumul charge de puissance 
     let res = CumPuiFois + cumulChargePro;
     return res;

 }
