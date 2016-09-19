/**
 * Created by Superwen on 16/6/2.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Row,Col } from 'antd';
import Slider from '../components/slider';
import Login from '../components/login';
import _ from 'underscore';
import { getPage } from '../actions'

class LoginContainer extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.props.getPage('login');
    }
    render() {
        const { page } = this.props;
        const layoutStyle = {
            marginBottom: 20
        };
        const sliderData = _.findWhere(page.modules,{name: 'moduleSlider'})?
            _.findWhere(page.modules,{name: 'moduleSlider'}).settings:[];
        const loginData = _.findWhere(page.modules,{name: 'moduleLogin'})?
            _.findWhere(page.modules,{name: 'moduleSlider'}).settings:[];
        return (
            <div>
                <Row style={layoutStyle}>
                    <Col span={24}>
                        <Slider slides={sliderData} />
                    </Col>
                </Row>
                <Row style={layoutStyle}>
                    <Col span={24}>
                        <Login login={loginData} />
                    </Col>
                </Row>
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
    mapStateToProps,
    { getPage }
)(LoginContainer)
