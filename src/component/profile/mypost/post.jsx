import React from 'react';
import s from "./mypost.module.css";

export const Post = ({numberPost, id, like, textPost}) => {
    return (
        <div className={s.item} key={id}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-EdfIW5O90FsK5KRfsfB0TM88Yl7brjCqg&usqp=CAU"
                alt=""/>
            <span>
                <div>number post: {numberPost}</div>
                <div>Text post: {textPost}</div>
                <div>like {like}</div>
                <div>
                    <button>like</button>
                </div>
            </span>
        </div>);
};

