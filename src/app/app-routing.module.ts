import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StaticcomponentComponent} from './staticcomponent/staticcomponent.component';
import {ObcomponentComponent} from './obcomponent/obcomponent.component';
import { ArtistComponent } from './artist/artist.component';
import { AlbumTabComponent } from './album-tab/album-tab.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: StaticcomponentComponent},
  {path: 'request', component: ObcomponentComponent},
  {path: 'tab', component: AlbumTabComponent},
    {
      path: 'tab/:crossid',
      component: AlbumTabComponent,
      children:[
        {path:'',redirectTo:'track',pathMatch:'full'},
        {path:'track',component:ArtistTrackListComponent},
        {path:'album',component:ArtistAlbumListComponent}
      ]
    },
  {path:'**',redirectTo:'/home'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

