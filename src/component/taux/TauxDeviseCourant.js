import * as React from "react";
import Api from "../../utiles/Api";
import moment from "moment";
import {connect} from "react-redux";
import * as actionTaux from "../../actions/TauxJournalierDeviseAction";

class TauxDeviseCourant extends React.Component {




    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.listCurrentTaux();
    }


    render() {
        const currentDate = moment().format('DD/MM/YYYY');
        let bodyTableTaux = this.state.tauxDeviseListe.map(taux => {
            return (
                <tr key={taux.id}>
                    <td>{taux.devise.abreviation}</td>
                    <td>{taux.montantVente}</td>
                    <td>{taux.montantAchat}</td>

                </tr>
            )
        });
        return (
            <div className="card">
                <div className="card-header"><strong>{currentDate}</strong></div>
                <div className="card-body">
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th scope="col">Devise</th>
                            <th scope="col">Vente</th>
                            <th scope="col">Achat</th>
                        </tr>
                        </thead>
                        <tbody>
                        {bodyTableTaux}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {listCurrentTaux : () => dispatch(actionTaux.listCurrentTaux())}
}

export default connect(null, mapDispatchToProps) (TauxDeviseCourant);