import { useState } from "react"

function BlogList(){
    const [posts, setPosts] = useState([])
    const [comment, setComment] = useState('')
    async function fetchComments(){
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data)
    }
    async function submitComment(){
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({comment}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        setComment('')
    }
    async function deleteComment(commentId){
        const response = await fetch(`/api/posts/${commentId}`, {
            method: 'DELETE',
        })
        const data = await response.json()
        fetchComments()
    }
    return (
        <>
            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}></input>
            <button onClick={submitComment} className={'btn btn-primary'}>Submit comment</button>
            <button onClick={fetchComments} className={'btn btn-warning'}>Load comments</button>
            {
                posts.map(post => {
                    return (
                        <div key={post.id} className={'text-primary'}>
                            {post.id} {post.text} <button onClick={() => deleteComment(post.id)}>Delete</button>
                        </div>
                    )
                })
            }
        </>
    )
}

export default BlogList