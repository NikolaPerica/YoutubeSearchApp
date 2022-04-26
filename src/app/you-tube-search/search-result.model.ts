export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;

    constructor(obj: any){
        this.id = obj && obj.id || null;
        this.title = obj && obj.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.snippet.thumbnails.medium.url || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${obj.id.videoId}`;
        console.log("obj thumbnailUrl : ", obj.snippet.thumbnails.medium.url);
       
    }
}
