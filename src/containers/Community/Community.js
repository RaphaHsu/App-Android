import React, { Component } from 'react';
import { ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import * as Style from './style';
import I18n from '../../locales';
import NavigationOptions from '../../components/NavigationOptions/NavigationOptions';
import TabDate from '../../components/TabDate/TabDate';
import CommunityBlock from './CommunityBlock';
import VolunteerBlock from './VolunteerBlock';

import iconJoin from '../../images/icon/iconJoin.png';
import iconFollowFB from '../../images/icon/iconFollowFB.png';

export default class Community extends Component {
  static navigationOptions = ({ navigation }) => NavigationOptions(navigation, 'community.title', 'mode2')

  state = {
    tab: 'community',
    community: [],
    volunteer: [],
  }

  async componentDidMount() {
    const communityText = await AsyncStorage.getItem('community');
    const community = JSON.parse(communityText).payload;

    const volunteerText = await AsyncStorage.getItem('volunteer');
    const volunteer = JSON.parse(volunteerText).payload;

    this.setState({ community, volunteer });
  }

  handleChange = (tab) => {
    this.setState({
      tab,
    });
  }

  goCommunityDetail = (id) => {
    this.props.navigation.navigate('CommunityDetail', { id });
  }

  goFB = (url) => {
    Linking.openURL('https://www.facebook.com/mopcon');
  }

  render() {
    const { tab, community, volunteer } = this.state;

    const tabs = [
      { name: I18n.t('community.tab_community'), value: 'community' },
      { name: I18n.t('community.tab_volunteer'), value: 'volunteer' }
    ];

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Style.Container>
          <Style.TabContainer>
            <TabDate tabs={tabs} defaultActiveTab={tab} onChange={this.handleChange} />
          </Style.TabContainer>
          {
            tab === 'community'
              ? <CommunityBlock goCommunityDetail={this.goCommunityDetail} community={community} />
              : <VolunteerBlock volunteer={volunteer} />
          }
        </Style.Container>
        <Style.JoinContainer>
          <Style.JoinImage source={iconJoin} />
          <Style.JoinText>「我想加入志工行列！」</Style.JoinText>
          <Style.FollowView onPress={this.goFB}>
            <Style.FollowImage source={iconFollowFB} />
          </Style.FollowView>
          <Style.FollowText>
            想要和我們一起改變南部資訊生態圈嗎？歡迎追蹤我們的 Facebook，我們會在下一屆準備開始前 PO 出徵才資訊！加入我們不僅有機會參與改變的過程，還可以得到寶貴的辦展經驗，認識大神們哦！
          </Style.FollowText>
        </Style.JoinContainer>
      </ScrollView>
    );
  }
}