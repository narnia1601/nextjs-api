import { posts } from '../../../posts'

export default function handler(req,res){
    if(req.method === 'GET'){
        res.status(200).json(posts)
    }else if(req.method === 'POST'){
        const post = req.body.comment
        const newComment = {
            id: Date.now(),
            text: post
        }
        posts.push(newComment)
        res.status(200).json(newComment)
    }
}