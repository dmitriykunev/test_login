import React from "react";


function NoMatch({location}) {
    return (
        <div>
            <h3>
                No Match For <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default NoMatch;