import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrdersComponent} from './orders-table/orders.component';
import {TableComponent} from './table/table.component';
import {MatTableModule} from "@angular/material/table";
import {DataPropertyGetterPipe} from './table/data-property-getter-pipe/data-property-getter.pipe';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {CustomersComponent} from './customers-table/customers.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductService} from './service/product.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    TableComponent,
    DataPropertyGetterPipe,
    CustomersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
