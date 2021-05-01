import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { getOnePost } from '../services/posts'
import PostMain from '../components/PostMain'
import Comment from '../components/Comment'

import './styles/PostDetail.css'

export default function PostDetail(props) {
    const params = useParams()
    const [ post, setPost ] = useState(null)

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
            <form className="create-comment-wrapper">
                <textarea className="create-comment-textarea" placeholder="What are your thought?" name="" id="" cols="0" rows="0"></textarea>
                <div className="comment-create-options">
                    <input className="comment-create-submit" type="submit" value="Comment" />
                </div>
            </form>
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
