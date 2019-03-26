import React from "react";
import TauxDeviseCourant from "./taux/TauxDeviseCourant";
import ConversionComponent from "./ConversionComponent";

class HomeComponent extends React.Component {


    constructor(props) {
        super(props);
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
                            <div className="card-header"><strong>Operation Vente</strong></div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="recherchePersonne">Recherche</label>
                                                    <input type="text" className="form-control" id="recherchePersonne"
                                                           placeholder="Recherche de personne" />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputEmail4">Email</label>
                                                    <input type="email" className="form-control" id="inputEmail4"
                                                           placeholder="Email" />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputPassword4">Password</label>
                                                    <input type="password" className="form-control" id="inputPassword4"
                                                           placeholder="Password" />
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
                                                        <option selected>Choose...</option>
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
                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                        <label className="form-check-label" htmlFor="gridCheck">
                                                            Check me out
                                                        </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">Enregistrer</button>
                                        </form>

                                    </div>
                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h3 className="text-center">300 Euros</h3>
                                                <form>
                                                    <div className="form-group row">
                                                        <label htmlFor="100Euros"
                                                               className="col-sm-6 col-form-label">100 Euros</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="100Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="50Euros"
                                                               className="col-sm-6 col-form-label">50 Euros</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="50Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="20Euros"
                                                               className="col-sm-6 col-form-label">20 Euros</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="20Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="10Euros"
                                                               className="col-sm-6 col-form-label">10 Euros</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="10Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="5Euros"
                                                               className="col-sm-6 col-form-label">5 Euros</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="5Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="2Euros"
                                                               className="col-sm-6 col-form-label">2 Euros</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="2Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="1Euros"
                                                               className="col-sm-6 col-form-label">1 Euros</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="1Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="0.5Euros"
                                                               className="col-sm-6 col-form-label">50 cent</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="0.5Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="0.2Euros"
                                                               className="col-sm-6 col-form-label">20 cent</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="0.2Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="0.1Euros"
                                                               className="col-sm-6 col-form-label">10 cent</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="0.1Euros" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-sm-6">
                                                <h3 className="text-center">500 Dinars</h3>
                                                <form>
                                                    <div className="form-group row">
                                                        <label htmlFor="100Euros"
                                                               className="col-sm-6 col-form-label">100 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="100Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="50Euros"
                                                               className="col-sm-6 col-form-label">50 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="50Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="20Euros"
                                                               className="col-sm-6 col-form-label">20 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="20Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="10Euros"
                                                               className="col-sm-6 col-form-label">10 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="10Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="5Euros"
                                                               className="col-sm-6 col-form-label">5 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="5Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="2Euros"
                                                               className="col-sm-6 col-form-label">2 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="2Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="1Euros"
                                                               className="col-sm-6 col-form-label">1 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="1Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="0.5Euros"
                                                               className="col-sm-6 col-form-label">0.5 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="0.5Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="0.2Euros"
                                                               className="col-sm-6 col-form-label">0.2 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="0.2Euros" />
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label htmlFor="0.1Euros"
                                                               className="col-sm-6 col-form-label">0.1 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="0.1Euros" />
                                                        </div>
                                                    </div>

                                                    <div className="form-group row">
                                                        <label htmlFor="0.1Euros"
                                                               className="col-sm-6 col-form-label">0.05 Dinars</label>
                                                        <div className="col-sm-6">
                                                            <input type="text" className="form-control" id="0.1Euros" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
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
