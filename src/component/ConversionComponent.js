import React from "react";
import Api from "../utiles/Api";
import MontantEnDT from "./MontantEnDT";
import * as MathUtils from "../utiles/MathUtils";

class ConversionComponent extends React.Component {

    state = {deviseMontantList: []};
    mapDevise = new Map();


    componentDidMount() {

        Api.get("/taux-devises/today").then(result => {
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
                    'montantEchange': '',
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
        deviseMontant.montantAchat = MathUtils.mathRound(valeur * this.mapDevise.get(deviseMontant.devise).montantAchat);
        deviseMontant.montantVente = MathUtils.mathRound(valeur * this.mapDevise.get(deviseMontant.devise).montantVente);
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
                    <td><input type="number" name="montant" value={deviseMontant.montant} min="0" className="form-control" style={{width:'100px'}}
                               onChange={(event) => this.handleChange(event, index)}/></td>
                    <td>
                        <MontantEnDT montant={deviseMontant.montantAchat}/>
                    </td>
                    <td>
                        <MontantEnDT montant={deviseMontant.montantVente}/>
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
            </div>);
    }

}

export default ConversionComponent;