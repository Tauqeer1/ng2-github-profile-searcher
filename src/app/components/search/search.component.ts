import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { BehaviorSubject } from 'rxjs';
@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {

    term$: BehaviorSubject<string> = new BehaviorSubject("");
    constructor(private _githubService: GithubService) {
        this.term$
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(term => {
                this._githubService.getUser(term);
                this._githubService.getRepos(term);
            })

    }
}