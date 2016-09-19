import React, { Component, PropTypes } from 'react'

import { Card } from 'antd';
import 'antd/dist/antd.css';
import '../styles/card/card.scss'

export default class ModuleCard extends Component {

    render() {
        const { card } = this.props;
        let lang = 'zh';
        return (
            <Card style={{ width: '100%' }} bodyStyle={{ padding: 0 }}>
                <div className="custom-image">
                    <img alt={card.title[lang]} width="100%" src={card.value} />
                </div>
                <div className="custom-card">
                    <h3>{card.title[lang]}</h3>
                    <p>{card.desc[lang]}</p>
                </div>
            </Card>
        )
    }
}