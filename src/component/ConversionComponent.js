import React from "react";
import InputSelectBox from "./InputSelectBox";

class ConversionComponent extends React.Component {

    state = {
        tauxDeviseListe : []
    }

    constructor(props) {
        super(props);
    }

    conversionHandler = (tauxDeviseListe) => {
        this.setState({
            tauxDeviseListe : tauxDeviseListe
        });
    }

    render() {

        const tauxDeviseListe = this.state.tauxDeviseListe;

        const devisesList =[{text : 'Devise', value : ''},...(tauxDeviseListe.map(taux => {return {text : taux.devise.abreviation, value : taux.devise.id}}))];

        return (
            <React.Fragment>

                <div className="card bg-light">
                    <div className="card-header"><strong>Conversion</strong></div>
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col">
                                    <label htmlFor="deviseId">Devise</label>
                                    <InputSelectBox
                                        onChange={event => {console.log(event.target.value)}}
                                        name="deviseId"
                                        options={devisesList}
                                    />
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="montant">Montant</label>
                                    <input type="number" className="form-control" id="montant" placeholder="Montant"/>
                                </div>

                                <div className="form-group col">
                                    <label htmlFor="montantAchat">Montant Achat</label>
                                    <input type="number" className="form-control" id="montantAchat" placeholder="Montant"/>
                                </div>
                                <div className="form-group col">
                                    <label htmlFor="montantVente">Montant Vente</label>
                                    <input type="number" className="form-control" id="montantVente" placeholder="Montant"/>
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

export default ConversionComponent;