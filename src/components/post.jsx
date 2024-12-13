import React from 'react'
import Comment from './comment'
import { useState } from 'react'
import { useRef } from 'react'

function Post() {

    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)
    const [share, setShare] = useState(false)

    const commentRef = useRef(null)    
    const toogleLike = () => {
            setLike(!like)
   }
   const toogleSave = () => {
       setSave(!save)
   }
   const toogleShare = () => {
       setShare(!share)
   }

   const commentFocus = () => {
       if (commentRef.current) {
           commentRef.current.focus()
       }
   }

    return (
        <>
            <div className="card cardd mb-3 container" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4 image">
                        <img src="https://www.w3schools.com/css/img_5terre_wide.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className='actions'>
                        <img onClick={toogleLike} src={like?'.\\src\\icons\\liked.png':'.\\src\\icons\\like.png'} alt="like" />
                        <img onClick={commentFocus} src=".\src\icons\comment.png" alt="comment" />
                        <img onClick={toogleSave} src={save?'.\\src\\icons\\saved.png':'.\\src\\icons\\save.png'}  alt="save" />
                        <img onClick={toogleShare} src={share?'.\\src\\icons\\shared.png':'.\\src\\icons\\share.png'}  alt="share" />
                    </div><hr />
                    <Comment commentRef={commentRef}/>

                </div>
            </div>
        </>
    )
}

export default Post