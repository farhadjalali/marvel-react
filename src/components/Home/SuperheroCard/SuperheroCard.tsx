import React from 'react';
import {Link} from 'react-router-dom';
import "./SuperheroCard.scss";

// A good practice for defining a component's Props
export namespace CharacterCard {
    export interface Props {
        character: {
            id: number;
            name: string;
            thumbnail: {
                path: string;
                extension: string;
            };
            comics: {
                available: number
            };
        }
    }
}

export default function SuperheroCard({character}: CharacterCard.Props): JSX.Element {
    return (
        <div className="character-card px-2 py-2 d-sm-block">
            <Link to={`superhero/${character.id}`}>
                <div className="d-flex flex-column">
                    <div className="character-card-thumbnail">
                        <img
                            src={character.thumbnail.path + '.' + character.thumbnail.extension}
                            alt={'thumbnail'}/>
                    </div>

                    <div className="character-card-body pt-1 pb-3 px-4 d-flex flex-column justify-content-between">
                        <div className="font-weight-bold text-white">
                            {character.name}
                        </div>

                        <div className="character-card-comics-label">
                            {character.comics.available} Comics
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
