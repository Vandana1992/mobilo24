import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MobiloCompareFooterComponent } from './mobilo-compare-components/mobilo-compare-footer/mobilo-compare-footer.component';
import { MobiloCompareHeaderComponent } from './mobilo-compare-components/mobilo-compare-header/mobilo-compare-header.component';
import { MobiloComparisionComponent } from './mobilo-compare-components/mobilo-comparision.component';

@NgModule({
  declarations: [
    AppComponent,
    MobiloComparisionComponent,
    MobiloCompareHeaderComponent,
    MobiloCompareFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
