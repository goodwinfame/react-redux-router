/**
 * Created by Superwen on 16/6/2.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router';

import { Menu, Icon } from 'antd';
import _ from 'underscore';
import { getPage } from '../actions'


class MenuContainer extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {current: 'index'}
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
        browserHistory.push(`/${e.key}`)
    }
    render() {
        const { global,getPage } = this.props;
        const { pages } = global;
        return (
            <Menu onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal">

                {pages.map((item, key) =>
                    <Menu.Item key={ item }>
                        { item }
                    </Menu.Item>
                )}

            </Menu>
        )
    }
}

function mapStateToProps(state) {
    return {
        global: state.global
    }
}

export default connect(
    mapStateToProps,
    { getPage }
)(MenuContainer)
