import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import routes from '../Constans/routes'
import Header from './DefaultHeader/DefaultHeader'
import Footer from './DefaultFooter/DefaultFooter'

function index() {
    return (
        <div>
            <Header />
            <Router>
                <Switch>
                    <React.Suspense fallback={<div>loading</div>}>
                        {
                            routes.map((item , index) => (
                                <Route key={index} path={item.path} exact={item.exact} render={props => <item.component {...props} />} />
                            ))
                        }
                    </React.Suspense>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default index
