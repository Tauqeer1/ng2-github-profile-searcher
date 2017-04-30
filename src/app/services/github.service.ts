import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    private username: string;
    private client_id: string = '8963649aaaeabda34af9';
    private client_secret: string = '100c01a9fcbf88fc84cb2482837b717eb8a7a0cb';
    user$: BehaviorSubject<any> = new BehaviorSubject<any>({});
    repos$: BehaviorSubject<any> = new BehaviorSubject<any>([]);

    constructor(private _http: Http) {
        this.username = 'Tauqeer1';
        this.getUser(this.username);
        this.getRepos(this.username);
    }

    /*getUser() {
        return this._http.get(`https://api.github.com/users/${this.username}`)
            .map(res => res.json());
    }*/
    /*getRepos() {
        return this._http.get(`https://api.github.com/users/${this.username}/repos`)
            .map(res => res.json());
    }*/


    getUser(username: string) {
        return this._http.get(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .map(res => res.json())
            .subscribe(res => {
                this.user$.next(res);
            })
    }
    getRepos(username: string) {
        return this._http.get(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`)
            .map(res => res.json())
            .subscribe(res => {
                this.repos$.next(res);
            })
    }


}