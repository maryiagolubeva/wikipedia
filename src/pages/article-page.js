import { Selector, t } from 'testcafe';
import { ARTICLE_PAGE_SELECTORS } from '../object-repository/selectors/article-page-selectors';

class ArticlePage {
  constructor() {
    this.title = Selector(ARTICLE_PAGE_SELECTORS.TITLE);
  }

  async isDisplayed(expectedTitle) {
        await t
        .expect(this.title.visible)
        .ok('Article page title is not visible')
        .expect(this.title.innerText)
        .eql(expectedTitle, 'Article page title is not as expected');
    console.info('\t ✓ The Article page is displayed - checked');
  }

}
export default new ArticlePage();
