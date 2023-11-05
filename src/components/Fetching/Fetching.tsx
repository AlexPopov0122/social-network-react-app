// @ts-ignore
import preloader from "../../assets/images/preloader2.svg";
import React, {FC} from "react";

const Fetching: FC<any> = (props) => {
    return (
        <div style={{textAlign: "center"}}>
            <div role={'main'}></div>
            <img style={{width: "100px"}} src={preloader} alt="preloader"/>
        </div>
    )
}

export default Fetching;