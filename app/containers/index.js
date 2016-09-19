/**
 * Created by Superwen on 16/6/2.
 */
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Row,Col } from 'antd';
import ModuleCard from '../components/card';
import _ from 'underscore';
import { getPage } from '../actions'

class IndexContainer extends Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.props.getPage('index');
    }
    render() {
        const { page } = this.props;
        const containerStyle = {
            padding: 10
        };
        const layoutStyle = {
            marginBottom: 10
        };
        const cardData = _.findWhere(page.modules,{name: 'moduleCard'})?
            _.findWhere(page.modules,{name: 'moduleCard'}).settings:[];
        return (
            <div style={containerStyle}>
                <Row gutter={10}>
                    {
                        cardData.map(function(item, key) {
                            return (
                                <Col style={layoutStyle} key={key} xs={12} sm={6} md={4}>
                                    <ModuleCard card={item} />
                                </Col>

                            )

                        })
                    }
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
)(IndexContainer)
