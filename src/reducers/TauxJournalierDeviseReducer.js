import * as tauxJournalierDeviseAction from '../actions/Action';

const initState = {
    listTauxJournalierDevise: [],
    listTauxDeviseToday: [],
    selectedDeviseId : '',
    monnaiesSaisie: new Map(),
    montantTotalSaisie:''
}

const tauxJournalierDeviseReducer = (state = initState, action) => {

    if (action.type === tauxJournalierDeviseAction.LIST_TAUX_DEVISE) {
        return {...state, listTauxJournalierDevise: action.payload};
    }

    if (action.type === tauxJournalierDeviseAction.SELECTED_DEVISE_ID) {
        return {...state, selectedDeviseId: action.payload};
    }


    if (action.type === tauxJournalierDeviseAction.LIST_TAUX_DEVISE_TODAY) {
        return {...state, listTauxDeviseToday: action.payload};
    }
    return state;
}

export default tauxJournalierDeviseReducer;