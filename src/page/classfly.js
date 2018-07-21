import React ,{Component} from 'react'
import {connect} from 'dva';


class Classfly extends Component {
    render() {
        return (
            <div>
                <h1 onClick={this.change.bind(this)}>{this.props.classfly}</h1>
                <h1 onClick={this.Genfn.bind(this)}>async</h1>
            </div>
        )
    }
    change(){
        this.props.dispatch({
            type:'classfly/update',
            payload:'更新成功'
        })
    }
    Genfn(){
        this.props.dispatch({
            type:'classfly/updateGen',
            payload:'异步函数'
        })
    }
}
export default connect(state=>{
    return {
        classfly:state.classfly
    }
})(Classfly)