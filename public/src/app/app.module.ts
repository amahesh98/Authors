import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
