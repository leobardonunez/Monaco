import React from 'react';
import { Switch , Route} from 'react-router-dom';


//Import components
import Dashboard from './Dashboard';
import Almacen from './Almacen';
import Layout from './Layout';
import Error404 from './Error404';
import Terminales from './Terminales';



class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/almacen" exact component={Almacen} />
                <Route path="/layout" exact component={Layout} />
                <Route path="/terminales" exact component={Terminales}/>
                <Route path="*" component={Error404} />
            </Switch>
        );
    }
}

export default Routes;