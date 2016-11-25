import { browser, element, by } from 'protractor';

export class DeathStarPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ds-root h1')).getText();
  }
}
