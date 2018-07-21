import React ,{Component} from 'react'
import {connect} from 'dva'

class Home extends Component {
    render() {
        return (
            <div>
                <button onClick={this.minus.bind(this)}>-</button>
                <h2>{ this.props.count }</h2>
                <button onClick={this.add.bind(this)}>+</button>
            </div>
        )
    }
    add(){
        this.props.dispatch({
            type:'count/add'
        })
    } 
    minus(){
        this.props.dispatch({
            type:'count/minus'
        })
    }
}
export default connect(({count})=>{
    return {
        count
    }
})(Home)