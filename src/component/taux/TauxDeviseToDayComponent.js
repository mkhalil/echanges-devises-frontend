import * as React from "react";
import moment from "moment";
import {connect} from "react-redux";
import MontantEnDT from "../MontantEnDT";

class TauxDeviseToDayComponent extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        const currentDate = moment().format('DD/MM/YYYY');
        let bodyTableTaux = this.props.listTauxDeviseToday.map(taux => {
            return (
                <tr key={taux.id}>
                    <td>{taux.devise.abreviation}</td>
                    <td>
                        <MontantEnDT montant={taux.montantAchat}/>

                    </td>
                    <td>
                        <MontantEnDT montant={taux.montantVente}/>


                    </td>


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
                          <th scope="col">Achat</th>
                          <th scope="col">Vente</th>
                      </tr>
                      </thead>
                      <tbody>
                      {bodyTableTaux}
                      </tbody>
                  </table>
              </div>
          </div>
      );
    }
}


const mapStateToProps = (state) => {
    return {listTauxDeviseToday: state.listTauxDeviseToday}
}


export default connect(mapStateToProps, null)( TauxDeviseToDayComponent);