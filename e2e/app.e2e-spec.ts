import { GithubProfileSearcherPage } from './app.po';

describe('github-profile-searcher App', () => {
  let page: GithubProfileSearcherPage;

  beforeEach(() => {
    page = new GithubProfileSearcherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
