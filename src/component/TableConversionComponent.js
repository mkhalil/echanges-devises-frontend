import React from "react";
import {connect} from "react-redux";
import MontantEnDT from "./MontantEnDT";
import * as MathUtils from "../utiles/MathUtils";
import * as MapperUtil from "../utiles/MapperUtil";

class TableConversionComponent extends React.Component {


    state = {deviseMontantList: []};
    mapDevise = new Map();


    handleChange = (event, index) => {
        let deviseMontantList = this.state.deviseMontantList;
        const deviseMontant = {...deviseMontantList[index]};
        const valeur = event.target.value;
        deviseMontant.montant = valeur;
        deviseMontant.montantAchat = MathUtils.mathRound(valeur * this.mapDevise.get(deviseMontant.deviseId).montantAchat);
        deviseMontant.montantVente = MathUtils.mathRound(valeur * this.mapDevise.get(deviseMontant.deviseId).montantVente);
        deviseMontantList[index] = deviseMontant;
        this.setState({
            deviseMontantList: deviseMontantList
        });
    };

    static getDerivedStateFromProps(props, state){
        if (state.deviseMontantList.length !==  props.listTauxDeviseToday.length ) {
            return {
                deviseMontantList: MapperUtil.mapToDeviseTauxList(props.listTauxDeviseToday)
            };
        }
        return null;
    }


    render() {
        this.mapDevise = MapperUtil.mapToDeviseTauxMapper(this.props.listTauxDeviseToday);
        const tbody = this.state.deviseMontantList.map((deviseMontant, index) => {
            return (
                <tr key={index}>
                    <td>{deviseMontant.deviseAbreviation}</td>
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
export default connect(mapStateToProps, null)(TableConversionComponent);