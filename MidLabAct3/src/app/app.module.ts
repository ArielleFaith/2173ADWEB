import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyServiceService } from './my-service.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@NgModule({
  declarations: [AppComponent, NewCmpComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [MyServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
