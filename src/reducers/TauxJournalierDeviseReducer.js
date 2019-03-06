import * as tauxJournalierDeviseAction from '../actions/TauxJournalierDeviseAction';


const tauxJournalierDeviseReducer = (state = [], action) => {

    if (action.type === tauxJournalierDeviseAction.LIST_TAUX_JOURNALIER_DEVISE) {
        return {...state, listTauxJournalierDevise:action.payload};
    }

    return state;
}

export default tauxJournalierDeviseReducer;