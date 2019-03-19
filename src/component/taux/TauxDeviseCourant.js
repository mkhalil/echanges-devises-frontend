import * as React from "react";
import moment from "moment";
import Api from "../../utiles/Api";

class TauxDeviseCourant extends React.Component {


    constructor(props) {
        super(props);
        this.state = {tauxDeviseList : []};
    }

    componentDidMount() {
        Api.get("/taux-echanges-devises/current").then(result => {
            this.setState({tauxDeviseList: result.data});
        });
    }


    render() {
        const currentDate = moment().format('DD/MM/YYYY');
        let bodyTableTaux = this.state.tauxDeviseList.map(taux => {
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
      );
    }
}

export default TauxDeviseCourant;