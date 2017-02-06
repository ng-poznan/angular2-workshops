import { DeathStarPage } from './app.po';

describe('death-star App', function() {
  let page: DeathStarPage;

  beforeEach(() => {
    page = new DeathStarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Death Star');
  });
});
