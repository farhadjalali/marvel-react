export interface Character {
    id: number;
    image: string;
    name: string;
    description: string;
    resourceURI: string;
    thumbnail: ImageThumbnail;
    comics: {
        available: number
    };
}

export interface Comic {
    id: number;
    title: string;
    description: string;
    resourceURI: string;
    thumbnail: ImageThumbnail;
    creators: {
        items: {
            name: string
        }[]
    }
}

interface ImageThumbnail {
    path: string;
    extension: string;
}

export interface GetCharactersOptions {
    limit?: number,
    search?: string,
    offset?: number
}
