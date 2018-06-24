import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'authDetails';


@Injectable()
export class LocalStorageService {
    anotherTodolist = [];
    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) { }
    public storeOnLocalStorage(tokenDetails: any): void {
        this.storage.set(STORAGE_KEY, tokenDetails);
    }
    public getAuthDetails( ): any {
        return this.storage.get(STORAGE_KEY);
    }

    public removeAuthDetails( ): any {
        return this.storage.remove(STORAGE_KEY);
    }
}
