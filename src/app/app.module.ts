import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RegistratinPageComponent } from './pages/registratin-page/registratin-page.component';
import { JobSectionPageComponent } from './pages/job-section-page/job-section-page.component';
import { DashBoardPageComponent } from './pages/dash-board-page/dash-board-page.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    RegistratinPageComponent,
    JobSectionPageComponent,
    DashBoardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzNoAnimationModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
