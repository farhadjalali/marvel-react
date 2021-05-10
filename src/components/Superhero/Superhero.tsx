import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/state";
import {CharacterActions} from "../../actions";
import {Comic} from "../../types";
import ComicCard from "./ComicCard/ComicCard";
import ComicModal from "./ComicModal/ComicModal";
import "./Superhero.scss";
import {thumbnailFilename} from "../../utils";
import {Spinner} from "../_utils/Spinner";
import {SpinnerContainer} from "../_utils/SpinnerContainer";

export default function Superhero(): JSX.Element | null {
    const {id} = useParams<{ id: string }>();
    const marvel = useSelector((state: RootState) => state.marvel)
    const dispatch = useDispatch();
    const [modalComic, setModalComic] = useState<Comic>();

    useEffect(() => {
        dispatch(CharacterActions.getHeroById(+id, () => {
            dispatch(CharacterActions.getHeroComics(+id));
        }));

    }, []);

    if (!marvel.hero || !marvel.hero.current)
        return null;

    return (
        <div className="superhero-page">
            {/* Head */}
            <div className="superhero-page-head bg-black p-5 w-100 d-flex flex-column flex-md-row align-items-center justify-content-center">
                <h2 className="text-white px-4">{marvel.hero.current.name}</h2>
                <img className="hero-head-thumbnail" src={thumbnailFilename(marvel.hero.current.thumbnail)} alt={'thumbnail'}/>
            </div>
            <svg className="d-none d-sm-block" preserveAspectRatio="none" viewBox="0 0 100 6">
                <polygon points="0,0 100,0 0,6"/>
            </svg>

            {/* comics cards */}
            <h2 className="px-5 my-3 text-secondary">COMICS</h2>

            {
                marvel.hero.comicsLoading ?
                    <SpinnerContainer>
                        <Spinner/>
                    </SpinnerContainer>
                    :
                    <div className="row px-4 m-0">
                        {
                            marvel.hero.comics.map(comic =>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6"
                                     key={comic.id}>
                                    <ComicCard onClick={() => setModalComic(comic)}
                                               comic={comic}/>
                                </div>
                            )
                        }
                    </div>
            }

            {/* comic modal */}
            <ComicModal comic={modalComic} onHide={() => setModalComic(undefined)}/>
        </div>
    );
}
