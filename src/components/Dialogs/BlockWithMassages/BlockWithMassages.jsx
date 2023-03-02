import styles from "./BlockWithMassages.module.css";
import Massages from "./Massages/Massages";
import {Route, Routes} from "react-router-dom";

const BlockWithMassages = (props) => {

    let massagesAdd = props.usersMassages.map(user => (
        <Route path={`/${user.id}`}
               key={user.id}
               element={<Massages userId={user.id} massages={user.massages}/>}/>
    ));

    return (<div className={styles.blockMassages}>
        <Routes>
            {massagesAdd}
        </Routes>
    </div>)
}

export default BlockWithMassages;