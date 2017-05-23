import { CollectProjectPage } from './app.po';

describe('collect-project App', () => {
  let page: CollectProjectPage;

  beforeEach(() => {
    page = new CollectProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
