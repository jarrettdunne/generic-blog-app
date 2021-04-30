import React, { useEffect, useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'

import Home from '../screens/Home'
import PostCreate from '../screens/PostCreate'
import PostDetail from '../screens/PostDetail'
import PostEdit from '../screens/PostEdit'
import UserHome from '../screens/UserHome'

import { getAllPosts, postPost, putPost, deletePost } from '../services/posts'

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

    const handleCreate = async (formData) => {
        const data = await postPost(formData);
        setPosts(prevState => [...prevState, data])
        history.push('/')
    }
    
    const handleEdit = async (id, formData) => {
        const foodData = await putPost(id, formData);
        setPosts(prevState => prevState.map(food => {
            return food.id === Number(id) ? foodData : food
        }))
        history.goBack()
    }

    const handleDelete = async (id) => {
        await deletePost(id);
        setPosts(prevState => prevState.filter(i => i.id !== id))
        history.goBack()
    }

    return (
        <Switch>
            <Route path='/user/:id/posts'>
                <UserHome handleDelete={handleDelete} />
            </Route>
            <Route path='/posts/create'>
                <PostCreate handleCreate={handleCreate} />
            </Route>
            <Route path='/posts/:id/edit'>
                <PostEdit posts={posts} handleEdit={handleEdit} />
            </Route>
            <Route path='/posts/:id'>
                <PostDetail posts={posts} />
            </Route>
            <Route path='/'>
                <Home posts={posts} />
            </Route>
        </Switch>
    )
}
