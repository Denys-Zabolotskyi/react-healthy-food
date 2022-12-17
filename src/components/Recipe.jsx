import PropTypes from 'prop-types';
import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';
import { RecipeInfo, InfoBlock, Badge, BadgesWrapper } from './Recipe.styled';

export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <RecipeInfo>
        <InfoBlock>
          <BsAlarm />
          <span>{calories} calories</span>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartPie />
          <span>{servings} servings</span>
        </InfoBlock>
        <InfoBlock>
          <HiOutlineChartBar />
          <span>{calories} calories</span>
        </InfoBlock>
      </RecipeInfo>
      <h3>Difficulty</h3>
      <BadgesWrapper>
        <Badge>Easy</Badge>
        <Badge>Medium</Badge>
        <Badge>Hard</Badge>
      </BadgesWrapper>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    servings: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
  }).isRequired,
};
