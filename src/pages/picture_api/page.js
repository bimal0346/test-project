import {useState} from 'react';
import axios from 'axios';
import  {Images} from './picture_api/Components/Images';
function abc(){
const[images, setImages]=useState([]);

    const photoaau=async()=>{     //photo aauna api bata time lagcha vane async function ie asynchronous use huncha
        const response = await axios.get('https://api.unsplash.com/photos/?client_id=IzqxgH5H12qm-moTnGJJSRO1tCreDcKf8K6U8rq0VGQ');
        console.log(response.data);
        const data  =await response.data;
        setImages(data);

    }

    return(
        <div className="container">
            <br />
            <button className="btn btn-primary btn-md" onClick={photoaau}>Click here to see images </button>
            <br />
            <div className="photos"></div>
            {images.length>0&&(
                image ={images}    //images ko components banako  use props karo
           <image />
           )}
        </div>
    )
}
export default abc;