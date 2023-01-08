import React from "react";
import './css/ApiLoading.css'

function ApiLoading (){
    return (
        
     <div className="api_loading_wrapper">
        <div className="api_loading_inner">
            <div className="api_loader">
                <div className="api_loader_inner"></div>
            </div>
            <div className="api_loader_text">
                <h3>Fetching data...</h3>
            </div>
        </div>
     </div>
    )
}

export default ApiLoading;