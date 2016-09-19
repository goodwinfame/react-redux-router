/**
 * Created by Superwen on 16/6/2.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Alert } from 'antd';
import _ from 'underscore';
import { getPage } from '../actions'

//let timer;
class IndexContainer extends Component {
    constructor(props) {
        super(props);
        //this.increase = this.increase.bind(this);
        //this.state = {
        //    percent: 0,
        //};

    }
    //increase(num) {
    //    let percent = this.state.percent + num;
    //    if (percent > 100) {
    //        percent = 100;
    //    }
    //    this.setState({ percent });
    //}
    //componentDidMount() {
    //    timer = setInterval(function(){
    //        this.increase(1);
    //        console.log(this.state);
    //        if(this.state.percent === 100){
    //            clearInterval(timer);
    //        }
    //    }.bind(this),80);
    //
    //
    //}
    //componentWillUnmount() {
    //    clearInterval(timer);
    //}
    render() {

        //const { page } = this.props;
        const logoutContainer = {
            padding: 10
        }
        return (
            <div style={logoutContainer}>
                <Alert message="退出成功"
                       description="当前用户已退出成功当前用户已退出成功当前用户已退出成功当前用户已退出成功当前用户已退出成功当前用户已退出成功当前用户已退出成功!"
                       type="success"
                       showIcon />
            </div>

        )
    }
}

//IndexContainer.propTypes = {
//    products: PropTypes.arrayOf(PropTypes.shape({
//        id: PropTypes.number.isRequired,
//        title: PropTypes.string.isRequired,
//        price: PropTypes.number.isRequired,
//        inventory: PropTypes.number.isRequired
//    })).isRequired,
//    addToCart: PropTypes.func.isRequired
//}

function mapStateToProps(state) {
    return {
        page: state.page
    }
}

export default connect(
    mapStateToProps
)(IndexContainer)
