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

    const portionNumber: number = Math.ceil(props.currentPage / props.countPages)

    const [pageNumber, setPageNumber] = useState<number>(portionNumber)

    const pages = [];

    const lastPageInPortion: number = props.countPages * pageNumber;
    const firstPageInPortion: number = lastPageInPortion - 9;

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