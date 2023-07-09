import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostsComponent } from './blog/posts/posts.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RegistryComponent } from './registry/registry.component';
import { StoryComponent } from './story/story.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { AdminScreenComponent } from './admin.screen/admin.screen.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:blogId', component: PostsComponent },
  { path: 'rsvp', component: RsvpComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'story', component: StoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/:userId', component: AdminScreenComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
