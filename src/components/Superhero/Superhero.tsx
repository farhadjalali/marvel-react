import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../reducers/state";
import {CharacterActions} from "../../actions";
import {Comic, HeroModel} from "../../types";
import ComicCard from "./ComicCard/ComicCard";
import ComicModal from "./ComicModal/ComicModal";
import "./Superhero.scss";
import {thumbnailFilename} from "../../utils";

export default function Superhero(): JSX.Element | null {
    const {id} = useParams<{ id: string }>();
    const marvel = useSelector((state: RootState) => state.marvel)
    const dispatch = useDispatch();
    const [hero, setHero] = useState<HeroModel>()
    const [modalComic, setModalComic] = useState<Comic>();

    useEffect(() => {
        // If user comes from home page the hero basic information already is ready, otherwise we need to reload it from API
        const alreadyLoadedHero = marvel.heroes.items.find(hero => hero.id === +id);
        if (alreadyLoadedHero) {
            setHero({
                ...marvel.hero,
                current: alreadyLoadedHero,
                comics: []
            })
            dispatch(CharacterActions.getHeroComics(+id));
        } else {
            dispatch(CharacterActions.getHeroById(+id, () => {
                setHero(marvel.hero)
                dispatch(CharacterActions.getHeroComics(+id));
            }));
        }

    }, [hero?.current]);

    if (!hero || !hero.current)
        return null;

    return (
        <div className="superhero-page">
            {/* Head */}
            <div className="superhero-page-head bg-black p-3 w-100 d-flex align-items-center justify-content-center">
                <h2 className="text-white px-4">{hero.current.name}</h2>
                <img className="hero-head-thumbnail" src={thumbnailFilename(hero.current.thumbnail)} alt={'thumbnail'}/>
            </div>
            <svg preserveAspectRatio="none" viewBox="0 0 100 6">
                <polygon points="0,0 100,0 0,6"/>
            </svg>

            {/* comics cards */}
            <h2 className="px-4 mt-3 text-secondary">COMICS</h2>
            <div className="p-2 d-flex flex-wrap">
                {
                    marvel.hero.comics.map(comic =>
                        <ComicCard onClick={() => setModalComic(comic)} comic={comic} key={comic.id}/>
                    )
                }
            </div>

            {/* comic modal */}
            <ComicModal comic={modalComic} onHide={() => setModalComic(undefined)}/>
        </div>
    );
}
