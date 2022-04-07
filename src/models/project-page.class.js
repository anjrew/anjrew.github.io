/* eslint-disable indent */

export default class ProjectPageData {

    constructor(data) {

		this.textBlack = data.textBlack;
        this.logoUrl = data['logoUrl'];
        this.title = data['title'];
        this.description = data['description'];
        this.technologies = data['technologies'];
        this.links = data['links'];
        this.screenShots = data['screenShots'];
        this.linksTitle = data['linksTitle'];
        this.videos = data['videos'];
        this.logoUrlSmall = data['logoUrlSmall'];
        this.logoUrlBig = data['logoUrlBig'];
        this.projectBigUrl = data['projectBigUrl'];
        this.projectSmallUrl = data['projectSmallUrl'];
        this.siteUrl = data['siteUrl'];
        this.repoUrl = data['repoUrl'];
        if (this.screenShots) {
            for (let index = 0; index < this.screenShots.length; index++) {
                const image = this.screenShots[index];
                image.project = this.title;
            }
            if (this.videos) {
                for (let index = 0; index < this.videos.length; index++) {
                    const image = this.videos[index];
                    image.project = this.title;
                }
            }
        }
        for (const key in data) {
            const element = data[key];
            if (element == null || element == undefined) {
                throw Error(`${key} Arguments are missing`);
            }
        }
    }
}