import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { SearchResultComponent } from './you-tube-search/search-result.component';
import { SearchBoxComponent } from './you-tube-search/search-box.component';
import { youTubeSearchInjectables } from './you-tube-search/you-tube-search.injectables';
import { SafePipe } from './safe.pipe';
import { FileSaverModule } from 'ngx-filesaver';



@NgModule({ declarations: [
        AppComponent,
        SimpleHttpComponent,
        MoreHttpRequestsComponent,
        YouTubeSearchComponent,
        SearchResultComponent,
        SearchBoxComponent,
        SafePipe
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        FormsModule, // <-- right here
        FileSaverModule], providers: [youTubeSearchInjectables, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}