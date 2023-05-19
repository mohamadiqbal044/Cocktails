import DataSource from '../data/data-source.js';
const main = () => {
  const searchElement = document.querySelector('search-bar');
  const DrinkListElement = document.querySelector('drink-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchDrink(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };
  const renderResult = results => {
    DrinkListElement.Drinks = results; 
  };
  const fallbackResult = message => {
    DrinkListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};
export default main;