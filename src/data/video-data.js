export default class VideoData {
    constructor(data) {
        this.description = data['description'];
        this.url = data['url'];
        this.name = data['name'];
        this.imageUrl = data['imageUrl'];
        this.screenShot = data['screenShot'];
        for (const key in data) {
            const element = data[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing, and the other data was, `, data);
            }
        }
    }
}