import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNav from './BTNav'

export default class
    extends Component {
    render() {
        return (
            <div>
                <BTHeader></BTHeader>
                <div className='d-flex'>
                    <div className='w-25'>
                        <BTNav></BTNav>
                    </div>
                    <div className='w-75'>
                        <BTContent></BTContent>
                    </div>
                </div>
                <div>
                    <BTFooter></BTFooter>
                </div>
            </div>
        )
    }
}
