import s from "./users.module.css";
import {useState} from "react";

export const Paginator = ({ currentPage, onPageChanged, paginationChange, totalCount}) => {

    let pages = []

    for (let i = 1; i <= totalCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(totalCount / 10 )
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * 10 + 1
    let rightPortionPageNumber = portionNumber * 10
    return (<>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(el => {
                return (
                    <span
                        key={el}
                        className={currentPage === el && s.active}
                        onClick={() => onPageChanged(el)}
                    >{el}</span>
                )
            })}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
        </>
        )
}