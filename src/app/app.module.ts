import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent} from './partials/siteheader/siteheader.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { StoryComponent } from './story/story.component';
import { RegistryComponent } from './registry/registry.component';
import { BlogComponent } from './blog/blog.component';
import { PostsComponent } from './blog/posts/posts.component';
import { NotfoundComponent as NotFoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AdminScreenComponent } from './admin.screen/admin.screen.component';
import { BlogListObjectComponent } from './blog.list.object/blog.list.object.component';
import { CountdownComponent } from './custom/countdown/countdown.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RsvpComponent,
    StoryComponent,
    RegistryComponent,
    BlogComponent,
    PostsComponent,
    NotFoundComponent,
    LoginComponent,
    AdminScreenComponent,
    BlogListObjectComponent,
    CountdownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
