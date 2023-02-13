import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './../safe.pipe';

export class SearchResult {
    id: string;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    videoId: string;
    Url:any;    
    safe=new SafePipe();

    
    constructor(obj: any){
        this.id = obj && obj.id || null;
        this.title = obj && obj.snippet.title || null;
        this.description = obj && obj.description || null;
        this.thumbnailUrl = obj && obj.snippet.thumbnails.medium.url || null;
        this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/embed/${obj.id.videoId}`;
        this.videoId = obj&& obj.id.videoId;
        console.log("obj thumbnailUrl : ", obj.snippet.thumbnails.medium.url);
       // this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
        //this.Url=this.safe.transform(this.videoUrl);
        this.Url=this.safe.transform(this.videoUrl);
        console.log("safelink: ", this.Url);
       
    }
    
  
}
