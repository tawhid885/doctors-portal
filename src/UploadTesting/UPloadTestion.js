import React, { useState } from 'react';

const UPloadTestion = () => {
    const [image, setImage] = useState("");
    const convertBase64=(e)=>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])
        reader.onload=()=>{
            console.log(reader.result)
            setImage(reader.result)
        }
        reader.onerror =error=>{
            console.log("error ", error)
        }
        // console.log(e.target.files[0])
    }
    return (
        <div>
            <h2>this is upload page</h2>
            <input
            type="file"
            onChange={convertBase64}
            />
            <br/>
            {
                image=="" || image==null ? "": 
                <img scr={image} height={100} width={100}/>
            }
            
        </div>
    );
};

export default UPloadTestion;