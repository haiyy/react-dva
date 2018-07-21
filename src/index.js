// import React from 'react'
import dva from 'dva'

import { Router, Route, Switch } from 'dva/router'
import Home from './page/home'
import Classfly from './page/classfly'
import City from "./page/city"
import { updateExportAssignment } from 'typescript';
import http from "./utils/http.js";
import data from "./data/city.js";
import "./index.css"

// 创建应用，返回 dva 实例
let app = dva()
//注册 model
app.model({
    namespace: 'count',
    state: 0,
    reducers: {
        add(count, action) { return count + 1 },
        minus(count) { return count - 1 },
    }
})
app.model({
    namespace: 'city',
    state: {
        list : {}
    },
    reducers: {
        UpList(state, { payload }) {
            return payload
        }
    },
    // 异步操作
    effects: {
        *UpDataList(action, { dispatch, call, put }) {
            const res = yield call(fetch, '/server/city.json')
            const result = yield res.json()
            yield put({
                type: 'UpList',
                payload: result
            })
        }
    }
})
app.model({
    namespace: 'classfly',
    state: '分类页',
    reducers: {
        update(state, { payload }) {
            return payload
        }
    },
    // 异步操作
    effects: {
        *updateGen(action, { dispatch, call, put }) {
            yield put({
                type: 'update',
                payload: '异步请求数据'
            })
        }
    }
})
//注册路由
app.router(({ history }) => {
    return <Router history={history}>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/home' component={Home}></Route>
            <Route path='/classfly' component={Classfly}></Route>
            <Route path='/city' component={City}></Route>
        </Switch>

    </Router>
})
// 启动应用
app.start('#root')