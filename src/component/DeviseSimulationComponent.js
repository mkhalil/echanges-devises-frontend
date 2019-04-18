import React from "react";
import {connect} from "react-redux";
import InputSelectBox from "./InputSelectBox";
import * as StringsUtils from "../utiles/StringsUtils";
import * as MathUtils from "../utiles/MathUtils";
import * as MapperUtil from "../utiles/MapperUtil";
class DeviseSimulationComponent extends React.Component{



    state = {
        selectedDeviseId : '',
        tauxDevise:'',
        montantDT:'',
    };

    componentWillReceiveProps(newProps) {
        console.log("Map Devise" , MapperUtil.mapToDeviseTauxMapper(newProps));
    }


    setStateMontant = (montant, deviseId) => {

        if (StringsUtils.isEmpty(deviseId)) {
            this.setState({montantTauxDevise : ''});
            this.setState({montantEchange : ''});

        }else {
            this.setState({montantTauxDevise : this.mapDevise.get(parseInt(deviseId)).taux});
            if (StringsUtils.isEmpty(montant)) {
                this.setState({montantEchange: ''});
            }else{
                this.setState({montantEchange:MathUtils.mathRound(parseInt(deviseId) * montant)});
            }
        }

    }

    saisieMontant = (event) => {
        const montant = event.target.value;
        this.setState({montant:event.target.value});
        this.setStateMontant(montant, this.state.selectedDeviseId);
    }

    render() {

        <table className="table table-hover">
            <thead>
            <tr>
                <th>
                    Achat de devise
                </th>
                <th>
                    Montant
                </th>
                <th>
                    Cours
                </th>
                <th>
                    Montant en DT
                </th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>

                    <InputSelectBox options={this.state.devisesOptionsListe} value={this.state.selectedDeviseId}
                                    onChange={(event) => this.onChangeDevise(event)}/>
                </td>
                <td>
                    <input type="number" className="form-control" id="montant"  onChange={(event) => this.saisieMontant(event)}/>
                </td>
                <td>
                    <MontantEnDT montant={this.state.montantTauxDevise} />
                </td>
                <td>
                    <MontantEnDT montant={this.state.montantEchange}/>
                </td>
            </tr>

            </tbody>


        </table>

    }

}

const mapStateToProps = (state) => {
    return {listTauxDeviseToday: state.listTauxDeviseToday}
}

export default connect(mapStateToProps, null) (DeviseSimulationComponent);