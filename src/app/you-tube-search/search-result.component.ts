import { Component, OnInit, Input } from '@angular/core';
import { SearchResult } from './search-result.model';
import { SafePipe } from '../safe.pipe';
import { DomSanitizer } from '@angular/platform-browser';
  
  
  
  @Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    standalone: false
})
  export class SearchResultComponent implements OnInit {
    @Input() result!: SearchResult;


  
    constructor(public sanitizer: DomSanitizer) { }
  

  ngOnInit() {
   
  }
  
  }