import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AppComponent } from './app.component';
import { EmployeeDetailsService } from './employee-details.service';
import { EmployeeComponent } from './employee/employee.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule

  ],
  providers: [EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
