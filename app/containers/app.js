/**
 * Created by Superwen on 16/6/2.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Menu from '../containers/menu';

//import { message, Button } from 'antd';
import { getGlobal } from '../actions'

//const info = function (msg) {
//    message.info(`当前模板为: ${msg}`, 2);
//};

class App extends Component {
    componentWillMount() {
        const {getGlobal} = this.props;
        getGlobal();
    }
    componentDidUpdate() {
        //const {global} = this.props;
        //info(global.name);
    }

    render() {

        return (
            <div>
                <Menu />
                <main>
                    {this.props.children}
                </main>
            </div>
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
    { getGlobal }
)(App)
