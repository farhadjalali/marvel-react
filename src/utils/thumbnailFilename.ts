import {ImageThumbnail} from "../types";

export function thumbnailFilename(image: ImageThumbnail | undefined): string {
    if (!image)
        return ''
    else
        return image.path + '.' + image.extension
}
