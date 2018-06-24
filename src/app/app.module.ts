import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { Login } from './login/index';
import { Posts } from './posts/index';
import { appRoutes } from './routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Utils } from '../app/shared/utils/Utils';
import { HTTPClient } from '../app/shared/networking/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LocalStorageService } from '../app/shared/utils/localStorageService';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@NgModule({
  declarations: [
    Login,
    Posts,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      {useHash: true}
    )
  ],
  providers: [HTTPClient, LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
