import React, { Component } from 'react';
import UserLanding from './components/UserLanding';
import DataOverview from './components/DataOverview';
import NoticeList from './components/NoticeList';

export default class Dashboard extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};

    console.log("constructor...")
  }

  componentDidMount() {
    console.log("componentDidMount...")
    // todo: 加载用户信息
    // todo: 加载notices信息
    // todo: 加载统计信息
  }

  componentWillUnmount() {
    console.log("componentWillUnmount...")
  }

  render(){
    return (
      <div>
        <UserLanding />
        <DataOverview />
        <NoticeList />
      </div>
    );
  }
}