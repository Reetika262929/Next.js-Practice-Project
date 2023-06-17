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
    
<div className="container" style={{padding:"20px"}}>
  <div class="row" style={{marginTop:"60px"}}>
    <div class="col-lg-8 col-md-8 col-sm-6 col-xs-6" style={{float:"left",marginBottom:"30px;"}}>
      <h1 class="main1-head">Online Market With The Biggest Product Choice</h1>
      <p class="con">In our online store the biggest choise of products on the planet.  Free <br/>delivery and a lot of benefit for you yet.</p>
      <button type="submit" class="btn btn"  id="btn" value="submit">Get Discount for $99</button>
    </div>
     <div class="col-lg-4 col-sm-6 col-xs-6" style={{float:"right"}}>
      <img src="/img/pro.png"  style={{width:"100%"}}/>
     </div>

  </div>

  <div class="row" style={{clear:"both",marginTop:"120px",marginBottom:"30px"}}>
  
    <div class="col-lg-2">
    
    
        <img src="/img/img1.png"  style={{width:"100%"}}/>
        </div>
      <div class="col-lg-2">
        <h1 class="pro-title">iPhone XR</h1>
        <p class="pro-content">Super Retina in two sizes — including the largest display ever on the iPhone</p>
        <button type="submit" class="btn btn" id="btn1" value="submit">$729</button>
        </div>
   
 
        <div class="col-lg-2">
    
    
    <img src="/img/img2.png"  style={{width:"100%"}}/>
    </div>

    <div class="col-lg-2">
        <h1 class="pro-title">iPhone XR</h1>
        <p class="pro-content">Super Retina in two sizes — including the largest display ever on the iPhone</p>
        <button type="submit" class="btn btn" value="submit" id="btn1">$729</button>
        </div>
   

    <div class="col-lg-2">
    
    
        <img src="/img/img3.png"  style={{width:"100%"}}/>
        </div>
        <div class="col-lg-2">
        <h1 class="pro-title">iPhone XR</h1>
        <p class="pro-content">Super Retina in two sizes — including the largest display ever on the iPhone</p>
        <button type="submit" class="btn btn" value="submit" id="btn1">$729</button>
        </div>
   
    
  </div>


<div class="row"  style={{marginTop:"100px"}}>
  <div class="col-lg-5 col-md-5 col-sm-6 col-xs-6">

  <div class="row" style={{padding:"30px"}} id="row2">
    <div class="col-lg-8 col-md-8">
    <p class="sub-head" style={{marginTop:"0px"}}>Apple</p>
      <h2 class="main-head" style={{marginTop:"-10px"}}><b>iMac 27”</b></h2>
      <p class="para" style={{marginTop:"0px"}}>   • 1TB hard drive<br/>
• Two Thunderbolt 3 ports<br/>
• 16GB DDR4 memory</p>
    </div>
      <div class="col-lg-4">
        <img src="/img/img5.png" style={{marginTop:"0px",marginLeft:"-80px",}}/>
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
        <img src="/img/img6.png" style={{marginTop:"0px",marginLeft:"-80px",}}/>
      </div>
      <div class="row">
<div class="col-lg-6 col-sm-6 col-xs-6">
<button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"-80px"}}><b>Add to Cart</b></button> 
  </div>
  <div class="col-lg-6 col-sm-6 col-xs-6">
    <p class="pri" style={{marginTop:"-80px",marginLeft:"-70px"}}> $4259</p>
  </div>
  </div>



  
    </div>
  </div>
  <div class="col-lg-6 col-sm-6 col-xs-6" style={{padding:"30px",marginLeft:"50px"}} id="row2">
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
<img src="/img/img4.png"  style={{display:"block",margin:"auto",}}/>
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


  <div class="row" style={{marginTop:"100px"}}>
    
<div >
  <h1 style={{textAlign:"center"}} class="main3">Latest Products & Accessories</h1>
  <p style={{textAlign:"center"}} class="paragraph">From smartphones and smart homes, to voice assistants and other cool gadgets<br/>that make life easier.</p>
</div>
    <div class="col-lg-4">


<img src="/img/apple1.png" />

<div class="row">
  <div class="col-lg-10">
    <p style={{textAlign:"center",marginTop:"30px"}} class="head3">Apple iPhone 7 32GB Silver</p>
   
  </div>
 
  <div class="col-lg-2">
  <p>
      <button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"20px",marginLeft:"-70px"}}><b>$429</b></button> 
    </p>
  
  </div>
</div>
<p class="para1">Smartphone designed, developed and marketed by Apple Inc.</p>
    </div>
  <div class="col-lg-4">


<img src="/img/apple2.png" />

<div class="row">
  <div class="col-lg-10">
    <p style={{textAlign:"center",marginTop:"30px"}} class="head3">Apple iPad Pro 64GB Silver</p>
   
  </div>
 
  <div class="col-lg-2">
  <p>
      <button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"20px",marginLeft:"-70px"}}><b>$429</b></button> 
    </p>
  
  </div>
</div>
<p class="para1">iPad Mini tablet computer produced and marketed by Apple Inc.</p>
    </div>
  <div class="col-lg-4">


<img src="/img/apple3.png" />

<div class="row">
  <div class="col-lg-10">
    <p style={{textAlign:"center",marginTop:"30px"}} class="head3">Apple MacBook Air</p>
   
  </div>
 
  <div class="col-lg-2">
  <p>
    <button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"20px",marginLeft:"-70px"}}><b>$429</b></button> 
    </p>
  
  </div>
</div>
<p class="para1">Seventh-generation Intel Core processors.</p>
    </div>
    </div>


    <div class="row" style={{marginTop:"50px"}}>
    <div class="col-lg-4">


<img src="/img/apple4.png" />

<div class="row">
  <div class="col-lg-10">
    <p style={{textAlign:"center",marginTop:"30px"}} class="head3">Apple Airpods</p>
   
  </div>
 
  <div class="col-lg-2">
  <p>
      <button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"20px",marginLeft:"-70px"}}><b>$429</b></button> 
    </p>
  
  </div>
</div>
<p class="para1">Simply take them out and they’re ready to use with all your devices.</p>
    </div>
  <div class="col-lg-4">


<img src="/img/apple5.png" />

<div class="row">
  <div class="col-lg-10">
    <p style={{textAlign:"center",marginTop:"30px"}} class="head3">Apple pencil</p>
   
  </div>
 
  <div class="col-lg-2">
  <p>
      <button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"20px",marginLeft:"-70px"}}><b>$429</b></button> 
    </p>
  
  </div>
</div>
<p class="para1">The new Apple Pencil takes that experience even further.</p>
    </div>
  <div class="col-lg-4">


<img src="/img/apple6.png" />

<div class="row">
  <div class="col-lg-10">
    <p style={{textAlign:"center",marginTop:"30px"}} class="head3">Apple Watch</p>
   
  </div>
 
  <div class="col-lg-2">
  <p>
    <button type="submit" class="btn btn" value="submit" id="btn1" style={{marginTop:"20px",marginLeft:"-70px"}}><b>$429</b></button> 
    </p>
  
  </div>
</div>
<p class="para1">Smartwatches designed and developed by Apple Inc.</p>
    </div>
    </div>


 
  </div>
  <div  style={{backgroundColor:"#2F1893" , padding:"130px"}} >

<h1 class="eco8">Unexpected Gifts for Your <br/>Best Friend</h1>
<p class="eco-p">Having trouble finding a gift that's as great as your best friend? Scroll on for a<br/> list of ideas that includes apparels, home decor, accessories, gadgets, and <br/>more—you'll definitely find something they'll love!</p>   
 
 <div class="row" style={{marginTop:"80px"}}>
   <div class="col-lg-4">
     <img src="/img/eco1.png" style={{width:"100%"}}/>
     <p class="body" style={{textAlign:"center"}}>FOR BODY</p>
     <p class="cus">Custom superbottle with a powerful <br/>combination punch</p>
   </div>
   <div class="col-lg-4">
   <img src="/img/eco2.png" style={{width:"100%"}}/>
     <p class="body" style={{textAlign:"center"}}>FOR FACE</p>
      <p class="cus">Splash water on your face before <br/>applying</p>
   </div>
   <div class="col-lg-4">
   <img src="/img/eco3.png" style={{width:"100%"}}/>
     <p class="body" style={{textAlign:"center"}}>FOR HANDS</p>
      <p class="cus">Only natural creams are used here</p>
   </div>
 </div>

 <button type="submit" class="btn btn"  id="btn" value="submit" style={{margin:"auto",marginTop:"80px"}}>Get All for $199</button>
 </div>
<div class="container-fluid" style={{marginTop:"5px"}}>
  <div class="row" >
    <div class="col-lg-6">
      <img src="/img/imggg.png" style={{width:"100%",height:"100%"}}/>
    </div>
    <div class="col-lg-6" style={{backgroundColor:"#2F1893",padding:"120px"}}>
  <p class="p">puma hoodie</p>
  <h1 class="h">Discounted Product <br/>of the Week</h1>
  <p class="p1">Customized cotton pullover hoodies with<br/> embroidery logo company </p>
  <div class="row" style={{marginTop:"150px"}}>
    <div class="col-lg-2">
      <p class="price">$24.99</p>
    </div>
    
    <div class="col-lg-2">
      <p class="price1">$64.99</p>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-3">
    <button type="submit" class="btn btn"  id="btn4" value="submit" style={{margin:"auto",marginTop:"0px"}}>Buy Now</button>
    </div>
    
    <div class="col-lg-3">
    <button type="submit" class="btn btn"  id="btn3" value="submit" style={{margin:"auto",marginTop:"0px",marginLeft:"-70px"}}>View More</button>
    </div>
  </div>
    </div>
  </div>
</div>

    </>
  )
}
