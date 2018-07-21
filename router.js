import React from 'react';
import { Router, Route, Switch ,routerRedux} from 'dva/router';
import dynamic from 'dva/dynamic'
const {ConnectedRouter}=routerRedux


function RouterConfig({ history ,app}) {
  return (
    <ConnectedRouter history={history}>
      <div className="app">
        <Switch>
          <Route path="/" exact component={dynamic({
              app:app,
              models:()=>[import('./models/IndexPage')],
              component:()=>import('./routes/IndexPage')
            })} />
            <Route path="/mine" component={dynamic({
              app:app,
              models:()=>[],
              component:()=>import('./routes/myInfo/Mine/mine')
            })}></Route>
            <Route path="/user2" component={dynamic({
              app:app,
              models:()=>[],
              component:()=>import('./routes/myInfo/user2/user2')
            })}></Route>
            <Route path="/register" component={dynamic({
              app:app,
              models:()=>[import('./models/myInfo/Register/register')],
              component:()=>import('./routes/myInfo/register/register')
            })}></Route>       
            <Route path="/user" component={dynamic({
              app:app,
              models:()=>[],
              component:()=>import('./routes/myInfo/user/user')
            })}></Route>    
            <Route path="/information" component={dynamic({
              app:app,
              models:()=>[],
              component:()=>import('./routes/myInfo/Information/Information')
            })}></Route> 
            <Route path="/custom" component={dynamic({
              app:app,
              models:()=>[],
              component:()=>import('./routes/myInfo/custom/custom')
            })}></Route> 
            <Route path="/address" component={dynamic({
              app:app,
              models:()=>[import('./models/myInfo/Address/address')],
              component:()=>import('./routes/myInfo/Address/Address')
            })}></Route>   
            <Route path="/addp1" component={dynamic({
              app:app,
              models:()=>[import('./models/myInfo/Addp1/address')],
              component:()=>import('./routes/myInfo/Addp1/address')
            })}></Route>
            <Route path="/addp2" component={dynamic({
              app:app,
              models:()=>[import('./models/myInfo/Addp2/address')],
              component:()=>import('./routes/myInfo/Addp2/address')
            })}></Route>
            <Route path="/place" component={dynamic({
              app:app,
              models:()=>[import('./models/myInfo/Place/place')],
              component:()=>import('./routes/myInfo/Place/place')
            })}></Route>
            <Route path="/shopList" component={dynamic({
              app:app,
              models:()=>[import('./models/shopCart/shopCartList/shopList')],
              component:()=>import('./routes/shopCart/ShopCartList/shopList')
            })}></Route>
             <Route path="/nearbyStore" component={dynamic({
              app:app,
              models:()=>[import('./models/store/nearbyStore/nearbyStore')],
              component:()=>import('./routes/store/nearbyStore/nearbyStore')
            })}></Route>
            <Route path="/nearbyMap" component={dynamic({
              app:app,
              models:()=>[import('./models/store/nearbyMap/map')],
              component:()=>import('./routes/store/nearbyMap/map')
            })}></Route>
        </Switch>
      </div>
    </ConnectedRouter>
  );
}

export default RouterConfig;


{/* <Route path="/mine" component={dynamic({
          app:app,
          models:()=>[],
          component:()=>import('./routes/myInfo/Mine/mine')
        })}></Route>
        <Route path="/user2" component={dynamic({
          app:app,
          models:()=>[],
          component:()=>import('./routes/myInfo/user2/user2')
        })}></Route>
        <Route path="/register" component={dynamic({
          app:app,
          models:()=>[import('./models/myInfo/Register/register')],
          component:()=>import('./routes/myInfo/register/register')
        })}></Route>       
        <Route path="/user" component={dynamic({
          app:app,
          models:()=>[],
          component:()=>import('./routes/myInfo/user/user')
        })}></Route>    
        <Route path="/information" component={dynamic({
          app:app,
          models:()=>[],
          component:()=>import('./routes/myInfo/Information/Information')
        })}></Route> 
        <Route path="/address" component={dynamic({
          app:app,
          models:()=>[],
          component:()=>import('./routes/myInfo/Address/Address')
        })}></Route>   
        <Route path="/addp1" component={dynamic({
          app:app,
          models:()=>[import('./models/myInfo/Addp1/address')],
          component:()=>import('./routes/myInfo/Addp1/address')
        })}></Route>
        <Route path="/addp2" component={dynamic({
          app:app,
          models:()=>[import('./models/myInfo/Addp2/address')],
          component:()=>import('./routes/myInfo/Addp2/address')
        })}></Route>
        <Route path="/place" component={dynamic({
          app:app,
          models:()=>[import('./models/myInfo/Place/place')],
          component:()=>import('./routes/myInfo/Place/place')
        })}></Route> */}