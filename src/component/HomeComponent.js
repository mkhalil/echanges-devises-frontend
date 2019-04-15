import React from "react";
import TauxDeviseCourant from "./taux/TauxDeviseCourant";
import ConversionComponent from "./ConversionComponent";
import MontantEnDinar from "./MontantEnDinar";
import InputSelectBoxDevises from "./InputSelectBoxDevises";
import Api from "../utiles/Api";
import MonnaieListComponent from "./MonnaieListComponent";
import EnumTypeMonnaie from "../utiles/EnumTypeMonnaie";

class HomeComponent extends React.Component {

    state = {selectedDevise : '', monnaieList : []};

    constructor(props) {
        super(props);
    }

    onChangeDevise = (event) => {
        console.log("Devise = ", event.target.value);
        const deviseId = event.target.value;
        this.setState({'selectedDevise': deviseId});
        Api.get("/devises/"+ deviseId + "/monnaie").then(result => {
            console.log("monnaieList = ", result.data);
            this.setState({monnaieList: result.data});
        });
    }


    render() {
        return (
            <React.Fragment>

                <div className="row">

                    <div className="col-md-3">
                        <TauxDeviseCourant/>
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
                                                    <InputSelectBoxDevises value={this.state.selectedDevise} onChange={(event) => this.onChangeDevise(event)}/>
                                                </td>
                                                <td>
                                                    <input type="number" className="form-control" id="montant"/>
                                                </td>
                                                <td>
                                                    <MontantEnDinar montant={2.5}/>
                                                </td>
                                                <td>
                                                    <MontantEnDinar montant={250}/>
                                                </td>
                                            </tr>

                                            </tbody>


                                        </table>
                                    </div>
                                    <hr/>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <MonnaieListComponent monnaieList={this.state.monnaieList}
                                                                  type={EnumTypeMonnaie.BILLET} />
                                        </div>
                                        <div className="col-md-6">
                                            <MonnaieListComponent monnaieList={this.state.monnaieList}
                                                                  type={EnumTypeMonnaie.PIECE} />
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
