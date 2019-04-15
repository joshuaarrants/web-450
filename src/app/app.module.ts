import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material'

// Component imports
import { BaseLayoutComponent } from './shared';
import { HeaderComponent } from './shared';
import { AuthLayoutComponent } from './shared';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    HeaderComponent,
    AuthLayoutComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: true }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
