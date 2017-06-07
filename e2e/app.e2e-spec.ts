import { FreelanceDemoUiPage } from './app.po';

describe('freelance-demo-ui App', function() {
  let page: FreelanceDemoUiPage;

  beforeEach(() => {
    page = new FreelanceDemoUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
