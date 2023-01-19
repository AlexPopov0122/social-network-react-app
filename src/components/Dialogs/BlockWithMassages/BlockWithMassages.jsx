import styles from "./BlockWithMassages.module.css";
import MassagesYulia from "./Massages/MassagesYulia/MassagesYulia";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MassagesDilovar from "./Massages/MassagesDilovar/MassagesDilovar";
import Dialogs from "../Dialogs";

const BlockWithMassages = () => {
    return (
        <div className={styles.blockMassages}>
            <Routes>
                <Route path="/1" element={<MassagesYulia/>}/>
                <Route path="/2" element={<MassagesDilovar/>}/>
            </Routes>
        </div>
    )
}

export default BlockWithMassages;