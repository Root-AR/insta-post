import { Component, OnInit, OnDestroy, ViewEncapsulation, TemplateRef} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Utils} from '../shared/utils/Utils';
import { LocalStorageService } from '../shared/utils/localStorageService';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HTTPClient } from '../shared/networking/http';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
    selector: 'app-posts',
    templateUrl: 'templates/posts.html',
    styleUrls: [
        'styles/posts.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class Posts implements OnInit, OnDestroy {

    posts: any[] = [ ];
    authDetails: any = {};
    modalRef: BsModalRef;

    constructor (private route: ActivatedRoute,
        private router: Router,
        private delegate: HTTPClient,
        private storageService: LocalStorageService,
        private modalService: BsModalService) {}

    public ngOnDestroy() {}
    public ngOnInit() {
        this.getAllPosts();
    }

    logout() {
        this.storageService.removeAuthDetails();
        this.router.navigate(['/login']);
    }

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
    closeModal() {
        this.modalRef.hide();
    }

    getAllPosts () {
        this.authDetails = this.storageService.getAuthDetails();
        if ( !this.authDetails ) {
            this.router.navigate(['/login']);
        } else {
            this.delegate.get('http://localhost:8080/posts', this.authDetails.access_token)
            .subscribe(resonse => {
                this.posts = resonse;
            });
        }
    }

    addNewPost (f: NgForm) {
        this.authDetails = this.storageService.getAuthDetails();
        if ( !this.authDetails ) {
            this.router.navigate(['/login']);
        } else {
            this.delegate.post('http://localhost:8080/posts', f.value, this.authDetails.access_token)
             .subscribe(resonse => {
                this.posts = resonse;
                this.closeModal();
                this.getAllPosts();
             });
        }
    }
}
