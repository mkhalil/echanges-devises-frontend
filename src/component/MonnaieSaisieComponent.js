import React from "react";
import EnumTypeMonnaie from "../utiles/EnumTypeMonnaie";
import CurrencyFormat from "react-currency-format";
import MonnaieListComponent from "./MonnaieListComponent";
import * as StringsUtils from "../utiles/StringsUtils";
import Api from "../utiles/Api";
import {connect} from "react-redux";

class MonnaieSaisieComponent extends React.Component{

    mapCoefficientValeur = new Map();

    state = {
        deviseId : '',
        monnaieList:[],
        montantTotalSaisie:0
    }

    initState = () => {
        this.setState({
            deviseId : '',
            deviseSymbole:'',
            monnaieList:[],
            montantTotalSaisie:0
        });
    }

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state){
        if (state.deviseId !==  props.deviseId ) {
            return {
                deviseId:  props.deviseId
            };
        }
        return null;
    }

    componentDidMount() {
        this._loadMonnaieList(this.props.deviseId);
    }

    _loadMonnaieList = (deviseId) => {
        if (!StringsUtils.isEmpty(deviseId)) {
            Api.get("/devises/"+ deviseId ).then(result => {

                this.setState({monnaieList: result.data.monnaieList, deviseSymbole:result.data.symbole, montantTotalSaisie:0});
            });
        } else {
            this.initState();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.deviseId !== prevProps.deviseId) {
            this._loadMonnaieList(this.props.deviseId);
        }
    }



    calculeSommeMontantSaisies = () => {
        let somme = 0;
        this.mapCoefficientValeur.forEach((value, key) => {
            somme += value * key;
        })
        return somme;
    }

    saisieMonnaie = (coefficient, event) => {
        let montantSaisie =  parseInt(event.target.value);

        if (!isNaN(montantSaisie)) {
            this.mapCoefficientValeur.set(coefficient, montantSaisie);
        }
        this.setState({montantTotalSaisie:this.calculeSommeMontantSaisies()});

    }


    render() {
        return (
            <React.Fragment>

                <div className="row">
                    <div className="col-12">
                        <h3>Montant saisie <span className="badge badge-secondary">

                                            <CurrencyFormat value={this.state.montantTotalSaisie} displayType="text" thousandSeparator=" " decimalSeparator=","
                                                            suffix={this.state.deviseSymbole} />
                                           </span>
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <MonnaieListComponent monnaieList={this.state.monnaieList}
                                              type={EnumTypeMonnaie.BILLET}
                                              handleChange={this.saisieMonnaie}/>
                    </div>
                    <div className="col-md-6">
                        <MonnaieListComponent monnaieList={this.state.monnaieList}
                                              type={EnumTypeMonnaie.PIECE}
                                              handleChange={this.saisieMonnaie}  />
                    </div>
                </div>

            </React.Fragment>

        )

    }

}


const mapStateToProps = (state) => {
    return {deviseId: state.selectedDeviseId}
}

export default connect(mapStateToProps, null) (MonnaieSaisieComponent);