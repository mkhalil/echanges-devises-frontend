import React from "react";
import Api from "../utiles/Api";
import MontantEnDinar from "./MontantEnDinar";

class ConversionComponent extends React.Component {

    state = {deviseMontantList: []};
    mapDevise = new Map();


    componentDidMount() {

        Api.get("/taux-echanges-devises/current").then(result => {
            this.setState({deviseMontantList: this.setToDeviseMontantList(result.data)});

        });
    }

    setToDeviseMontantList = (resultData) => {
        this.mapDevise = new Map();
        const deviseMontantList = resultData.map(
            tauxEchange => {
                this.mapDevise.set(tauxEchange.devise.abreviation,
                    {
                        'montantAchat': tauxEchange.montantAchat,
                        'montantVente': tauxEchange.montantVente
                    }
                );

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
        deviseMontant.montantAchat = this.mathRound(valeur * this.mapDevise.get(deviseMontant.devise).montantAchat);
        deviseMontant.montantVente = this.mathRound(valeur * this.mapDevise.get(deviseMontant.devise).montantVente);
        deviseMontantList[index] = deviseMontant;
        this.setState({
            deviseMontantList: deviseMontantList
        });
    };

    mathRound = (x) => Math.round(x * 1000) / 1000;


    render() {


        const tbody = this.state.deviseMontantList.map((deviseMontant, index) => {
            console.log("index = ", index);
            return (
                <tr key={index}>
                    <td>{deviseMontant.devise}</td>
                    <td><input type="number" name="montant" value={deviseMontant.montant} min="0"
                               onChange={(event) => this.handleChange(event, index)}/></td>
                    <td>
                        <MontantEnDinar montant={deviseMontant.montantAchat}/>
                    </td>
                    <td>
                        <MontantEnDinar montant={deviseMontant.montantVente}/>
                    </td>
                </tr>
            );
        });


        return (

            <div className="card bg-light">
                <div className="card-header"><strong>Conversion</strong></div>
                <div className="card-body">

                    <table className="table table-hover">
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
                </div>

    }

}

export default ConversionComponent;