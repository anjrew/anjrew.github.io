export default class GalleryImageData {
    constructor(data) {
        this.description = data['description'];
        this.smallImageUrl = data['smallImageUrl'];
        this.largeImageUrl = data['largeImageUrl'];
        this.imageUrl =data['imageUrl'];
        this.name = data['name'];
        this.screenShot = data['screenShot'];
        for (const key in data) {
            const element = data[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing, and the other data was, `, data);
            }
        }
    }
}