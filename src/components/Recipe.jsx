import { BsAlarm } from 'react-icons/bs';
import { HiOutlineChartPie, HiOutlineChartBar } from 'react-icons/hi';

export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div style={{ border: '1px solid black' }}>
      <h2>{name}</h2>
      <div>
        <div>
          <BsAlarm />
          {time} min
        </div>
        <div>
          <HiOutlineChartPie />
          {servings} servings
        </div>
        <div>
          <HiOutlineChartBar />
          {calories} calories
        </div>
      </div>
      <div>
        <h3>Difficulty</h3>
        <span>Easy</span>
        <span>Medium</span>
        <span>Hard</span>
      </div>
    </div>
  );
};