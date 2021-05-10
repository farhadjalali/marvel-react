import {Comic} from "../../../types";
import {Modal} from "react-bootstrap";
import React from "react";
import "./ComicModal.scss";

export default function Index({comic, onHide}: { comic: Comic | undefined, onHide: () => void }): JSX.Element {
    return (<Modal show={!!comic} size={"lg"} centered onHide={onHide}>

        <Modal.Header closeButton className="border-0">
            <Modal.Title>
                {comic?.title}
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="d-flex flex-row">
                <img className="comic-modal-image" src={comic?.thumbnail.path + '.' + comic?.thumbnail.extension} alt={'thumbnail'}/>
                <div className="pl-4">
                    {comic?.description}
                </div>
            </div>
        </Modal.Body>
    </Modal>);
}
