import React, { Component } from 'react'
import Logo from './../../components/logo/logo.jsx'
import { List, InputItem, Radio, WingBlank } from 'antd-mobile';
const RadioItem = Radio.RadioItem;
export default class index extends Component {

  handleRadioChange=()=>{
    
  }

  render() {
    const data = [
      { label: 'dashen' },
      { label: 'laoban' },
    ];
    return (
      <div>
        <Logo />
        <WingBlank>
          <InputItem placeholder="请输入用户名">
            用户名：
          </InputItem>
          <InputItem type="password" placeholder="请输入密码">
            密码：
          </InputItem>
          <InputItem>
            用户名：   
          </InputItem>
           <List renderHeader={() => 'RadioItem demo'}>
            {data.map(i => (
                <RadioItem key={i.label} onChange={() => this.onChange(i.label)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
        </WingBlank>
      </div>
    )
  }
}
