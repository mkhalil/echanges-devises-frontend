import * as tauxJournalierDeviseAction from '../actions/Action';

const initState = {
    listTauxJournalierDevise: [],
    listCurrentTaux: []
}

const tauxJournalierDeviseReducer = (state = initState, action) => {

    if (action.type === tauxJournalierDeviseAction.LIST_TAUX_DEVISE) {
        return {...state, listTauxJournalierDevise: action.payload};
    }


    if (action.type === tauxJournalierDeviseAction.LIST_TAUX_DEVISE_TODAY) {
        console.log('listCurrentTaux', action.payload);
        return {...state, listCurrentTaux: action.payload};
    }
    console.log('dispatch', action);
    return state;
}

export default tauxJournalierDeviseReducer;