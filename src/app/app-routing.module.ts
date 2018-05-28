import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing Components
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
