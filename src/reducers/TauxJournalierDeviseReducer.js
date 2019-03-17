import * as tauxJournalierDeviseAction from '../actions/TauxJournalierDeviseAction';
import {LIST_CURRENT_TAUX} from "../actions/TauxJournalierDeviseAction";

const initState = {
    listTauxJournalierDevise : [],
    selectedTauxId: ''
}

const tauxJournalierDeviseReducer = (state = initState, action) => {

    if (action.type === tauxJournalierDeviseAction.LIST_TAUX_JOURNALIER_DEVISE) {
        return {...state, listTauxJournalierDevise:action.payload};
    }


    if (action.type === tauxJournalierDeviseAction.SELECTE_TAUX_JOURNALIER_DEVISE) {
        return {...state, selectedTauxId:action.payload};
    }

    if (action.type === tauxJournalierDeviseAction.LIST_CURRENT_TAUX) {
        return {...state, listCurrentTaux : action.payload};
    }
    console.log('dispatch', action);
    return state;
}

export default tauxJournalierDeviseReducer;