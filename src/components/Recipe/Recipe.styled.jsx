import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
`;

export const Title = styled.h2`
  margin-top: 0;
`;

export const RecipeInfo = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  /* svg {
    color: orange;
  } */
`;

export const BadgesWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const Badge = styled.span`
  padding: 8px;
  border-radius: 12px;
  background-color: ${props => {
    return props.isActive ? 'orangered' : 'lightgray';
  }};
  color: ${props => {
    return props.isActive ? 'white' : 'black';
  }};
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 240px;
  object-fit: cover;
  margin-bottom: 12px;
`;
