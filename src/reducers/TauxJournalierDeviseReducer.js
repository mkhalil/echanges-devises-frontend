const tauxJournalierDeviseReducer = (state = [], action) => {

    if (action.type === 'LIST_TAUX_ECHANGES_DEVISE') {

        console.log("state = ", action.payload);
        return {
            ...state, listTauxJournalierDevise:action.payload};
    }

    if (action.type === 'TEST') {
        return {...state, name:action.payload};
    }
    return state;
}

export default tauxJournalierDeviseReducer;