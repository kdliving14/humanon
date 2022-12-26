import React from "react";

function Bars (props) {
// ======================================= 
    //starter variables & states
    const {hp} = props;

    let color = "";

    if (hp/10 > 5){
        color = "green"
    }
    if (hp/10 <= 5){
        color = "red"
    }
// =======================================
    // styling
    const containerStyles={
        height: 20,
        width: '90%',
        backgroundColor: "#e0e0de",
        margin: 5,
        padding: 5
    }

    const fillerStyles = {
        height: "100%",
        width: `${hp}%`,
        backgroundColor: color,
        textAlign: "right"
    }

    const labelStyles = {
        padding: 5,
        color: "white",
        fontWeight: "bold"
    }

// =======================================
    // app start
    return(
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span 
                style={labelStyles}
                // acessibility settings
                    role="progressbar"
                    aria-valuenow={hp}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >{`${hp}%`}</span>
            </div>
        </div>
    )
}

export default Bars;