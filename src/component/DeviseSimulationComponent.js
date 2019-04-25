import React from "react";
import {connect} from "react-redux";
import InputSelectBox from "./InputSelectBox";
import * as StringsUtils from "../utiles/StringsUtils";
import * as MathUtils from "../utiles/MathUtils";
import * as MapperUtil from "../utiles/MapperUtil";
import MontantEnDT from "./MontantEnDT";
import * as actions from '../actions/Action';
class DeviseSimulationComponent extends React.Component{



    state = {
        selectedDeviseId : '',
        tauxDevise:'',
        montantDT:'',
    };

    mapDeviseTaux = new Map();

    constructor(props) {
        super(props);
    }

    onChangeDevise = (event) => {
        const deviseId = event.target.value;
        this.setState({selectedDeviseId:deviseId});
        this.setStateMontant(this.state.montant, deviseId);
        this.setState({montantTotalSaisie : 0});
        console.log(deviseId);
        this.props.selectDeviseIdHandler(deviseId);
    }


    setStateMontant = (montant, deviseId) => {
        const deviseTaux = this.mapDeviseTaux.get(parseInt(deviseId));
        if (StringsUtils.isEmpty(deviseId)) {
            this.setState({tauxDevise : ''});
            this.setState({montantDT : ''});

        }else {
            this.setState({tauxDevise : deviseTaux.montantAchat});
            if (StringsUtils.isEmpty(montant)) {
                this.setState({montantDT: ''});
            }else{
                this.setState({montantDT:MathUtils.mathRound(montant * deviseTaux.montantAchat)});
            }
        }
    }

    saisieMontant = (event) => {
        const montant = event.target.value;
        this.setState({montant:event.target.value});
        this.setStateMontant(montant, this.state.selectedDeviseId);
    }

    render() {
        this.mapDeviseTaux = MapperUtil.mapToDeviseTauxMapper(this.props.listTauxDeviseToday);

        return (<table className="table table-hover">
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

                    <InputSelectBox options={MapperUtil.mapListTauxDeviseToOptions(this.props.listTauxDeviseToday)} value={this.state.selectedDeviseId}
                                    onChange={(event) => this.onChangeDevise(event)}/>
                </td>
                <td>
                    <input type="number" className="form-control" id="montant"  onChange={(event) => this.saisieMontant(event)}/>
                </td>
                <td>
                    <MontantEnDT montant={this.state.tauxDevise} />
                </td>
                <td>
                    <MontantEnDT montant={this.state.montantDT}/>
                </td>
            </tr>

            </tbody>


        </table>);

    }

}

const mapStateToProps = (state) => {
    return {listTauxDeviseToday: state.listTauxDeviseToday}
}

const mapDispatchToProps = dispatch => {
    return {
        selectDeviseIdHandler: (deviseId) => dispatch({type:actions.SELECTED_DEVISE_ID, payload:deviseId}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (DeviseSimulationComponent);