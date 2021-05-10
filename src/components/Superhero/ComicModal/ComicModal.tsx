import {Comic} from "../../../types";
import {Modal} from "react-bootstrap";
import React from "react";
import "./ComicModal.scss";
import {thumbnailFilename} from "../../../utils";

export default function Index({comic, onHide}: { comic: Comic | undefined, onHide: () => void }): JSX.Element {
    return (
        <Modal show={!!comic}
               size={"lg"}
               centered
               onHide={onHide}>
            <Modal.Header closeButton
                          className="border-0 px-4 pb-0">
                <Modal.Title>
                    {comic?.title}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="d-flex flex-row p-2">
                    <img className="comic-modal-image mr-4"
                         src={thumbnailFilename(comic?.thumbnail)}
                         alt={'thumbnail'}/>
                    <div dangerouslySetInnerHTML={{__html: comic?.description || ""}}/>
                </div>
            </Modal.Body>
        </Modal>
    );
}
