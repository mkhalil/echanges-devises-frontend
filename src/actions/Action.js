import {NotificationManager} from "react-notifications";
import Api from "../utiles/Api";

export const LIST_TAUX_DEVISE = 'LIST_TAUX_DEVISE';
export const LIST_TAUX_DEVISE_TODAY = 'LIST_TAUX_DEVISE_TODAY';

export const deleteTauxDevise = (id) => {
    return dispatch => {
        Api.delete("/taux-devises/" + id).then(result => {
            dispatch(listTauxDevise());
        }).catch(error => {
            console.log("Error", error);
        });
    }
}


export const listTauxDevise = () => {
    return dispatch => {
        Api.get("/taux-devises").then(result => {
                dispatch({type: LIST_TAUX_DEVISE, payload: result.data});
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

        Api.get("/taux-devises/today").then(result => {
            console.log("result data", result.data);
            dispatch({type: LIST_TAUX_DEVISE_TODAY, payload: result.data});
        });
    }
}