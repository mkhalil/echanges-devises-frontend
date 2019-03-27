import React from "react";
import Api from "../../utiles/Api";


class EchangeDevise extends React.Component {

    state = {deviseMontantList: []};


    componentDidMount() {

        Api.get("/taux-echanges-devises/current").then(result => {
            this.setState({deviseMontantList: this.setToDeviseMontantList(result.data)});

        });
    }

    setToDeviseMontantList = (resultData) => {
        const deviseMontantList = resultData.map(
            tauxEchange => {
                return {
                    'montant': '',
                    'montantAchat': tauxEchange.montantAchat,
                    'montantVente': tauxEchange.montantVente,
                    'devise': tauxEchange.devise.abreviation
                };
            }
        );

        console.log("deviseMontantList = ", deviseMontantList);
        return deviseMontantList;

    };

    handleChange = (event, index) => {
        let deviseMontantList = this.state.deviseMontantList;
        const deviseMontant = {...deviseMontantList[index]};
        const valeur = event.target.value;
        deviseMontant.montant = valeur;
        deviseMontant.montantAchat = valeur * deviseMontant.montantAchat;
        deviseMontant.montantVente = valeur * deviseMontant.montantVente;
        deviseMontantList[index] = deviseMontant;
        this.setState({
            deviseMontantList: deviseMontantList
        });
    };

    render() {


        const tbody = this.state.deviseMontantList.map((deviseMontant, index) => {
            console.log("index = ", index);
            return (
                <tr key={index}>
                    <td>{deviseMontant.devise}</td>
                    <td><input type="text" name="montant" value={deviseMontant.montant}
                               onChange={(event) => this.handleChange(event, index)}/></td>
                    <td><input type="text" disabled value={deviseMontant.montantAchat}/></td>
                    <td><input type="text" disabled value={deviseMontant.montantVente}/></td>
                </tr>
            );
        });
        return (

            <table>
                <thead>
                <tr>
                    <th>Devise</th>
                    <th>Montant</th>
                    <th>Achat</th>
                    <th>Vente</th>
                </tr>
                </thead>
                <tbody>
                {tbody}
                </tbody>
            </table>
        )
    }

}

export default EchangeDevise;