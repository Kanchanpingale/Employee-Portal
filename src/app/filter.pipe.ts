import { Pipe, PipeTransform } from '@angular/core';
import { candidate_data } from './employee';
import { EmployeeDetailsService } from './employee-details.service';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {

  transform(employee: candidate_data[], searchText: string): any[] {
    if (!employee) {
      return [];
    }
    if (!searchText) {
      return employee;
    }
    searchText = searchText.toLocaleLowerCase();

    return employee.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }
}
