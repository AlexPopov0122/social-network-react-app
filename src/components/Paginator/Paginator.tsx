import styles from "./Paginator.module.css";
import {FC, useState} from "react";

type Props = {
    currentPage: number
    totalCountPages: number
    onCurrentPageButton: (page: number) => void
    portionUsersCount: number
    countPages: number
}

export const Paginator: FC<Props> = (props) => {

    let countPages: number = props.countPages;

    const portionNumber: number = Math.ceil(props.currentPage / countPages)

    const [pageNumber, setPageNumber] = useState<number>(portionNumber)

    let lastPageInPortion: number
    let firstPageInPortion: number

    if(props.totalCountPages <= 10) {
        firstPageInPortion = 1
        lastPageInPortion = props.totalCountPages
    } else {
        lastPageInPortion = countPages * pageNumber;
        firstPageInPortion = lastPageInPortion - 9;
    }

    const pages = [];
    for (let i = firstPageInPortion; i <= lastPageInPortion; i++) {
        pages.push(i)
    }

    const portion = pages.map((page) => {
        return (
            <span onClick={(e) => props.onCurrentPageButton(+e.currentTarget.innerText)}
                  className={props.currentPage === page ? styles.active : ""} key={page}>{page}</span>
        )
    })

    return (
        <div className={styles.paginatorWrapper}>
            {
                firstPageInPortion > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>&#9664;</button>
            }
            {portion}
            {
                lastPageInPortion !== props.totalCountPages &&
                <button onClick={() => setPageNumber(pageNumber + 1)}>&#9654;</button>
            }

        </div>
    )

}

export default Paginator;