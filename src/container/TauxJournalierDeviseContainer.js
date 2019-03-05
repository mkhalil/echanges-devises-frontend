import React from "react";
import TauxJournalierDeviseFormComponent from "../component/TauxJournalierDeviseFormComponent";
import TauxJournalierDeviseTableComponent from "../component/TauxJournalierDeviseTableComponent";
import Api from "../utiles/Api";

class TauxJournalierDeviseContainer extends React.Component{


    state = {tauxJournalierDeviseListe: []};

    componentDidMount() {
        this.refreshTable();
    }

    refreshTable = () => {
        Api.get("/taux-echanges-devises").then(result => {
                this.setState({tauxJournalierDeviseListe: result.data});
            }
        );
    }

    render() {
        return (
          <div>
              <TauxJournalierDeviseFormComponent refreshTable={this.refreshTable} />
              <TauxJournalierDeviseTableComponent tauxJournalierDeviseListe={this.state.tauxJournalierDeviseListe}/>
          </div>
        );
    }
}

export default TauxJournalierDeviseContainer;