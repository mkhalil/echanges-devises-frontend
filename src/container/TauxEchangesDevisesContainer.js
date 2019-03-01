
import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


class TauxEchangesDevisesContainer extends React.Component {


    state = {currentDate: new Date()};

    constructor(props) {
        super(props);
    }

    handleChange = (date) => {
        console.log(date);
        this.setState({
            currentDate: date
        });
    }

    render() {

        return (
            <form>
                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label htmlFor="dateEchange">Date d'échange</label>
                        <DatePicker selected={this.state.currentDate} dateFormat="dd/MM/YYYY" className="form-control" id="dateEchange" onChange={(date) => this.handleChange(date)}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="devise">Devise</label>
                        <select className="custom-select" id="devise">
                            <option defaultValue>Devise</option>
                            <option value="1">Euro</option>
                            <option value="2">US-dollar</option>
                        </select>
                    </div>

                    <div className="form-group col-md-2">
                        <label htmlFor="achatDevise">Achat</label>
                        <input type="number" className="form-control" id="achatDevise" placeholder="Achat" step="0.01" min="0"/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="venteDevise">Vente</label>
                        <input type="number" className="form-control" id="venteDevise" placeholder="Vente" step="0.01" min="0"/>
                    </div>
                    <div className="form-group col-md-4">
                        <button type="submit" id="enregistrer" className="btn btn-primary position-bottom">Enregistrer
                        </button>
                    </div>
                </div>
            </form>
        );

    }

}

export default TauxEchangesDevisesContainer;