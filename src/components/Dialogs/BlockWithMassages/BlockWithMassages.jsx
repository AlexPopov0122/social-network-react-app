import styles from "./BlockWithMassages.module.css";
import Massages from "./Massages/Massages";
import {Route, Routes} from "react-router-dom";

const BlockWithMassages = (props) => {

    let massagesAdd = props.dialogsPage.usersMassages.map(user => (
        <Route path={`/${user.id}`}
               element={<Massages massages={user.massages} NewMassageText={props.dialogsPage.NewMassageText}
                                  dispatch={props.dispatch} userId={user.id}/>}/>
    ));

    return (<div className={styles.blockMassages}>
        <Routes>
            {massagesAdd}
        </Routes>
    </div>)
}

export default BlockWithMassages;