import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BookExampleComponent } from './components/book-example/book-example.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookListExampleComponent } from './components/book-list-example/book-list-example.component';
import { BookSelectCountComponent } from './components/book-select-count/book-select-count.component';

import { CustomNamePipe } from './components/book-example/book-name.pipe';
import { PublisherPrettyPipe } from './components/book-example/publisher-pretty.pipe';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { BookTopExampleDirective } from './components/book-example/book-top-example.directive';
import { BookSelectListComponent } from './components/book-select-list/book-select-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BookExampleComponent,
    HomePageComponent,
    BookListExampleComponent,
    BookSelectCountComponent,
    CustomNamePipe,
    PublisherPrettyPipe,
    ExamplePageComponent,
    BookTopExampleDirective,
    BookSelectListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
