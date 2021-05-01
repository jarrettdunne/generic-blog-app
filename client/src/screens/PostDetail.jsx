import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getOnePost } from '../services/posts'

import CommentCreate from '../components/CommentCreate'
import PostMain from '../components/PostMain'
import Comment from '../components/Comment'

import './styles/PostDetail.css'

export default function PostDetail(props) {
    const params = useParams()
    const [ post, setPost ] = useState(null)
    const { currentUser } = props

    useEffect(() => {
        const fetchPost = async (id) => {
            const postData = await getOnePost(params.id)
            setPost(postData)
        }
        fetchPost()
    }, [params.id])

    return (
        <div>
            <div className="post-detail-wrapper" >
                {post && <PostMain post={post} />}
            </div>
            <CommentCreate currentUser={currentUser} />
            {post &&
                post.comments.length !== 0
                ?
                <div className="comments-wrapper">
                    {
                        post.comments.map((v, i) => (
                            <Comment key={i} comment={v} />
                        ))
                    }
                </div>
                :
                <div className="comments-wrapper"></div>
            }
        </div>
    )
}
