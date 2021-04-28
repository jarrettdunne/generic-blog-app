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
            <Route path='/posts/:id/edit'>
                <PostEdit />
            </Route>
            <Route path='/posts/:id'>
                <PostDetail />
            </Route>
            <Route path='/posts/create'>
                <PostCreate />
            </Route>
            <Route path='/user'>
                <UserHome />
            </Route>
            <Route path='/'>
                <Home />
            </Route>
        </Switch>
    )
}
