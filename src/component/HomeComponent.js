import React from "react";
import TauxDeviseToDay from "./taux/TauxDeviseToDay";
import ConversionComponent from "./ConversionComponent";
import MontantEnDT from "./MontantEnDT";
import Api from "../utiles/Api";
import MonnaieListComponent from "./MonnaieListComponent";
import EnumTypeMonnaie from "../utiles/EnumTypeMonnaie";
import InputSelectBox from "./InputSelectBox";
import * as MathUtils from "../utiles/MathUtils";
import * as StringsUtils from "../utiles/StringsUtils";
import CurrencyFormat from "react-currency-format";

class HomeComponent extends React.Component {

    state = {
        selectedDeviseId : '',
        monnaieList : [],
        devisesOptionsListe:[],
        montantEchange : '',
        montantTauxDevise : '',
        montant:'',
        montantTotalSaisie : 0
    };

    mapDevise = new Map();

    mapCoefficientValeur = new Map();

    constructor(props) {
        super(props);
    }

    onChangeDevise = (event) => {
        console.log("Devise = ", event.target.value);
        const deviseId = event.target.value;
        this.setState({selectedDeviseId: deviseId});
        if (deviseId !== '') {
            Api.get("/devises/"+ deviseId + "/monnaie").then(result => {
                console.log("monnaieList = ", result.data);
                this.setState({monnaieList: result.data});
            });
        } else {
            this.setState({monnaieList: []});
        }
        this.setStateMontant(this.state.montant, deviseId);
        this.setState({montantTotalSaisie : 0});
        this.mapCoefficientValeur = new Map();
    }

    componentDidMount() {
        Api.get("/taux-devises/today").then(
            result => {

                const options = result.data.map(tauxDevise =>

                {
                    this.mapDevise.set(tauxDevise.devise.id,{...tauxDevise.devise, taux : tauxDevise.montantAchat});
                    return {text:tauxDevise.devise.abreviation, value:tauxDevise.devise.id};
                });


                this.setState({
                    devisesOptionsListe : [{value: '', text: 'Devise'},...options]
                });
            }
        );

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

    saisieMonnaie = (coefficient, event) => {
        let montantSaisie =  parseInt(event.target.value);

        if (!isNaN(montantSaisie)) {
            this.mapCoefficientValeur.set(coefficient, montantSaisie);
        }
        this.setState({montantTotalSaisie:this.calculeSommeMontantSaisies()});

    }

    calculeSommeMontantSaisies = () => {
        let somme = 0;
        this.mapCoefficientValeur.forEach((value, key) => {
            somme += value * key;
        })
        return somme;
    }

    getDeviseAbreviation = (deviseId) => {
        const devise = this.mapDevise.get(parseInt(deviseId));
        console.log('devise', devise);
        return devise !== undefined ? ' ' + devise.abreviation : '';
    }


    render() {
        return (
            <React.Fragment>

                <div className="row">

                    <div className="col-md-3">
                        <TauxDeviseToDay/>
                    </div>
                    <div className="col-md-9">
                        <ConversionComponent/>
                        <hr/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                    </div>
                    <div className="col-md-9">
                        <div className="card bg-light">
                            <div className="card-header">
                                <nav className="nav nav-pills nav-justified">
                                    <a className="nav-item nav-link active" href="#">Achat</a>
                                    <a className="nav-item nav-link" href="#">Vente</a>
                                </nav>
                            </div>
                            <div className="card-body">


                                <form>
                                    <div className="row">
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
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-12">
                                        <h3>Montant saisie <span className="badge badge-secondary">

                                            <CurrencyFormat value={this.state.montantTotalSaisie} displayType="text" thousandSeparator=" " decimalSeparator="," suffix={this.getDeviseAbreviation(this.state.selectedDeviseId)} />

                                           </span></h3>
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

                                </form>


                                <div className="row">
                                    <div className="col-md-6">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="recherchePersonne">Recherche</label>
                                                    <input type="text" className="form-control" id="recherchePersonne"
                                                           placeholder="Recherche de personne"/>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputEmail4">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail4"
                                                           placeholder="Email"/>
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputPassword4">Password</label>
                                                    <input type="password" className="form-control" id="inputPassword4"
                                                           placeholder="Password"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress">Address</label>
                                                <input type="text" className="form-control" id="inputAddress"
                                                       placeholder="1234 Main St"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress2">Address 2</label>
                                                <input type="text" className="form-control" id="inputAddress2"
                                                       placeholder="Apartment, studio, or floor"/>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputCity">City</label>
                                                    <input type="text" className="form-control" id="inputCity"/>
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputState">State</label>
                                                    <select id="inputState" className="form-control">
                                                        <option>Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputZip">Zip</label>
                                                    <input type="text" className="form-control" id="inputZip"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                        Check me out
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Enregistrer</button>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default HomeComponent;
