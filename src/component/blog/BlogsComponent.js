import './blogComponent.css';
import test1 from '../static/test1.jpg';
import plus from "../static/plus.png";
import React, { useEffect, useState } from 'react'

import { AiOutlineDelete,AiFillEdit } from 'react-icons/ai';
const BlogComponents = () => {
    const adminEmail="chetal@gmail.com";
    const [check,setCheck]=useState(true);
    useEffect(()=>{
        const email=sessionStorage.getItem("email");
        if(email===adminEmail){
            setCheck(true);
        }
    },[])
    return ( <>
    <div className="blog-content">
        {check &&
        <div className="blog-create-card">
            <div className="create-h1">
            <img src={plus} alt="plus" />
            </div>
            
        </div>}
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit className="action"/>
                    <AiOutlineDelete className="action"/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
        <div className="blog-allcontent">
            <div className="blog-img-content">
                <div className="blog-action">
                    <AiFillEdit/>
                    <AiOutlineDelete/>
                </div>
            </div>
            <div className="blog-title-content">
                <p>This is title</p>
            </div>
        </div>
    </div>
    </> );
}
 
export default BlogComponents;