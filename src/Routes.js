import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

let state = {
    isAuthenticated: false,
};

const setGlobalState = object => {
    state = {
        ...state,
        ...object,
    };
};

const getGlobalState = (key = null) => {
    if (key && state.hasOwnProperty(key)) {
        return state[key];
    }

    return null;
};

const Import = props => {
    const Component = lazy(() => import(`./components/${props.component}`));

    return (
        <Suspense fallback={<div>Loading</div>}>
            <Component {...props} setGlobalState={setGlobalState} getGlobalState={getGlobalState} />
        </Suspense>
    );
};

const PublicRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props => Import({ component, ...props })} />
);


const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={props =>
            getGlobalState('isAuthenticated') === true
                ? Import({ component, ...props })
                : <Redirect to="/" />
        }
    />
);

export const Router = () => (
    <BrowserRouter>
        <Switch>
            <PublicRoute exact path="/" component="Home" />
            <PrivateRoute exact path="/private" component="Search" />
            {/* <Route exact path="/" render={props => Import({ name: 'Search', ...props })} /> */}
            <Route path="*" component={() => <div>ERROR</div>} />
        </Switch>
    </BrowserRouter>
);

