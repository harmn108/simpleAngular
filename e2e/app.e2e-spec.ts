import { SimpleAngularPage } from './app.po';

describe('simple-angular App', () => {
  let page: SimpleAngularPage;

  beforeEach(() => {
    page = new SimpleAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
