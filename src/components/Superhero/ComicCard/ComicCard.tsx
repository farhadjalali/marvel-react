import React from 'react';
import {Comic} from "../../../types";
import "./ComicCard.scss";

export namespace ComicCard {
    export interface Props {
        comic: Comic
        onClick: () => void
    }
}

export default function ComicCard({comic, onClick}: ComicCard.Props): JSX.Element {
    return (
        <a onClick={onClick}
           className="comic-card m-2">
            <div className="d-flex flex-column">
                <img className="character-card-thumbnail"
                     src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                     alt="thumbnail"/>

                <div className="character-card-body p-2 d-flex flex-column justify-content-between">
                    <div className="font-weight-bold text-dark">
                        {comic.title}
                    </div>
                </div>
            </div>
        </a>
    );
}
