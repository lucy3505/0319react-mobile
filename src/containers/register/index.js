import React, { Component } from 'react'
import Logo from './../../components/logo/logo.jsx'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import styles from './index.less'
const RadioItem = Radio.RadioItem;
const ListItem = List.Item
export default class index extends Component {
  state = { radio: '' }

  onChange = (radio) => {
    this.setState({
      radio
    })
  }


  render() {
    const { radio } = this.state
    const textTitle = "请选择职位"
    const data = [
      { value: 'dashen', label: "boss" },
      { value: 'laoban', label: "employee" },
    ];
    return (
      <div>
        <Logo />
        <WhiteSpace />
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
          <ListItem >
            <span>请选择职位：</span>

            {data.map(i => (
              <Radio className={styles.myRadio} key={i.value} checked={radio === i.value} onChange={() => this.onChange(i.value)} >
                {i.label}
              </Radio>
            ))}

          </ListItem>
          <WhiteSpace />
          <Button type="primary">注册</Button>
          <WhiteSpace />
          <Button>已有账户</Button>

        </WingBlank>
      </div>
    )
  }
}
