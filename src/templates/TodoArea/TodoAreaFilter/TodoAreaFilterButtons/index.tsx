import React from 'react';
import * as S from './styles';
import { Button } from '../../../../components/Button';
import { Theme } from '../../../../styles/Theme';

interface Props {
  filterValue: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TodoAreaFilterButtons = (props: Props): JSX.Element => {
  return (
    <S.TodoAreaFilterButtonsContainer>
      <ul>
        <li>
          <Button
            id="all"
            bg={Theme.colors.greenColor}
            bgHover={Theme.colors.greenColorHover}
            className={props.filterValue === 'all' ? 'active' : ''}
            handleClick={props.handleClick}
          >
            Todas
          </Button>
        </li>
        <li>
          <Button
            id="todo"
            bg={Theme.colors.greenColor}
            bgHover={Theme.colors.greenColorHover}
            className={props.filterValue === 'todo' ? 'active' : ''}
            handleClick={props.handleClick}
          >
            Incompletas
          </Button>
        </li>
        <li>
          <Button
            id="complete"
            bg={Theme.colors.greenColor}
            bgHover={Theme.colors.greenColorHover}
            className={props.filterValue === 'complete' ? 'active' : ''}
            handleClick={props.handleClick}
          >
            Completas
          </Button>
        </li>
      </ul>
    </S.TodoAreaFilterButtonsContainer>
  );
};
