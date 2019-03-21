import {NotificationManager} from "react-notifications";
import Api from "../utiles/Api";

export const LIST_TAUX_JOURNALIER_DEVISE = 'LIST_TAUX_JOURNALIER_DEVISE';
export const LIST_CURRENT_TAUX = 'LIST_CURRENT_TAUX';


export const deleteTauxJournalierDevise = (id) => {
    return dispatch => {
        Api.delete("/taux-echanges-devises/" + id).then(result => {
            dispatch(listTauxJournalierDevise());
        }).catch(error => {
            console.log("Error", error);
        });
    }
}


export const listTauxJournalierDevise = () => {
    return dispatch => {
        Api.get("/taux-echanges-devises").then(result => {
                dispatch({type: LIST_TAUX_JOURNALIER_DEVISE, payload: result.data});
            }
        ).catch(
            error => {
                console.error(error);
                NotificationManager.error("Erreur d'enregistrement : ", "Taux journalier de devise");

            }
        );
    }

}

export const listCurrentTaux = () => {
    return dispatch => {

        Api.get("/taux-echanges-devises/current").then(result => {
            console.log("result data", result.data);
            dispatch({type: LIST_CURRENT_TAUX, payload: result.data});
        });
    }
}