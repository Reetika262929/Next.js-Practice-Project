import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
<div className="container" style={{padding:"100px"}}>
  <div class="row" >
    <div class="col-lg-8" style={{float:"left",marginBottom:"30px;"}}>
      <h1 class="main1-head">Online Market With The Biggest Product Choise</h1>
      <p class="con">In our online store the biggest choise of products on the planet.  Free <br/>delivery and a lot of benefit for you yet.</p>
      <button type="submit" class="btn btn"  id="btn" value="submit">Get Discount for $99</button>
    </div>
     <div class="col-lg-4" style={{float:"right"}}>
      <img src="/img/pro.png" />
     </div>

  </div>

  <div class="row" style={{clear:"both",marginTop:"120px",marginBottom:"30px"}}>
  
    <div class="col-lg-2">
    
    
        <img src="/img/img1.png" />
        </div>
      <div class="col-lg-2">
        <h1 class="pro-title">iPhone XR</h1>
        <p class="pro-content">Super Retina in two sizes — including the largest display ever on the iPhone</p>
        <button type="submit" class="btn btn" id="btn1" value="submit">$729</button>
        </div>
   
 
        <div class="col-lg-2">
    
    
    <img src="/img/img2.png" />
    </div>

    <div class="col-lg-2">
        <h1 class="pro-title">iPhone XR</h1>
        <p class="pro-content">Super Retina in two sizes — including the largest display ever on the iPhone</p>
        <button type="submit" class="btn btn" value="submit" id="btn1">$729</button>
        </div>
   

    <div class="col-lg-2">
    
    
        <img src="/img/img3.png" />
        </div>
        <div class="col-lg-2">
        <h1 class="pro-title">iPhone XR</h1>
        <p class="pro-content">Super Retina in two sizes — including the largest display ever on the iPhone</p>
        <button type="submit" class="btn btn" value="submit" id="btn1">$729</button>
        </div>
   
    
  </div>


<div class="row"  style={{marginTop:"100px"}}>
  <div class="col-lg-5">

  <div class="row" style={{padding:"30px"}} id="row2">
    <div class="col-lg-8">
    <p class="sub-head" style={{marginTop:"0px"}}>Apple</p>
      <h2 class="main-head" style={{marginTop:"-10px"}}><b>iMac 27”</b></h2>
      <p class="para" style={{marginTop:"0px"}}>   • 1TB hard drive<br/>
• Two Thunderbolt 3 ports<br/>
• 16GB DDR4 memory</p>
    </div>
      <div class="col-lg-4">
        <img src="/img/img5.png" style={{display:"block",margin:"auto " ,marginTop:"0px",marginLeft:"-80px"}}/>
      </div>
      <div class="row">
<div class="col-lg-6">
  <button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"-80px"}}><b>Add to Cart</b></button> 
  </div>
  <div class="col-lg-6">
  <p class="pri" style={{marginTop:"-80px",marginLeft:"-70px"}}> $4259</p>
  </div>
  </div>




    </div>


    <div class="row" style={{padding:"30px"}} id="row2">
    <div class="col-lg-8">
      <p class="sub-head">Apple</p>
      <h2 class="main-head" style={{marginTop:"-10px"}}><b>MacBook Pro 15”</b></h2>
  <p class="para" style={{marginTop:"0px"}}>    • 500Gb hard drive<br/>
• Two Thunderbolt 2 ports<br/>
• 8GB DDR4 memory </p>
    </div>
      <div class="col-lg-4">
        <img src="/img/img6.png" style={{display:"block",margin:"auto" ,marginTop:"0px",marginLeft:"-80px"}}/>
      </div>
      <div class="row">
<div class="col-lg-6">
<button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"-80px"}}><b>Add to Cart</b></button> 
  </div>
  <div class="col-lg-6">
    <p class="pri" style={{marginTop:"-80px",marginLeft:"-70px"}}> $4259</p>
  </div>
  </div>



  
    </div>
  </div>
  <div class="col-lg-6" style={{padding:"30px",marginLeft:"50px"}} id="row2">
<p class="sub-head" style={{marginTop:"0px"}}>Dji mavic 2 pro</p>
<p class="main-head" style={{marginTop:"-0px"}}><b>Quadrocopter  White</b></p>
<div class="row">
  <div class="col-lg-6">
  
 <p class="para" style={{marginTop:"0px"}}>  • 4K Stabilized Camera<br/>
• Flight Performance</p>

   
  </div>
  <div class="col-lg-6">
  
  <p class="para" style={{marginTop:"-20px"}}> • 4K Stabilized Camera<br/>
• Flight Performance
</p>
  
 </div>
</div>
<img src="/img/img4.png"  style={{display:"block",margin:"auto"}}/>
<p class="para" style={{marginTop:"30px"}}> A quadcopter is multi-rotor copter with four arms, each of which has a motor and a propeller at their ends. </p>
<div class="row">
<div class="col-lg-6">
<button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"20px"}}><b>Add to Cart</b></button> 
  </div>
  <div class="col-lg-6">
  <p class="pri" style={{marginTop:"20px",marginLeft:"-100px"}}> $799</p>
  </div>
  </div>
</div>
  </div>
  </div>



    </>
  )
}
