import './styles/main.css';
import { drawHtmlLayout } from './modules/draw-layout.js';
import { fetchData } from './modules/fetch.js';
import { categoriesDrop } from './modules/variables.js';

window.onload = fetchData('https://api.publicapis.org/categories').then(
  (result) => drawHtmlLayout(result)
);

categoriesDrop.onchange = () => {
  const category = categoriesDrop.value;

  fetchData(
    `https://api.publicapis.org/entries?category=${category}&title`
  ).then((result) => drawHtmlLayout(result));
};
