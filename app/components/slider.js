import React, { Component, PropTypes } from 'react'

import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import '../styles/slider/slider.scss'

export default class Slider extends Component {

    render() {
        const { slides } = this.props;
        return (
            <Carousel autoplay arrows="true">
                {
                    slides.map(function(item, key) {
                        return <div key={key}><a className="img-container" href={item.href} style={{backgroundImage: 'url('+ item.value +')'}}></a></div>

                    })
                }
            </Carousel>
        )
    }
}