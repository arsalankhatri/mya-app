import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Http, HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ObcomponentComponent } from './obcomponent/obcomponent.component';
import { AppRoutingModule } from './/app-routing.module';
import { StaticcomponentComponent } from './staticcomponent/staticcomponent.component';
import {SearchserviceService} from './searchservice.service';
import {WindowRefService} from './window-ref.service'

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QueryBuilderModule} from 'angular2-query-builder';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { AlbumTabComponent } from './album-tab/album-tab.component';
import {QueryModule} from 'query-builder'

// import { HttpClientModule, HttpClient } from '@angular/common/http';
// import {TranslateModule,TranslateLoader} from '@ngx-translate/core'
// import {TranslateHttpLoader} from '@ngx-translate/http-loader'

import {NgxDatatableModule} from '@swimlane/ngx-datatable'
import { FormControl } from '@angular/forms';



// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http,'../assets/','.json');
// }

@NgModule({
  declarations: [
    AppComponent,
    ObcomponentComponent,
    StaticcomponentComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,
    AlbumTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    QueryBuilderModule,
    NgxDatatableModule,
   // ,QueryModule
    // HttpClientModule,
    // TranslateModule.forRoot({
    //   loader : {
    //     provide:TranslateLoader,
    //     useFactory:HttpLoaderFactory,
    //     deps:[HttpClient]
    //   }
    // })
  ],
  providers: [SearchserviceService,WindowRefService
    // ,HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
