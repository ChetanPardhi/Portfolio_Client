import React, { useState } from 'react'
import './comment.css'
import UserImg from './user.png'

const Comment = () => {

    const[comment, setComment] = useState("");

    const receivedComments=[
        {
            name : 'Ashish',
            comment : 'Nice Blog'
        },
        {
            name : 'Aman',
            comment : 'Nice Intro, Here are some tips and for using <br> tags in HTML code. Note that these are "quick and dirty" approaches for making text look the way you want. As you get better with HTML, you will want to use CSS to style your text.'
        },
        {
            name : 'Dency',
            comment : 'Nice Outro'
        },
        {
            name : 'Ashish',
            comment : 'Nice Blog'
        },
        {
            name : 'Aman',
            comment : 'Nice Intro'
        },
        {
            name : 'Dency',
            comment : 'Nice Outro'
        },
        {
            name : 'Dency',
            comment : 'Nice Outro'
        },
        {
            name : 'Dency',
            comment : 'Nice Outro'
        }
    ]
    const handleSubmit=(e)=>{
        e.preventDefault();
        //Backend Logic to add Comment
        setComment("")
    }
  return (
    <div className='commentContainer'>
        <div className='commentInput'>
            <div className='recentContainer2'>
                <div className='profile'>
                    <img src={UserImg} alt='user'></img>
                </div>
                <div className='inputCmnt'>
                    <form onSubmit={handleSubmit}>
                        <input 
                            placeholder='Add a Comment'
                            type='text'
                            value={comment}
                            onChange={(e)=>setComment(e.target.value)}
                        />
                    </form>
                </div>
            </div>
        </div>

        <div className='recentContainer'>
            {
                receivedComments.map((receivedComments,index)=>
                (
                    <div key={index} className='comments'>
                        <div className='profile'>
                            <img src={UserImg} alt='user'></img>
                        </div>
                        <div className='data'>
                            <div id='name'>{receivedComments.name}</div>
                            <div className='cmnt'>{receivedComments.comment}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Comment