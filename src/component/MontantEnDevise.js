import React from "react";
import {CurrencyFormat} from "react-currency-format";


const MontantEnDevise = (props) => {
    const  montant = props.montant;
    const devise = props.devise;

    debugger;
    return (

        <CurrencyFormat value={montant} displayType="text" thousandSeparator=" " decimalSeparator="," suffix={devise} />

    );
}

export default MontantEnDevise;