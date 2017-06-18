import { FibonacciPage } from './app.po';

describe('fibonacci App', () => {
  let page: FibonacciPage;

  beforeEach(() => {
    page = new FibonacciPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
