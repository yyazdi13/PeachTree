import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransferBoxComponent } from './transfer-box/transfer-box.component';
import { FormsModule } from '@angular/forms';
import { RecentTransactionsComponent } from './recent-transactions/recent-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransferBoxComponent,
    RecentTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
