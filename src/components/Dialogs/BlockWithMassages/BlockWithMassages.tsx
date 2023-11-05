import styles from "./BlockWithMassages.module.css";
import Massages from "./Massages/Massages";
import {Route, Routes} from "react-router-dom";
import {FC} from "react";
import {DataUsersType, UsersMassagesType} from "../../../Redux/RedusersTypes/dialogsReduserTypes";

type Props = {
    usersMassages: UsersMassagesType
}

const BlockWithMassages: FC<Props> = (props) => {

    let massagesAdd = props.usersMassages.map(user => (
        <Route path={`/${user.id}`}
               key={user.id}
               element={<Massages id={user.id} massages={user.massages}/>}/>
    ));

    return (<div className={styles.blockMassages}>
        <Routes>
            {massagesAdd}
        </Routes>
    </div>)
}

export default BlockWithMassages;