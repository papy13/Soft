let table=[
    {section:0.5,
     natureTroncon:"aerien isole",
     ameTroncon:"cuivre",
     intensiteNominaleTri:0,
     intensiteNominaleMono:10
    },
    {section:0.5,
     natureTroncon:"Souterrain",
     ameTroncon:"cuivre",
     intensiteNominaleTri:0,
     intensiteNominaleMono:0
    },
    {section:0.75,
        natureTroncon:"aerien isolé",
        ameTroncon:"cuivre",
        intensiteNominaleTri:12,
        intensiteNominaleMono:13.5
    },
    {section:0.75,
        natureTroncon:"Souterrain",
        ameTroncon:"cuivre",
        intensiteNominaleTri:0,
        intensiteNominaleMono:0
       },
       {section:1,
        natureTroncon:"aerien isole",
        ameTroncon:"cuivre",
        intensiteNominaleTri:14,
        intensiteNominaleMono:15
       },
       {section:1,
        natureTroncon:"Souterrain",
        ameTroncon:"cuivre",
        intensiteNominaleTri:0,
        intensiteNominaleMono:0
       },
       {section:1.5,
        natureTroncon:"aerien isole",
        ameTroncon:"cuivre",
        intensiteNominaleTri:18,
        intensiteNominaleMono:20
       },
       {section:1.5,
        natureTroncon:"Souterrain",
        ameTroncon:"cuivre",
        intensiteNominaleTri:15,
        intensiteNominaleMono:18
       },
       {section:2.5,
        natureTroncon:"aerien isole",
        ameTroncon:"cuivre",
        intensiteNominaleTri:24,
        intensiteNominaleMono:26
       },
       {section:2.5,
        natureTroncon:"Souterrain",
        ameTroncon:"cuivre",
        intensiteNominaleTri:20,
        intensiteNominaleMono:24
       },
       {section:4,
        natureTroncon:"aerien isole",
        ameTroncon:"cuivre",
        intensiteNominaleTri:32,
        intensiteNominaleMono:35
       },
       {section:4,
        natureTroncon:"Souterrain",
        ameTroncon:"cuivre",
        intensiteNominaleTri:26,
        intensiteNominaleMono:32
       },
       {section:6,
        natureTroncon:"aerien isole",
        ameTroncon:"Aluminium",
        intensiteNominaleTri:0,
        intensiteNominaleMono:0
       },
       {section:6,
        natureTroncon:"Souterrain",
        ameTroncon:"Aluminium",
        intensiteNominaleTri:0,
        intensiteNominaleMono:0
       },
       {section:6,
        natureTroncon:"aerien isole",
        ameTroncon:"cuivre",
        intensiteNominaleTri:52,
        intensiteNominaleMono:58
       },
       {section:6,
        natureTroncon:"Souterrain",
        ameTroncon:"cuivre",
        intensiteNominaleTri:64,
        intensiteNominaleMono:74
       },
       {section:10,
        natureTroncon:"aerien isole",
        ameTroncon:"Aluminium",
        intensiteNominaleTri:0,
        intensiteNominaleMono:0
       },
       {section:10,
        natureTroncon:"Souterrain",
        ameTroncon:"Aluminium",
        intensiteNominaleTri:0,
        intensiteNominaleMono:0
       },
       {section:10,
        natureTroncon:"aerien isole",
        ameTroncon:"cuivre",
        intensiteNominaleTri:71,
        intensiteNominaleMono:80
       },
       {section:10,
        natureTroncon:"Souterrain",
        ameTroncon:"cuivre",
        intensiteNominaleTri:88,
        intensiteNominaleMono:101
       },
       {section:16,
        natureTroncon:"aerien isole",
        ameTroncon:"Aluminium",
        intensiteNominaleTri:74,
        intensiteNominaleMono:83
       },
       {section:16,
        natureTroncon:"Souterrain",
        ameTroncon:"Aluminium",
        intensiteNominaleTri:87,
        intensiteNominaleMono:100
       },
       {section:16,
        natureTroncon:"aerien isole",
        ameTroncon:"cuivre",
        intensiteNominaleTri:96,
        intensiteNominaleMono:107
       },
       {section:16,
        natureTroncon:"Souterrain",
        ameTroncon:"cuivre",
        intensiteNominaleTri:111,
        intensiteNominaleMono:1
       },

    
    
    
]

console.log(table)
let Tab = [];
let Max = tab.length;
let CosPhi = "Valeur à recup du form 1";
let NatReseau = "Valeur Type réseau Mono ou Tri à recup du form 1"
let U0 = "Valeur Tension Initiale à recup du form1";
let P0 = "Puissance par client à recup du form1";
let X1 = 0;
let R0 = 0;

function PuissanceNoeud (i)
{
     let res = P0*Tab[i].NbAbonneNoeud
     return res ;
}

function Cumul(i,ColName)
{
    /* Cumul à partir de l'indice i (noeud) des données d'une Colonne ColName
    (Colonne du Tableau de Cartographie) donnée en string*/
    let Cumul = 0;
    for (let k = i; k< Max; k++)
    {
        Cumul+= Tab[k].ColName;
    }
    return Cumul;
}

function CumulPuissanceFoisonnee(kf,i,colName){
    let cumul = Cumul(i,colName);
     let res = kf*cumul*P0;
     return res;
 }


 function CumulPuissanceNoeud(kf ,i, colName1 , colName2){
     let CumPuiFois = CumulPuissanceFoisonnee(kf,i,colName1,Po); // Colname1 parce que la puissance foisonnée concerne le nombre d'abbonnes au noeuds 
     let cumulChargePro = Cumul(i,colName2); // ColName 2 : Cumul charge de puissance 
     let res = CumPuiFois + cumulChargePro;
     return res;
 }



//Chute de tension au nœud actuel
function ChuteTensionNoeud(i, CumulPuiss){
    /*E nfonction de l'indice du noeud dans le tableau, on recupère les paramètres tels que la réactance X1 et la résistivité R0 
      puis on calcule les Chutes de Tension au noeud i*/
    //CumulPuiss = Cumul de la puissance au noeud i à calculer à l'aide dela fonction CumulPuissanceNoeud
    if (Tab[i].Nature === "AerienNu"){
        X1 = 0,35 ;
    }
    else if (Tab[i].Nature === "AerienIsole" || "Souterrain"){
        X1 = 0,1 ;
    }

    if (Tab[i].Ame === "Aluminium"){
        R0 = 30 ;
    }
    else if (Tab[i].Nature === "Cuivre"){
        R0 = 18 ;
    }
        
    let Result = CumulPuiss*Tab[i].Nature*((R0/Tab[i].Section) + X1*Math.sqrt((1/(CosPhi*CosPhi))-1))/TensionNoeudActuel(i-1);
    
    if(NatReseau === "Triphasé"){
        //Chute de tension au nœud actuel - Triphasé
        return Result;
    }
    else if (NatReseau === "Monophase"){
        //Chute de tension au nœud actuel - Monophasé
        return 2*Result;
    }
}

//Cumul chute de tension au noeud actuel

function CumulChuteTensionNoeudActuel(i){
 let CumulTensionAmont = 0;
 let chuteNoeud = ChuteTensionNoeud(i);
 // Calcul cumulTension noeud Tension
 
 for(let k=i ; k>0 ; k--){
  CumulTensionAmont +=ChuteTensionNoeud(k) 
 }
 let res = chuteNoeud + CumulTensionAmont;
 return res ;
}
// TensionNoeudActuel
function TensionNoeudActuel(i){
 
 if(i==0 ){
  return res = U0;
}
 else{
      let tensionAmont = TensionNoeudAmont(i-1);
      let chuteTensionNoeudActuel = ChuteTensionNoeud(i);
      let result = tensionAmont - chuteTensionNoeudActuel;
 return result ;
 }

//Chute de tension relative
function ChuteTensionRelative(i){

    return 100*CumulChuteTensionNoeudActuel(i)/U0; 
}

//Intensité Cable
function IntensiteCable(i,CumulPuiss){
    //CumulPuiss = Cumul de la puissance au noeud i à calculer à l'aide dela fonction CumulPuissanceNoeud
    let Result = CumulPuiss/(TensionNoeudActuel(i)*CosPhi);
    
    if(NatReseau === "Triphasé"){
        //Intensité Cable - Triphasé
        return Result/Math.sqrt(3);
    }
    else if (NatReseau === "Monophase"){
        //Intensité Cable - Monophasé
        return Result;
    }
}
}



