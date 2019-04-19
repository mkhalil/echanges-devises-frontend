
export const mapToDeviseTauxMapper = (listTaux) => {
    const map = new Map();

    listTaux.forEach(
        tauxEchange => {
            map.set(parseInt(tauxEchange.devise.id), {
                'abreviation' : tauxEchange.devise.abreviation,
                'montantAchat': tauxEchange.montantAchat,
                'montantVente': tauxEchange.montantVente,
                'unite':tauxEchange.devise.unite
            });
        }
    );
    return map;
}

export const mapToDeviseTauxList = (listTauxDevise) => {
    return listTauxDevise.map(tauxDevise => {
        return {
            'montant': '',
            'montantAchat': tauxDevise.montantAchat,
            'montantVente': tauxDevise.montantVente,
            'deviseAbreviation':tauxDevise.devise.abreviation,
            'deviseId':tauxDevise.devise.id
        }
    });
}

export const mapListTauxDeviseToOptions = (listTauxDevise) => {
    return mapListDeviseToOptions(listTauxDevise.map(tauxDevise => tauxDevise.devise));
}

export const mapListDeviseToOptions = (listDevises) => {
    return deviseOptions(listDevises.map(
        devise =>{
          return {
              value: devise.id,
              text : devise.abreviation
          }
        }
    ));
}

const deviseOptions = (list) => {
    return [{value:'', text:'Devise'}, ...list]
}
