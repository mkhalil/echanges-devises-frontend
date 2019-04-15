import React from "react";
import EnumTypeMonnaie from "../utiles/EnumTypeMonnaie";


const MonnaieListComponent = (props) => {
    const {monnaieList, type} = props;
    const label = type === EnumTypeMonnaie.PIECE ? 'Pièces' : 'Billets';
    const bodyMonnaie = monnaieList.filter(monnaie => monnaie.type === type).map(monnaie => {
        const {valeur} = monnaie;
        return (<tr key={valeur}>
            <td>{valeur}</td>
            <td><input type="number" min={0} className="form-control" style={{width: '100px'}}/> </td>
        </tr>);
    });
    return (
        <table className="table table-bordered table-hover">
            <thead>
            <tr>
            <th> Billets</th>
            <th>{label}</th>
            </tr>
            </thead>
            <tbody>
            {bodyMonnaie}
            </tbody>

        </table>

    );
}

export default MonnaieListComponent;