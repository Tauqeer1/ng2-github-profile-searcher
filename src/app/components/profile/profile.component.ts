import { Component } from '@angular/core';
import { GithubService } from './../../services/github.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
    
    user: Object;
    repos: Array<Object>;
    constructor(private _githubSerice: GithubService) {
        this._githubSerice.getUser()
            .subscribe(user => {
                console.log('user', user);
                this.user = user;
            });
        
        this._githubSerice.getRepos()
            .subscribe(repos => {
                console.log('repos', repos);
                this.repos = repos;
            })
    }
}