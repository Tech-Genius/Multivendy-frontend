import React from "react";
import style from './css/ApiLoading.module.css'

function ApiLoading (){
    return (
        
    //  <div className="api_loading_wrapper">
    //     <div className="api_loading_inner">
    //         <div className="api_loader">
    //             <div className="api_loader_inner"></div>
    //         </div>
    //         <div className="api_loader_text">
    //             <h3>Fetching data...</h3>
    //         </div>
    //     </div>
    //  </div>

    <div className={style.spinnerWrapper}>
    <div className={style.spinner} >
        <div className={style.bounce1}></div>
        <div className={style.bounce2}></div>
        <div className={style.bounce3}></div>
        <p>Fetching Data...</p>
    </div>
</div>
    )
}

export default ApiLoading;