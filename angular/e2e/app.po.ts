import { browser, by, element } from 'protractor';

export class WebdevLazyworkersPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('webdev-root h1')).getText();
  }
}
