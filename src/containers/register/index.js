import React, { Component } from 'react'
import Logo from './../../components/logo/logo.jsx'
import { List, InputItem, Radio, WingBlank } from 'antd-mobile';
const RadioItem = Radio.RadioItem;
export default class index extends Component {
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
          {data.map(i => (
            <Radio key={i.label} >
              {i.label}
            </Radio>
          ))}
        </WingBlank>
      </div>
    )
  }
}
