import React from 'react'

import PostMain from '../components/PostMain'

export default function Home() {
    const arr = [...Array(10).keys()]

    const posts = () => {
        return arr.map((v, i) => (
            <div key={i}>
                <PostMain />
            </div>
        ))
    }

    return (
        <div>
            {posts()}
        </div>
    )
}
