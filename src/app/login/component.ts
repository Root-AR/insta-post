import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LocalStorageService } from '../shared/utils/localStorageService';
import { HTTPClient } from '../shared/networking/http';


@Component({
    selector: 'app-login',
    templateUrl: 'templates/login.html',
    styleUrls: [
        'styles/login.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class Login implements OnInit, OnDestroy {

    constructor (private route: ActivatedRoute,
                private router: Router,
                private delegate: HTTPClient,
                private storageService: LocalStorageService) {}
    public ngOnDestroy() {}
    public ngOnInit() {
    }

    // tslint:disable-next-line:member-ordering
    private isLoginFormValid = true;
    // tslint:disable-next-line:member-ordering
    private isRegistrationFormValid = true;

    login(f: NgForm) {
        const userDetails = {
            userName : f.value.lusername,
            password : f.value.lpassword
        };
        if ( f.valid ) {
            this.delegate.post('http://localhost:8080/login', userDetails, '')
            .subscribe(resonse => {
                this.storageService.storeOnLocalStorage(resonse);
                this.router.navigate(['/posts']);
            });
        } else {
            this.isLoginFormValid = false;
        }
    }

    register(f: NgForm) {
        const userDetails = f.value;
        if ( f.valid ) {
            this.delegate.post('http://localhost:8080/register', userDetails, '').subscribe(resonse => {
                this.storageService.storeOnLocalStorage(resonse);
                this.router.navigate(['/posts']);
            });
        } else {
            this.isRegistrationFormValid = false;
        }
    }
}

