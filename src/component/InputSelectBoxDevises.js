import React from "react";
import Api from "../utiles/Api";
import InputSelectBox from "./InputSelectBox";

class InputSelectBoxDevises extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            devisesListe : []
        };
    }

    componentDidMount() {
        Api.get("/devises").then(result => {
                console.log("Devises = ", result.data);
                let options = result.data.map(x => {
                    return {value: x.id, text: x.abreviation};
                });
                console.log('options = ', options);
                this.setState({
                    'devisesListe': [{value: '', text: 'Devise'}, ...options]
                });
            }
        ).catch(
            error => {
                console.error("Erreur d'appel WS devises", error);
            }
        );
    }


    render() {
        return (
            <InputSelectBox
                name="deviseId"
                onChange={this.props.onChange}
                onBlur={this.props.onBlur}
                value={this.props.value}
                error={this.props.error}
                touched={this.props.touched}
                options={this.state.devisesListe}
            />
        );
    }

}

export default InputSelectBoxDevises;