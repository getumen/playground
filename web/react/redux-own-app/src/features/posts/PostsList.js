import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactionButton } from './ReactionButtons'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'

export const PostsList = () => {
    const posts = useSelector(state => state.posts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article class="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <div>
                <PostAuthor userID={post.user} />
                <TimeAgo timestamp={post.date} />
            </div>
            <p>{post.content.substring(0, 100)}</p>
            <ReactionButton post={post} />
            <Link to={`/post/${post.id}`} className="button muted-button">
                View Post
            </Link>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
