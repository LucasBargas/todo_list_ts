import { Footer } from '../../templates/Footer';
import { TodoArea } from '../../templates/TodoArea';
import * as S from './styles';

export const Homepage = (): JSX.Element => {
  return (
    <S.HomepageContainer>
      <S.HomepageArea>
        <TodoArea />
        <Footer />
      </S.HomepageArea>
    </S.HomepageContainer>
  );
};
