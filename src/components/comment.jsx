import React from 'react'
import { useState } from 'react'

function Comment({commentRef}) {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    

    
    const handlePost = () => {
        setComments(props => [{id:comment, comment, liked:false}, ...props])
        setComment('')
    }
    
    const toogleLike = (id) => {
        setComments(props => {
           return props.map(comment => {
              return  comment.id === id? {...comment, liked:!comment.liked} : comment
            })
        })
    }


    return (
        <>
            <div className="form-floating comment">
                <textarea ref={commentRef} onChange={(e) => setComment(e.target.value)} value={comment} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
                <label htmlFor="floatingTextarea2">Comments</label>
                <button disabled={comment.length <= 1} onClick={handlePost} type="button" className="btn btn-dark">Post</button>
            </div>
            <div className="commentSection">
                <div className="text">
                {comments.map((props) => {return  <div key={props.comment} className="card w-75 mb-3">
                         <div className="box">
                            <div className="profile"><img src=".\src\icons\user.png" alt="" /></div>
                            <div className="card-body">
                                <h5 className="card-title">user</h5>
                                <p className="card-text">{props.comment}</p>
                                <div className='actions2'>
                                    <img onClick={() => toogleLike(props.id)} src={props.liked?'.\\src\\icons\\liked.png':".\\src\\icons\\like.png"} alt="like" />
                                    <img src=".\src\icons\comment.png" alt="comment" />
                                </div>
                            </div>
                        </div>
                    </div>})}

                </div>
            </div>
        </>
    )
}

export default Comment