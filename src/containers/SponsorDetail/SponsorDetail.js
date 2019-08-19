import React from 'react'
import { ScrollView, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationOptions from '../../components/NavigationOptions/NavigationOptions';
import I18n from '../../locales';
import * as Style from './style';

export default class SponsorDetail extends React.Component {
  static navigationOptions = ({ navigation }) => NavigationOptions(navigation, 'sponsor.info', 'mode2')

  state = {
    sponsor: {}
  }

  async componentDidMount() {
    // const { sponsorDetail } = this.props.navigation.state.params;
    // const sponsorText = await AsyncStorage.getItem('sponsor');
    // const sponsor = JSON.parse(sponsorText).payload.find(s => s.id === sponsorId);

    // this.setState({ sponsor });
  }


  openLink = (url) => {
    Linking.openURL(url);
  }


  render() {
    const { sponsorDetail } = this.props.navigation.state.params;
    const name = I18n.locale === 'en' ? sponsorDetail.sponsor_en : sponsorDetail.sponsor;
    const info = I18n.locale === 'en' ? sponsorDetail.about_us_en : sponsorDetail.about_us;
    const logo = sponsorDetail.logo_path;

    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Style.SDContainer>
          <Style.CardView>
            <Style.CardImg
              source={{ uri: logo }}
            />
          </Style.CardView>
          <Style.SponsorName>
            {name}
          </Style.SponsorName>
          <Style.SponsorDesc>
            {info}
          </Style.SponsorDesc>
          <Style.MoreButton onPress={() => this.openLink(sponsorDetail.understand_more)}>
            <Style.MoreText>{I18n.t('sponsor.more')}</Style.MoreText>
          </Style.MoreButton>
        </Style.SDContainer>
      </ScrollView>
    );
  }
}