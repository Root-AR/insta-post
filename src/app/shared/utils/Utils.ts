

import { HTTPClient } from '../networking/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Utils {

    constructor (private http: HTTPClient) {}

    url = 'http://localhost:8080/register';

    registerUser ( userDetails: any ): any {



        //const registrationUrl: string = ServiceUrls.baseUrl + ServiceUrls.endpoints.registration ;
        let  x = {
            
              "firstName" :"Akshay",
               "lastName" :"Rathore",
               "userName" :"aa",
               "password" :"1234"
            };
            console.log('resister step 1');

            return this.http.post( 'https://localhost:8080', x, '' );
        //this.http.post(this.url, '', x).map(response => console.log(response.body) );

    }

    loginUser ( userDetails: any ): any {
        //this.http.post('registrationUrl', 's', userDetails);
    }

    addUserPost ( userDetails: any ): any {
        //this.http.post('registrationUrl', 's', userDetails);
    }

}
