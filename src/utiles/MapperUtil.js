export const mapToDeviseTauxMapper = (listTaux) => {
    const map = new Map();

    listTaux.forEach(
        tauxEchange => {
            map.set(parseInt(tauxEchange.devise.id), {
                'abreviation' : tauxEchange.devise.abreviation,
                'montantAchat': tauxEchange.montantAchat,
                'montantAchat': tauxEchange.montantAchat,
                'unite':tauxEchange.devise.unite
            });
        }
    );
    return map;
}

