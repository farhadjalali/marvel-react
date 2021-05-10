import React from 'react';
import {Comic} from "../../../types";
import "./ComicCard.scss";

export namespace ComicCard {
    export interface Props {
        comic: Comic
        onClick: () => void
    }
}

function comicCreators(comic: Comic) {
    return comic.creators.items
        .map(creator => creator.name
            .split(' ')
            .slice(-1)
            .join(' '))
        .join(", ");
}

export default function ComicCard({comic, onClick}: ComicCard.Props): JSX.Element {
    return (
        <a onClick={onClick}
           className="comic-card m-3">
            <div className="d-flex flex-column">
                <img src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                     alt="thumbnail"/>

                <div className="character-card-body py-3 d-flex flex-column justify-content-between">
                    <div className="font-weight-bold text-dark py-2">
                        {comic.title}
                    </div>
                    <div className="text-dark">
                        {comicCreators(comic)}
                    </div>
                </div>
            </div>
        </a>
    );
}
