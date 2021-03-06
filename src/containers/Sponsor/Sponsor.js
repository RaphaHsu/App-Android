import React, { Fragment } from 'react';
import { ScrollView } from 'react-native';
import I18n from '../../locales';
import * as Style from './style';
import NavigationOptions from '../../components/NavigationOptions/NavigationOptions';
import LoadingIcon from '../../components/LoadingIcon/LoadingIcon';
import apiServices from '../../api/services';


export default class Sponsor extends React.Component {
  static navigationOptions = ({ navigation }) => NavigationOptions(navigation, 'sponsor.title', 'mode2')

  state = {
    sponsor: [],
  }

  getSponsors = async () => {
    const { data: sponsor } = await apiServices.get('/sponsor');
    this.setState({ sponsor });
  }

  async componentDidMount() {
    // const sponsorText = await AsyncStorage.getItem('sponsor');
    // const sponsor = JSON.parse(sponsorText).payload;
    // this.setState({ sponsor });
    this.getSponsors();
  }
  onClickImage = (sponsorDetail) => () => {
    this.props.navigation.navigate('SponsorDetail', { sponsorDetail });
  }

  render() {
    const { sponsor } = this.state;
    const lang = I18n.locale;
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Style.SponsorContainer style={{ flexGrow: 1 }}>
          {
            sponsor.length
              ? sponsor.map(sponsorData => (
                <Fragment key={sponsorData.name_e}>
                  <Style.TypeText>{lang === 'zh' ? sponsorData.name : sponsorData.name_e}</Style.TypeText>
                  <Style.CardSmallView>
                    {
                      sponsorData.data.map(sponsorDetail => (
                        <Style.CardSmall onPress={this.onClickImage(sponsorDetail)} key={`sponsor${sponsorDetail.name_e}`}>
                          <Style.CardImgSmall>
                            <Style.CardImg source={{ uri: sponsorDetail.logo_path }} />
                          </Style.CardImgSmall>
                          <Style.CardText>
                            {lang === 'zh' ? sponsorDetail.name : sponsorDetail.name_e}
                          </Style.CardText>
                        </Style.CardSmall>
                      ))
                    }
                  </Style.CardSmallView>
                </Fragment>
              ))
              : <LoadingIcon size="large" color="#ffffff" />
          }
        </Style.SponsorContainer>
      </ScrollView>
    );
  }
}
