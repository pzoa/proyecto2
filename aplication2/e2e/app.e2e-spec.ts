import { Aplication2Page } from './app.po';

describe('aplication2 App', () => {
  let page: Aplication2Page;

  beforeEach(() => {
    page = new Aplication2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
