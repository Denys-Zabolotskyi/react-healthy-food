// import { Recipe } from './Recipe';
import recipes from '../recipes.json';
import { GlobalStyle } from './GlobalStyle';
import { RecipeList } from './RecipeList/RecipeList';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <RecipeList recipes={recipes} />
      <GlobalStyle />
    </Layout>
  );
};
