import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainWrapperComponent } from './main-wrapper/main-wrapper.component';
import { SectionWrapperComponent } from './section-wrapper/section-wrapper.component';
import { AsideComponent } from './aside/aside.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainWrapperComponent,
    SectionWrapperComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
