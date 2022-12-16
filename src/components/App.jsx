// import { Recipe } from './Recipe';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { RecipeList } from './RecipeList';

export const App = () => {
  return (
    <>
      <RecipeList recipes={recipes} />
      <GlobalStyle />
    </>
  );
};
