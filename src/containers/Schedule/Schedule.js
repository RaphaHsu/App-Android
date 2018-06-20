import React, { Component } from 'react'
import { ScheduleContainer, ScheduleScrollView } from './style';
import ScheduleHeader from '../../components/ScheduleItem/ScheduleHeader';
import ScheduleItem from '../../components/ScheduleItem/ScheduleItem';
import Tab from '../../components/Tab/Tab';
import NavigationOptions from '../../components/NavigationOptions/NavigationOptions';
import TextButton from '../../components/Button/TextButton';

const tabs = [
  { name: 'day1', value: 'day1' },
  { name: 'day2', value: 'day2' }
];
const defaultActiveTab = 'day1';

export default class Schedule extends Component {
  static navigationOptions = ({ navigation }) => NavigationOptions(navigation, 'home.schedule')

  onPressTitle = () => {
    this.props.navigation.navigate('ScheduleDetail');
  }

  render() {
    return (
      <ScheduleScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ScheduleContainer>
          <Tab tabs={tabs} defaultActiveTab={defaultActiveTab} />
          <ScheduleHeader time="08:00 ~ 09:00" />
          <ScheduleItem
            regular
            title="Innovate width New Technologies on Google Cloud"
            type="CLOUD"
            onPressTitle={this.onPressTitle}
            name="田哲禹"
            room="R1 : 一廳" />
            <ScheduleItem
            regular
            title="Innovate width New Technologies on Google Cloud"
            type="CLOUD"
            onPressTitle={this.onPressTitle}
            name="田哲禹"
            room="R1 : 一廳" />
            <ScheduleItem
            regular
            title="Innovate width New Technologies on Google Cloud"
            type="CLOUD"
            onPressTitle={this.onPressTitle}
            name="田哲禹"
            room="R1 : 一廳" />
          <TextButton text="查看交流場次" align="center" margin={[16, 0, 0, 0]} />
        </ScheduleContainer>
      </ScheduleScrollView>
    )
  }
}