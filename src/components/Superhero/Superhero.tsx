import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/state";
import {useCharacterActions} from "../../actions";
import {Character, Comic, HeroModel} from "../../types";
import ComicCard from "./ComicCard/ComicCard";
import ComicModal from "./ComicModal/ComicModal";
import "./Superhero.scss";

export function SuperheroHead({hero}: { hero: Character }): JSX.Element {
    return (
        <div className="bg-dark w-100 d-flex align-items-center justify-content-center">
            <h1 className="text-white">{hero.name}</h1>
            <img className="hero-head-thumbnail" src={hero.thumbnail.path + '.' + hero.thumbnail.extension} alt={'thumbnail'}/>
        </div>
    );
}

export default function Superhero(): JSX.Element {
    const {id} = useParams<{ id: string }>();
    const characters = useSelector((state: RootState) => state.characters)
    const dispatch = useDispatch();
    const characterActions = useCharacterActions(dispatch);
    const [hero, setHero] = useState<HeroModel>()
    const [modalComic, setModalComic] = useState<Comic>();

    useEffect(() => {
        // If we come from home page the hero basic information already is ready, otherwise we need to load it
        const alreadyLoadedHero = characters.heroes.items.find(hero => hero.id === +id);
        if (alreadyLoadedHero)
            setHero({
                ...characters.hero,
                current: alreadyLoadedHero,
                comics: []
            })
        else {
            // TODO: load by +id
            dispatch(characterActions.getHeroById);
            setHero(characters.hero)
        }

        dispatch(characterActions.getHeroComics);

    }, []);

    return (
        <div>
            {
                hero && hero.current ? <SuperheroHead hero={hero.current}/> : ''
            }

            <ComicModal comic={modalComic} onHide={() => setModalComic(undefined)}/>

            <h2 className="p-2">COMICS</h2>
            {/* Super hero comics */}
            {
                !hero ? '' :
                    <div className="p-2 d-flex flex-wrap">
                        {
                            characters.hero.comics.map(comic =>
                                <ComicCard onClick={() => setModalComic(comic)} comic={comic} key={comic.id}/>
                            )
                        }
                    </div>
            }
        </div>
    );
}
