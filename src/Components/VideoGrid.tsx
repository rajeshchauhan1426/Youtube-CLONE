 import { VideoCard } from "./VideoCard"
 const Videos = [{
    title: "How to Learn Coding in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
    
 },{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }, {
    title: "How to Learn Gaming in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 },{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }
 ,{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }
 ,{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }
 ,{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }
 ,{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }
 ,{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }
 ,{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }
 ,{
    title: "How to Learn playing in 30 days |30 days Plan(Code with Me)",
    image: "photo.png",
    thumbimage: "1.jpg",
    author: "Rajesh Chauhan",
    views: "100k",
    timestamp: "2 days ago"
 }]

 
 export const VideoGrid = () =>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
         {Videos.map(video => <div>
            <VideoCard
    title={video.title}
    image={video.image}
    thumbimage={video.thumbimage}
    author={video.author}
    views={video.views}
    timestamp={video.timestamp}>

     </VideoCard>
         </div>)}
    </div>
 }