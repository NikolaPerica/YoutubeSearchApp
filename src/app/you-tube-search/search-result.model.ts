import { DomSanitizer } from '@angular/platform-browser';

export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    videoId: string;
    downloadUrl: string;
    Url:any;    

    
    constructor(obj: any){
        this.id = obj && obj.id || null;
        this.title = obj && obj.snippet.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.snippet.thumbnails.medium.url || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/embed/${obj.id.videoId}`;
        this.videoId = obj&& obj.id.videoId;
        console.log("obj thumbnailUrl : ", obj.snippet.thumbnails.medium.url);
        this.downloadUrl=obj && obj.videoUrl || `https://www.ssyoutube.com/embed/${obj.id.videoId}`;
       
       
    }
    
  
}
