import { NgPostCommentsPage } from './app.po';

describe('ng-post-comments App', function() {
  let page: NgPostCommentsPage;

  beforeEach(() => {
    page = new NgPostCommentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
