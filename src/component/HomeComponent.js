import React from "react";
import TauxDeviseToDayComponent from "./taux/TauxDeviseToDayComponent";
import TableConversionComponent from "./TableConversionComponent";
import DeviseSimulationComponent from "./DeviseSimulationComponent";
import * as actionTaux from "../actions/Action";
import {connect} from "react-redux";
import MonnaieSaisieComponent from "./MonnaieSaisieComponent";

class HomeComponent extends React.Component {


    state = {deviseId: ''};


    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchListTauxDevise();
    }


    render() {
        return (
            <React.Fragment>

                <div className="row">

                    <div className="col-md-3">
                        <TauxDeviseToDayComponent/>
                    </div>
                    <div className="col-md-9">
                        <TableConversionComponent/>
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
                                        <DeviseSimulationComponent selectedDeviseHandler={(deviseId) => this.selectedDeviseHandler(deviseId)}/>
                                    </div>
                                    <hr/>

                                        <MonnaieSaisieComponent deviseId={this.state.deviseId}/>
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

    selectedDeviseHandler = (deviseId) => {
        this.setState({deviseId:deviseId});
    }
}


const mapStateToProps = (state) => {
    return {listTauxDeviseToday: state.listTauxDeviseToday}
}


const mapDispatchToProps = dispatch => {
    return {
        fetchListTauxDevise: () => dispatch(actionTaux.listTauxDeviseToday()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
