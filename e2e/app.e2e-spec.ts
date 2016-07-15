import { Router2Page } from './app.po';

describe('router2 App', function() {
  let page: Router2Page;

  beforeEach(() => {
    page = new Router2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
