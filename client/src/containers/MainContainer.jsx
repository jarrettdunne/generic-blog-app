import React, { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import Home from '../screens/Home'
import PostCreate from '../screens/PostCreate'
import PostDetail from '../screens/PostDetail'
import PostEdit from '../screens/PostEdit'
import UserHome from '../screens/UserHome'

import { getAllPosts } from '../services/posts'
// import { deleteFood, getAllFoods, postFood, putFood } from '../services/foods'

export default function MainContainer(props) {
    const [posts, setPosts] = useState([])

    const history = useHistory()
    // const { currentUser } = props

    useEffect(() => {
        const fetchPosts = async () => {
            const postData = await getAllPosts()
            setPosts(postData)
        }
        fetchPosts()
    }, [])


    return (
        <Switch>
            <Route path='/posts/create'>
                <PostCreate />
            </Route>
            <Route path='/posts/:id/edit'>
                <PostEdit />
            </Route>
            <Route path='/posts/:id'>
                <PostDetail posts={posts} />
            </Route>
            <Route path='/user'>
                <UserHome />
            </Route>
            <Route path='/'>
                <Home posts={posts} />
            </Route>
        </Switch>
    )
}
