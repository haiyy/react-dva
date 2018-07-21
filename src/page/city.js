import React, { Component } from 'react'
import dva from "dva"
import { connect } from 'dva'
import styles from "./city.css";
import List from '../components/list.js';

class City extends Component {
    constructor(props) {
        super(props)
        this.state = {
            float: false,
            ind: 0,
            txt: "A"
        }
        this.test = this.test.bind(this);
        this.active = this.active.bind(this);
        this.callback = this.callback.bind(this);
    }
    render() {
        let { city, list } = this.props.city;
        let { float, ind, txt } = this.state;
        return (
            <div className={styles.warp}>
                <header className={styles.header}>
                    <h1 onClick={this.test}>city</h1>
                </header>
                {
                    float && <div className={styles.listBox}>
                        <ul className={styles.list} ref="Oul">
                            {
                                city.map((item, index) => {
                                    return <List
                                        callback={this.callback}
                                        item={item}
                                        txt={txt}
                                        key={index + 33}></List>
                                })
                            }
                        </ul>
                        <ol>
                            {
                                city.map((value, i) => {
                                    return <li
                                        onClick={() => { this.active(i, value.Alpha) }}
                                        className={ind == i ? styles.active : ""}
                                        key={i}>
                                        {value.Alpha}
                                    </li>
                                })
                            }
                        </ol>
                    </div>
                }
            </div>
        )
    }

    componentWillMount() {
        this.props.dispatch({
            type: 'city/UpDataList',
            payload: '更新成功'
        })
    }

    test() {
        console.log(this.props.city)
        this.setState({
            float: !this.state.float
        })
    }
    callback(OTop) {
        if (OTop) {
         this.refs.Oul.scrollTop=OTop.offsetTop-35
        }
    }
    active(i, val) {
        this.setState({
            ind: i,
            txt: val
        });
        // console.log(this.refs.Oul.scrollTop=this.refs.Oul.querySelectorAll("li")[i].offsetTop)
    }
}
export default connect(state => {
    return {
        city: state.city
    }
})(City)