import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../screens/Home'
import PostCreate from '../screens/PostCreate'
import PostDetail from '../screens/PostDetail'
import PostEdit from '../screens/PostEdit'
import UserHome from '../screens/UserHome'

export default function MainContainer() {
    return (
        <Switch>
            <Route>
                <Home />
            </Route>
            <Route>
                <PostCreate />
            </Route>
            <Route>
                <PostDetail />
            </Route>
            <Route>
                <PostEdit />
            </Route>
            <Route>
                <UserHome />
            </Route>
        </Switch>
    )
}
