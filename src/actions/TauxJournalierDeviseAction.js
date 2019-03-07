import {NotificationManager} from "react-notifications";
import Api from "../utiles/Api";

export const LIST_TAUX_JOURNALIER_DEVISE = 'LIST_TAUX_JOURNALIER_DEVISE';
export const SELECTE_TAUX_JOURNALIER_DEVISE = 'SELECTE_TAUX_JOURNALIER_DEVISE';

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
