import {NotificationManager} from "react-notifications";
import Api from "../utiles/Api";

export const addTauxJournalierDevise = (tauxJournalierDevise) => {

    return dispatch => {

        console.log("AUUUUUUUUUUUUH MPPPPP");
        Api.post("/taux-echanges-devises", tauxJournalierDevise).then(v => {
            dispatch(listTauxJournalierDevise);
            NotificationManager.success("jjjj", "AAAA");
        }).catch(error => {
        });

    }

}

export const listTauxJournalierDevise = () => {
    console.log("listTauxJournalierDevise listTauxJournalierDevise");

    return dispatch => {

        Api.get("/taux-echanges-devises").then(result => {
                console.log("result", result.data);
                dispatch({type:'LIST_TAUX_ECHANGES_DEVISE', payload: result.data});
            }
        );
    }

}
