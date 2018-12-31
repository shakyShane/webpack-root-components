import React from "react";
import htm from "htm";
const html = htm.bind(React.createElement);
import Photoswipe from "photoswipe";

export default function() {
    console.log(Photoswipe);
    return html`<h1>CMS Root component</h1>`
};
