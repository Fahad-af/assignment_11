'use client'
import React, { useEffect, useState } from 'react'
import Menu from '../component/Menu'
import Link from 'next/link'

const page = () => {
        const [data ,setdata]= useState([ ])
     async function getdata(){
           const res= await fetch('https://jsonplaceholder.typicode.com/posts')
           if(res.status==200){
             const  data1 = await res.json();
             return data1
           }
           else{
            return []
           }
      }
      useEffect(()=>{
         (async()=>{
            const data2 =await getdata()
            setdata(data2.slice(0,10))
         })()
      },[])
    console.log(data)
  return (
    <div >
       <Menu/>
        
        <center><h1 className='text-danger'>Welcome latest blog</h1></center>
        {
            data.map((item,index)=>{
                  return <div key={index} className=''>
                        
                        <div class="card w-100">
  <div class="card-body align-baseline">
    <h5 class="card-title text-primary">{item.title}</h5>
    <p class="card-text text-body">{item.body.slice(0,30)}</p>
    
    <Link href={{pathname:'/blogpast',query:{title:item.title,body:item.body}}} className='btn btn-primary'> go to full read</Link>
  </div>
</div>
                       
                       
                       
                        <div>



         
                        </div>
                  </div>
            })
        }
   
    </div>
  )
}

export default page