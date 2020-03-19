import React, { Component } from 'react'
import { Button, List } from 'antd-mobile';


export default class index extends Component {
  render() {
    return (
      <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
        <List.Item
          extra={<Button size="small" inline>small</Button>}
          multipleLine
        >
          <Button type="primary">hhhh</Button>
          Regional manager
        <List.Item.Brief>
            Can be collected, refund, discount management, view data and other operations
        </List.Item.Brief>
        </List.Item>
        <List.Item
          extra={<Button type="primary" size="small" inline>small</Button>}
          multipleLine
        >
          Regional manager
        <List.Item.Brief>
            Can be collected, refund, discount management, view data and other operations
        </List.Item.Brief>
        </List.Item>
      </List>
    )
  }
}
