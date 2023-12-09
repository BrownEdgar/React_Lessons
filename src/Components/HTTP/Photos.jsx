import React,{useState, useEffect} from 'react'
import axios from "axios";
export default function Photos() {
const [photos, setPhotos] = useState({
    photos:[],
    path:''
})
    useEffect(() => {
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/photos?_limit=10'
        }).then(res => {
            console.log('res', res)
    setPhotos({
     photos: res.data,
     path:res.config.url});
        }).catch(err => console.log('err', err))
    },[])
    return (
        <div>
            <ul>
                {photos.photos.map((item, index)=>{
                    return <li key={index}>{item.title}</li>
                })}
					</ul>
        </div>
    )
}
