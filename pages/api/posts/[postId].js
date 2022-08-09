import { posts } from '../../../posts'

export default function handler(req,res){
    const { postId } = req.query
    if(req.method === 'GET'){
        const post = posts.find(post => post.id === parseInt(postId))
        res.status(200).json(post)
    }else if(req.method === 'DELETE'){
        const deletedPost = posts.find(post => post.id === parseInt(postId))
        const index = posts.findIndex(post => post.id === parseInt(postId))
        posts.splice(index, 1)
        res.status(200).json(deletedPost)
    }
}