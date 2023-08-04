import { BASE_URL } from '../object-repository/test-data/urls';
import MainPage from '../pages/main-page';
import ArticlePage from '../pages/article-page';
import SearchPage from '../pages/search-page';

import { ARTICLE_PAGE_CONTENT } from '../object-repository/application-content/article-page-content';
import { SEARCH_PAGE_CONTENT } from '../object-repository/application-content/search-page-content';

import { SEARCH_VALUES } from '../object-repository/test-data/search-values';

fixture("Search")
    .page(BASE_URL)

test("Navigate to the article page using the main page search", async t => {
    await MainPage.navigateToArticlePage(SEARCH_VALUES.TENERIFE);
    await ArticlePage.isDisplayed(ARTICLE_PAGE_CONTENT.TENERIFE_TITLE);
});

test("Articles results list on the search page", async t => {
    await MainPage.navigateToSearchPage();
    await SearchPage.isDisplayed(SEARCH_PAGE_CONTENT.TITLE);
    await SearchPage.searchArticle(SEARCH_VALUES.TEIDE);
    await SearchPage.checkCountResults(20);
});