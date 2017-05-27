import { TodosAnimationPage } from './app.po';

describe('todos-animation App', function() {
  let page: TodosAnimationPage;

  beforeEach(() => {
    page = new TodosAnimationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
