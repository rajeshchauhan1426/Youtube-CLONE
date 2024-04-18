
import { Inter } from "next/font/google";
import { VideoGrid } from "@/Components/VideoGrid";
import App from "next/app";
import { AppBar } from "@/Components/AppBar";


export default function Home() {
  return (
   <div>
    <AppBar/>
     <VideoGrid/>
     
   </div>
  );
}
