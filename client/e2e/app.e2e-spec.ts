import { RxjsChatPage } from './app.po';

describe('rxjs-chat App', () => {
  let page: RxjsChatPage;

  beforeEach(() => {
    page = new RxjsChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
