import { WebdevLazyworkersPage } from './app.po';

describe('webdev-lazyworkers App', () => {
  let page: WebdevLazyworkersPage;

  beforeEach(() => {
    page = new WebdevLazyworkersPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to webdev!!');
  });
});
