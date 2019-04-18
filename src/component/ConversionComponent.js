import React from "react";
import {connect} from "react-redux";
import MontantEnDT from "./MontantEnDT";
import * as MathUtils from "../utiles/MathUtils";

class ConversionComponent extends React.Component {


    state = {deviseMontantList: []};
    mapDevise = new Map();

    setMapDevise = (listTauxDeviseToday) => {
        const map = new Map();
        listTauxDeviseToday.forEach(
            tauxEchange => {
                map.set(tauxEchange.devise.abreviation, {
                    'montantAchat': tauxEchange.montantAchat,
                    'montantVente': tauxEchange.montantVente
                });
            }
        );
        return map;
    }

    setStateDeviseMontantList = (listTauxDeviseToday) => {
        const tauxList = listTauxDeviseToday.map(tauxDevise => {
            return {
                'montant': '',
                'montantAchat': tauxDevise.montantAchat,
                'montantVente': tauxDevise.montantVente,
                'devise': tauxDevise.devise.abreviation
            }
        });
        this.setState({deviseMontantList :tauxList});
    }


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

    componentWillReceiveProps(newProps) {
        this.setStateDeviseMontantList(newProps.listTauxDeviseToday);
        this.mapDevise = this.setMapDevise(newProps.listTauxDeviseToday);
        console.log('this.mapDevise = ', this.mapDevise);
    }

    render() {

        const tbody = this.state.deviseMontantList.map((deviseMontant, index) => {
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


const mapStateToProps = (state) => {
    return {listTauxDeviseToday: state.listTauxDeviseToday}
}
export default connect(mapStateToProps, null)(ConversionComponent);