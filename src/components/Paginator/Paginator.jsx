import styles from "./Paginator.module.css";
import {useState} from "react";

export const Paginator = (props) => {

    let portionNumber = Math.ceil(props.currentPage / props.countPages)

    let [pageNumber, setPageNumber] = useState(portionNumber)

    let pages = [];

    let lastPageInPortion = props.countPages * pageNumber;
    let firstPageInPortion = lastPageInPortion - 9;

    for (let i = firstPageInPortion; i <= lastPageInPortion; i++) {
        pages.push(i)
    }

    let portion = pages.map((page) => {
        return (
            <span onClick={(e) => props.onCurrentPageButton(e.currentTarget.innerText)}
                  className={props.currentPage === page ? styles.active : ""} key={page}>{page}</span>
        )
    })

    return (
        <div className={styles.paginatorWrapper}>
            {
                pageNumber > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>&#9664;</button>
            }
            {portion}
            {
                pageNumber !== props.totalCountPages &&
                <button onClick={() => setPageNumber(pageNumber + 1)}>&#9654;</button>
            }

        </div>
    )

}

export default Paginator;