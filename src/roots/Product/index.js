import React from "react";
import htm from "htm";
const html = htm.bind(React.createElement);
import Photoswipe from "photoswipe";
import classes from "./product.css";

export default function() {
    console.log(Photoswipe);
    return html`<h1 className=${classes.root}>Product Root Component</h1>`
};
