import React,{useState, useEffect}from 'react';
import InfiniteScroll from 'react-infinite-scroll-component'
import './App.css';
const accessKey = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
export default function App2() {
    const[images, setImages] = useState(['']);
    const[page, setPage] = useState("");
    const[query, setQuery] = useState("");
useEffect(()=>{
    getPhotos();
},[page]);
if(!accessKey){
    return (
        <a href="https://unsplash.com/developers" className="error">Required Acces key get it here</a>
    );
}

    function getPhotos(){
        fetch(`https://api.unsplash.com/photos?client_id=${accessKey}&page=${page}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setImages((images) => [...images, ...data])
        }).catch(err=> console.log(err))
    }
    const  handleSubmit = (e)=>{
        e.preventDefault();
        fetch(`https://api.unsplash.com/photos?client_id=${accessKey}&page=${page}&query=${query}`)
        .then((res)=> res.json())
        .then((data) => {
            setImages(data.results)
        }).catch(err=> console.log(err))
    }
    return (
        <div className='app'>
            <h1>Unsplash Image Gallery!</h1>
            <form onSubmit={handleSubmit}></form>
 <InfiniteScroll
  dataLength={images.length} //This is important field to render the next data
  next={() => setPage(page + 1)}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{textAlign: 'center'}}>
      <b>Yay! You have seen it all</b>
    </p>
  }>
  <div className="image-grid">
      {images.map((image,index)=>{
          return (
              <a className="image" key={index} href={image.links.html} target="_blank" rel="noopener noreferrer">
              <img 
              src={image.urls.regular}
              alt={image.alt_description}
              value={query}
              onChange={(e)=>{
                  setQuery(e.target.value)
              }}/></a>
          )
      })}
  </div>
</InfiniteScroll>
    </div>
    )
}
