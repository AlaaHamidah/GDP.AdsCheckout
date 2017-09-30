import { GDPPage } from './app.po';

describe('gdp App', () => {
  let page: GDPPage;

  beforeEach(() => {
    page = new GDPPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
