import {NotificationManager} from "react-notifications";
import Api from "../utiles/Api";

export const LIST_TAUX_JOURNALIER_DEVISE = 'LIST_TAUX_JOURNALIER_DEVISE';
export const ADD_TAUX_JOURNALIER_DEVISE = 'ADD_TAUX_JOURNALIER_DEVISE';
export const DELETE_TAUX_JOURNALIER_DEVISE = 'DELETE_TAUX_JOURNALIER_DEVISE';

export const addTauxJournalierDevise = (tauxJournalierDevise) => {

    return dispatch => {

        Api.post("/taux-echanges-devises", tauxJournalierDevise).then(v => {
            dispatch(listTauxJournalierDevise());
            NotificationManager.success("Enregistrement avec succés", "Taux journalier de devise");
        }).catch(error => {
            NotificationManager.error("Erreur d'enregistrement : " + error.result.data, "Taux journalier de devise");
        });

    }

}

export const listTauxJournalierDevise = () => {
    console.log("listTauxJournalierDevise listTauxJournalierDevise");

    return dispatch => {

        Api.get("/taux-echanges-devises").then(result => {
                console.log("result", result.data);
                dispatch({type: LIST_TAUX_JOURNALIER_DEVISE, payload: result.data});
            }
        ).catch(

            error => {
                console.log(error)
                NotificationManager.error("Erreur d'enregistrement : " + error.result.data, "Taux journalier de devise");

            }
        );
    }

}
