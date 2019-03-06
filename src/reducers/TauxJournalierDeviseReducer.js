import * as tauxJournalierDeviseAction from '../actions/TauxJournalierDeviseAction';

const initState = {
    listTauxJournalierDevise : [],
    selectedTauxId: ''
}

const tauxJournalierDeviseReducer = (state = initState, action) => {

    if (action.type === tauxJournalierDeviseAction.LIST_TAUX_JOURNALIER_DEVISE) {
        return {...state, listTauxJournalierDevise:action.payload};
    }



    if (action.type === 'SHOW_MODAL') {
        return {...state, showConfirmModel:true};
    }
    if (action.type === 'HIDE_MODAL') {
        return {...state, showConfirmModel:false};
    }
    if (action.type === tauxJournalierDeviseAction.SELECTE_TAUX_JOURNALIER_DEVISE) {
        return {...state, selectedTauxId:action.payload};
    }
    console.log('dispatch', action);
    return state;
}

export default tauxJournalierDeviseReducer;