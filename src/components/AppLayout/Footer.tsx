import {FC} from 'react';

import {FooterComponentWrapper, Container, FooterContainer, TextCopy, TopBox} from './styles';
import {IFooterComponentProps} from '../../types/layout';
import {HomeLink, TextLink} from '../../ui-kit/Button';
import {IconSvg} from '../../ui-kit/Icon/Svg';

import {route} from '../../constants/routes';

export const FooterComponent: FC<IFooterComponentProps> = ({year}) => {
  return (
    <FooterComponentWrapper>
      <Container>
        <FooterContainer>
          <TopBox>
            <HomeLink aria-label="Go home">
              <IconSvg type="logo" width={'48'} height={'48'} />
            </HomeLink>
            <TextLink to={route.privacyPolicy.path}>Privacy Policy</TextLink>
          </TopBox>
          <TextCopy>Copyright &copy; {year}.</TextCopy>
        </FooterContainer>
      </Container>
    </FooterComponentWrapper>
  );
};
