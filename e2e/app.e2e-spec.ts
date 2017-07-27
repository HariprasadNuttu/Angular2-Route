import { RouteDemoPage } from './app.po';

describe('route-demo App', () => {
  let page: RouteDemoPage;

  beforeEach(() => {
    page = new RouteDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
