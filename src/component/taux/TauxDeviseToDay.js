import * as React from "react";
import moment from "moment";
import Api from "../../utiles/Api";
import MontantEnDT from "../MontantEnDT";

class TauxDeviseToDay extends React.Component {


    constructor(props) {
        super(props);
        this.state = {tauxDeviseList : []};
    }

    componentDidMount() {
        Api.get("/taux-devises/today").then(result => {
            this.setState({tauxDeviseList: result.data});
        });
    }


    render() {
        const currentDate = moment().format('DD/MM/YYYY');
        let bodyTableTaux = this.state.tauxDeviseList.map(taux => {
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

export default TauxDeviseToDay;