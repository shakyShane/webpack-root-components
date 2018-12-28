import React from "react";
import htm from "htm";
const html = htm.bind(React.createElement);

export default function() {
    return html`<h1>Product Root Component</h1>`
};
