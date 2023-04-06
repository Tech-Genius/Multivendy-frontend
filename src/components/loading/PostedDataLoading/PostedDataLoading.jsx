import React from "react";
import style from './assets/css/PostedDataLoading.module.css'

function PostedDataLoading (){
    return (
        

    <div className={style.spinnerWrapper}>
    <div className={style.spinner} >
        <div className={style.bounce1}></div>
        <div className={style.bounce2}></div>
        <div className={style.bounce3}></div>
        <p>Sending Data...</p>
    </div>
</div>
    )
}

export default PostedDataLoading;