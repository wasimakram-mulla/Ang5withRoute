import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DataService } from './test/data.service';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './posts/post.service';

const appRoutes: Routes = [
  { path: 'home', component: TestComponent },
  { path: 'posts/:id', component: PostsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PostsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
