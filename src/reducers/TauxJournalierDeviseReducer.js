const tauxJournalierDeviseReducer = (state = [], action) => {

    if (action.type === 'LIST_TAUX_ECHANGES_DEVISE') {

        debugger;
        let newState = {...state};
        console.log("new state", newState);
        console.log("action.payload", action.payload);

        newState.tauxEchangesDevisesListe = action.payload;
        console.log("new state", newState);
        return newState;
    }

    return state;
}

export default tauxJournalierDeviseReducer;