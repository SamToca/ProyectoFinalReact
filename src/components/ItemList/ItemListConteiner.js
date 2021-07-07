import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemListConteiner = (props) => {
    return <h2 className="display-4 text-center">{props.greeting}</h2>;
};

export default ItemListConteiner;