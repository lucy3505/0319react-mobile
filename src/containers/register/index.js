import React, { Component } from 'react'
import Logo from './../../components/logo/logo.jsx'
import { List, InputItem, Radio, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';
import styles from './index.less'
// import { reqRegister } from '../../api/user'
import { connect } from 'react-redux'
import { register, login } from './../../redux/actions'


const ListItem = List.Item
class Register extends Component {
  state = {
    radio: '',
    params: {
      username: "",
      password: '',
      password2: '',
      type: ''
    }

  }

  handleRadioChange = (type) => {
    this.setState({
      params: {
        ...this.state.params,
        type: type
      }
    })
  }

  handleInputChange = (value, name) => {
    const { params } = this.state
    this.setState({
      params: {
        ...params,
        [name]: value
      }
    })
  }

  handleSubmit = () => {
    const { params, params: { password, password2 } } = this.state
    if (password !== password2) {
      return Toast.fail('两次密码不一致')
    }
    console.log(this.props);
    debugger

    this.props.register(params)
    // reqRegister(params).then(res => {
    //   if (res.code === 0) {
    //     Toast.success('注册成功')

    //   }
    // })

    // console.log(res)

  }


  render() {
    const { type } = this.state.params
    const data = [
      { value: 'dashen', label: "boss" },
      { value: 'laoban', label: "employee" },
    ];
    return (
      <div>
        <Logo />
        <WhiteSpace />
        <WingBlank>
          <InputItem placeholder="请输入用户名" onChange={(val) => this.handleInputChange(val, 'username')}>
            用户名：
          </InputItem>
          <InputItem type="password" placeholder="请输入密码" onChange={(val) => this.handleInputChange(val, 'password')}>
            密码：
          </InputItem>
          <InputItem type="password" placeholder="请输入密码" onChange={(val) => this.handleInputChange(val, 'password2')}>
            确认密码：
          </InputItem>
          <ListItem >
            <span>请选择职位：</span>

            {data.map(i => (
              <Radio className={styles.myRadio} key={i.value} checked={type === i.value} onChange={() => this.handleRadioChange(i.value)} >
                {i.label}
              </Radio>
            ))}

          </ListItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleSubmit}>注册</Button>
          <WhiteSpace />
          <Button>已有账户</Button>

        </WingBlank>
      </div>
    )
  }
}
export default connect(state => ({}), { register })(Register)