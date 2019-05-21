import React, { Component } from 'react';

class IconFilter extends Component {
    constructor(props) {
        super(props);
        //functions binding
        this._changeFilter = this._changeFilter.bind(this);
    }

    _changeFilter(newStatus){
        this.props.onChangeFilter(newStatus);
    }

    render() {
        let {showAndroid, showDesktop, showIos} = this.props;
        console.log(this.props);
        return (
            <div className="descktop-ios-wrapp">
                <div className="container">
                    <div className="descktop-ios-inner">
                        <div className="dii-col dii-col-1 cursor-pointer" onClick={() => {this._changeFilter('desktop')}}>
                            <div className="image">
                                <img alt="image36" src={require(showDesktop ? '../../assets/descktop-icon.png' : '../../assets/descktop-icon-inactive.png')}/>
                            </div>
                            <h4>Desktop</h4>
                            <p>PC/MAC</p>
                        </div>
                        <div className="dii-col dii-col-2 cursor-pointer" onClick={() => {this._changeFilter('android')}}>
                            <div className="image">
                                <img alt="image22" src={require(showAndroid ? '../../assets/android-icon.png' : '../../assets/android-icon-inactive.png')}/>
                            </div>
                            <h4>Android</h4>
                        </div>
                        <div className="dii-col dii-col-3 cursor-pointer" onClick={() => {this._changeFilter('ios')}}>
                            <div className="image">
                                <img alt="image44" src={require(showIos ? '../../assets/apple-icon.png' : '../../assets/apple-icon-inactive.png')}/>
                            </div>
                            <h4>IOS</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IconFilter;
