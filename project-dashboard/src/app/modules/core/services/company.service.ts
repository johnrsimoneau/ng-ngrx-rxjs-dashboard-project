import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, shareReplay } from 'rxjs';
import { Company } from '@modules/shared/interfaces/company.interface';
import { HttpUtility } from '../utilities/http.util';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private companyUrl = 'http://localhost:3000/companies';

  companies$ = this.http
    .get<Company[]>(this.companyUrl)
    .pipe(delay(1000), shareReplay(1), catchError(HttpUtility.handleError));

  constructor(private http: HttpClient) {}
}
