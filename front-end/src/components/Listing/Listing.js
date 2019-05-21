import React, { Component } from 'react';
import List from './List/List'
import './Listing.css';
import IconFilter from "../Icon-Filter/Icon-Filter";

class Listing extends Component {

    constructor(props) {
        super(props);

        //function bindings
        this._handleFilterChanged = this._handleFilterChanged.bind(this);

        let array = [
            {
                title: 'Movies',
                childs:[{
                    os: ['android'],
                    name: 'Android Only',
                    descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                },
                {
                    os: ['android','ios','desktop'],
                    name: 'For all three',
                    descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                },
                {
                    os: ['desktop'],
                    name: 'Desk top only',
                    descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                },
                    {
                        os: ['ios'],
                        name: 'IOS only',
                        descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                    }
                ]
            },
            {
                title: 'Music',
                childs:[{
                    os: ['ios', 'android'],
                    name: 'Both',
                    descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                },
                    {
                        os: ['ios'],
                        name: 'IOS only',
                        descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                    },
                    {
                    os: ['desktop'],
                    name: 'Desktop only 222',
                    descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                }
                ]
            },
            {
                title: 'eMagizines',
                childs:[{
                    os: ['ios', 'android'],
                    name: 'Both',
                    descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                },
                    {
                        os: ['ios', 'android','desktop'],
                        name: ' Where is my eMagizines voucher?',
                        descritpion: 'VUDU is available on almost every internet-connected Blu-ray™ player and HDTV on the market. The app "VUDU Movies and TV" is also available for iPhones and iPads and Android devices 4.3 and up. Visit VUDU for a full list of compatible devices.'
                    }
                ]
            }
        ];

        this.state = {
            lists: array,
            showAndroid: false,
            showDesktop: false,
            showIos: false
        }
    }

    _handleFilterChanged(status) {
        switch (status){
            case 'desktop':
                this.setState({showDesktop: !this.state.showDesktop});
                break;
            case 'android':
                this.setState({showAndroid: !this.state.showAndroid});
                break;
            case 'ios':
                this.setState({showIos: !this.state.showIos});
                break;
            default:
                this.setState({showDesktop: !this.state.showDesktop});
                break;
        }
    }

    _filteredListByName(list, names) {
        if(names.length < 1)
            return list;
        return list.map((parent) => {
            parent.childs = parent.childs.filter(child => names.some(r => child.os.includes(r)));
            return parent;
        });
    }

    _renderList() {
        // used json.parse for deep cloning
        let filteredList = JSON.parse(JSON.stringify(this.state.lists));
        let filters = [];

        if(this.state.showAndroid)
            filters.push('android');

        if(this.state.showIos)
            filters.push('ios');

        if(this.state.showDesktop)
            filters.push('desktop');

        filteredList = this._filteredListByName(filteredList, filters);
        console.log(filteredList);

        return (
            filteredList.map((list, i) => {
                return (
                    <List {...list} key={i}/>
                )
            })
        )
    }

    render() {
        return (
            <div>
                {/*it is temporaray process to pass state variables to child component because there is not store right now*/}
                <IconFilter onChangeFilter={this._handleFilterChanged} {...this.state}/>

                <div className="clearfix">
                </div>

                <div className="listing">
                    <div className="container">
                        {/*<!-- Example row of columns -->*/}
                        <div className="questions-firstclub">
                            <div className="accordion">
                                {this._renderList()}
                            </div>
                        </div>

                        <div className="clearfix">
                        </div>
                        <div className="need-help">
                            <i className="fa fa-question-circle"></i>
                            Need help? Please Contact Us, we are always happy to assist!
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Listing;
