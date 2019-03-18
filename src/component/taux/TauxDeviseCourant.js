import * as React from "react";
import moment from "moment";

const TauxDeviseCourant = (props) => {

    const currentDate = moment().format('DD/MM/YYYY');
    let bodyTableTaux = props.tauxDeviseListe.map(taux => {
        return (
            <tr key={taux.id}>
                <td>{taux.devise.abreviation}</td>
                <td>{taux.montantVente}</td>
                <td>{taux.montantAchat}</td>

            </tr>
        )
    });
    return (
        <div className="card">
            <div className="card-header"><strong>{currentDate}</strong></div>
            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">Devise</th>
                        <th scope="col">Vente</th>
                        <th scope="col">Achat</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bodyTableTaux}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TauxDeviseCourant;