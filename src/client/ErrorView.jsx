import * as PropTypes from "prop-types";
import * as React from "react";

export function ErrorView(props) {
    return <div><h1>Ops, some error occurred</h1>
        <div>{props.error.toString()}</div>
    </div>;
}

ErrorView.propTypes = {error: PropTypes.any};