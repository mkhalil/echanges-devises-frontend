import React from "react";

import CurrencyFormat from 'react-currency-format';


const MontantEnDinar = (props) => {
    const montant = props.montant;
    return (

        <CurrencyFormat value={montant} displayType="text" thousandSeparator=" " decimalSeparator="," suffix=" DT" />

    );

}

export default MontantEnDinar;