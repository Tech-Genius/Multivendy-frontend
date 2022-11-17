import React from "react";


const Tab = ({data}) => {
    return (
        <div className="tab">
            <h3>Data</h3>
            {data.map((item) => (
                <h3></h3>
            ))}
        </div>
    )
}

export default Tab;