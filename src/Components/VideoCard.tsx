 export  function VideoCard(Props :any){
    return <div className="p-3">
          <img src={Props.image} className="rounded-3xl"></img>
          <div className="grid grid-cols-12">
            <div className="col-span-2  ">
            <img src={Props.thumbimage} className="rounded-full w-20 h-20 " ></img>
            </div>
            <div className="col-span-10 ">
                <div>
               {Props.title}
                </div>
            <div className="col-span-11  text-gray-400  text-base">
                {Props.author}
            </div>
            <div className="col-span-11  text-gray-400  text-base"> 
                {Props.views} | {Props.timestamp}

            </div>
          </div>
                </div>
            
        </div>
    
}