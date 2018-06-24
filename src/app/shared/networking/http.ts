import { Injectable } from '@angular/core';
import { RequestMethod } from '@angular/http';
import { HttpClient, HttpResponse, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class HTTPClient {

	public constructor ( private delegate: HttpClient ) {}

	post( url: string, data: any , token: string ): Observable<any> {

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': 'Bearer ' + token
			})
		};

		return this.delegate.post<any>(url, data, httpOptions );
	}

	get( url: string, token: string ): Observable<any> {
		
		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type':  'application/json',
				'Authorization': 'Bearer ' + token
			})
		};

		return this.delegate.get<any>(url, httpOptions );
	}



}
