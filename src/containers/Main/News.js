import React, { Component } from 'react';
import styled from 'styled-components/native';
import I18n from '../../locales';
import * as theme from '../../theme';

import iconChevronRightImg from '../../images/icon/iconChevronRight.png';

const Container = styled.View`
  width: 100%;
  flex-direction: column;
`;

const TitleContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const Title = styled.Text`
  color: white;
  font-size: 16px;
`;

const Message = styled.Text`
  color: #fff;
  font-size: 16px;
  background-color: #0C3449;
  padding: 20px;
  border-radius: 6px;
`;

const TouchArea = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const MoreText = styled.Text`
  color: #878787;
  font-size: 16px;
`;

const RightArrow = styled.Image`
  width: 7;
  height: 12;
  margin-left: 8;
`;

const Block = styled.View``;

const News = ({toNews, news}) => {
  return (
    <Container>
      <TitleContainer>
        <Title>{I18n.t('news.title')}</Title>
        <Block>
          <TouchArea onPress={toNews}>
            <MoreText>{I18n.t('news.more')}</MoreText>
            <RightArrow source={iconChevronRightImg} />
          </TouchArea>
        </Block>
      </TitleContainer>
      <Message>{news[0].description}</Message>
    </Container>
  );
}

export default News;