import {NotificationManager} from "react-notifications";
import Api from "../utiles/Api";

export const addTauxJournalierDevise = (tauxJournalierDevise) => {

    return dispatch => {

        Api.post("/taux-echanges-devises", tauxJournalierDevise).then(v => {
            NotificationManager.success('Enregistrement avec succès', 'Taux journalière');
            dispatch(listTauxJournalierDevise);
        }).catch(error => {
            NotificationManager.error(error.response.data.message, 'Error d\'enregistrement', 5000);
        });

    }

}

export const listTauxJournalierDevise = () => {
    return dispatch => {
        Api.get("/taux-echanges-devises").then(result => {
                console.log("result", result.data);
                dispatch({type:'LIST_TAUX_ECHANGES_DEVISE', payload: result.data});
            }
        );
    }

}
