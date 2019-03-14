import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ExampleOne from './components/ExampleOne';
import ExampleThree from './components/ExampleThree';
import ExampleFour from './components/ExampleFour';
import ExampleFive from './components/ExampleFive';
import ExampleSix from './components/ExampleSix';

import Airports from './components/Airports';
import { Data } from './components/Data';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/exampleOne" component={ExampleOne} />
                <Route exact path="/exampleThree" component={ExampleThree} />
                <Route exact path="/exampleFour" component={ExampleFour} />
                <Route exact path="/exampleFive" component={ExampleFive} />
                <Route exact path="/exampleSix" component={ExampleSix} />
                <Route exact path="/" component={props => <Airports {...props} Data={Data} />} />
                
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
