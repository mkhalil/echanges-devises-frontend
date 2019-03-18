import React from "react";
import InputSelectBoxDevises from "./InputSelectBoxDevises";

class ConversionComponent extends React.Component {

    render() {
        return (
            <React.Fragment>

                <div className="card bg-light">
                    <div className="card-header"><strong>Conversion</strong></div>
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="deviseId">Devise</label>
                                    <InputSelectBoxDevises/>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="montant">Montant</label>
                                    <input type="number" className="form-control" id="montant" placeholder="Montant"/>
                                </div>

                            </div>
                            <a href="#" className="btn btn-primary">Convertir</a>

                        </form>

                        <footer className="card-text">cours d'echange 1Euro = 3Dinar (Dernière mise à jour :
                            2019-02-14 16:19)
                        </footer>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default  ConversionComponent;