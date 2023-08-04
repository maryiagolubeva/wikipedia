import { Selector, t } from 'testcafe';
import { MAIN_PAGE_SELECTORS } from '../object-repository/selectors/main-page-selectors';

class MainPage {
  constructor() {
    this.searchInput = Selector(MAIN_PAGE_SELECTORS.SEARCH_INPUT);
    this.searchButton = Selector(MAIN_PAGE_SELECTORS.SEARCH_BUTTON);
  }

  async navigateToArticlePage(searchText) {
    await t
    .typeText(this.searchInput, searchText)
    .click(this.searchButton);
    console.info('\t ✓ The search button is pressed');
  }

  async navigateToSearchPage() {
    await t
    .click(this.searchInput)
    .pressKey('enter');
    console.info('\t ✓ The navigation to the Search page is done by pressing ENTER in the search input field');
  }
}
export default new MainPage();
