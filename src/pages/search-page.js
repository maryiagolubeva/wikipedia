import { Selector, t } from 'testcafe';
import { SEARCH_PAGE_SELECTORS } from '../object-repository/selectors/search-page-selectors';

class SearchPage {
  constructor() {
    this.title = Selector(SEARCH_PAGE_SELECTORS.TITLE);
    this.searchInput = Selector(SEARCH_PAGE_SELECTORS.SEARCH_INPUT);
    this.searchButton = Selector(SEARCH_PAGE_SELECTORS.SEARCH_BUTTON);
    this.articlePreview = Selector(SEARCH_PAGE_SELECTORS.ARTICLE_PREVIEW);
  }

  async isDisplayed(expectedTitle) {
    await t
    .expect(this.title.visible)
    .ok('Search page title is not visible')
    .expect(this.title.innerText)
    .eql(expectedTitle, 'Search page title is not as expected');
    console.info('\t ✓ The Search page is displayed - checked');
  }

  async searchArticle(text) {
    await t
    .typeText(this.searchInput, text)
    .click(this.searchButton);
    console.info('\t ✓ The Search button is pressed');
  }

  async checkCountResults(expectedCount) {
    await t
    .expect(this.articlePreview.count)
    .eql(expectedCount, 'The count of the links in not as expected');
    console.info(`\t ✓ The search results count (${expectedCount}) is correct - checked`);
  }
  
}
export default new SearchPage();
