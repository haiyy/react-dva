import React, { Component } from "react";

class List extends Component {
    render() {
        let { item, txt } = this.props;
        if (txt == item.Alpha) {
            this.props.callback(this.refs.Uli)
        }
        return (
            <li ref="Uli">
                <h2 ref="h2">{item.Alpha}</h2>
                {
                    item.CityList.map((val, ind) => {
                        return <p key={ind * 10}>{val.CityName}</p>
                    })
                }
            </li>
        )
    }
    componentDidMount() {
        let { item, txt } = this.props;
        
    }

}
export default List;