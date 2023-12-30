import './App.css'
import img1 from './assets/bg-masthead.jpg'
import img2 from './assets/bg-showcase-1.jpg'
import img3 from './assets/bg-showcase-2.jpg'
import img4 from './assets/bg-showcase-3.jpg'
import img5 from './assets/testimonials-1.jpg'
import img6 from './assets/testimonials-2.jpg'
import img7 from './assets/testimonials-3.jpg'



function App() {
  return(<>
    <div className='header_Navbar'>
      <p className='header'>logo</p>
      <button className="header_Nav">Sign up</button>
    </div>

    {/* ----------------------------------------------------------------------------------------------------- */}

    <div className='img1_div'>
      <img className='image_water1' src={img1} alt="" />
      <h1 className='text_overlay'>Generate more lead with a <br />  proffestional landing page! <br /> <input type="text" className='input_header' placeholder='Enter Email' /> <button className='Submit_Btn'>Submit</button> </h1>
    </div>

    {/* ----------------------------------------------------------------------------------------------------- */}

    <div className='row'>
    <div className='col-md-4'>
    <h4 style={{marginLeft:"70px",marginTop:"50px"}}>Fully Responsive</h4>
    <p style={{marginLeft:"70px"}}>This theme will look great on any <br /> device no matter it size</p>
    </div>
    <div className='col-md-4'>
    <h4 style={{marginTop:"50px"}}>Bootstrap 5 ready</h4>
    <p>This theme will look great on any <br /> device no matter it size</p>
    </div>
    <div className='col-md-4'>
    <h4 style={{marginTop:"50px"}}>Easy to use</h4>
    <p>This theme will look great on any <br /> device no matter it size</p>
    </div>
    </div>

    {/* --------------------------------------------------------------------------------------------------- */}

    <br /><br />
    <div className='row'>
    <div className='col-md-6'>
    <h4 style={{marginLeft:"70px",marginTop:"50px"}}>Fully Responsive Design</h4>
    <p style={{marginLeft:"70px"}}>This theme will look great on any <br /> device no matter it size</p>
    </div>
    
    <div className='col-md-6'>
    <img style={{width:"100%",height:"100%"}} src={img2} alt="" />
    </div>
    </div>

    {/* ----------------------------------------------------------------------------------------------------- */}

    <div className='row'>
    <div className='col-md-6'>
    <img style={{width:"100%",height:"100%"}} src={img3} alt="" />
    </div>
    
    <div className='col-md-6'>
    <h4 style={{marginLeft:"70px",marginTop:"50px"}}>Fully Responsive Design</h4>
    <p style={{marginLeft:"70px"}}>This theme will look great on any <br /> device no matter it size</p>
    </div>
    </div>

    {/* ----------------------------------------------------------------------------------------------------- */}

    <div className='row'>
    <div className='col-md-6'>
    <h4 style={{marginLeft:"70px",marginTop:"50px"}}>Fully Responsive Design</h4>
    <p style={{marginLeft:"70px"}}>This theme will look great on any <br /> device no matter it size</p>
    </div>
    
    <div className='col-md-6'>
    <img style={{width:"100%",height:"100%"}} src={img4} alt="" />
    </div>
    </div>

    {/* ----------------------------------------------------------------------------------------------------- */}
    <br /><br />
    <div style={{textAlign:"center"}}>
      <h5>What people are saying...</h5>
      <div style={{textAlign:"center",display:"flex"}}>
    <img style={{borderRadius:"50%",width:"10%",height:"10%",marginLeft:"250px"}} src={img5} alt="" />
    <img style={{borderRadius:"50%",width:"10%",height:"10%",marginLeft:"250px"}} src={img6} alt="" />
    <img style={{borderRadius:"50%",width:"10%",height:"10%",marginLeft:"250px"}} src={img7} alt="" />
      </div>
      
    </div>
    <div style={{textAlign:"center",display:"flex"}}>
    <p style={{marginLeft:"270px",fontWeight:"bold"}}>Margerit E.</p>
    <p style={{marginLeft:"320px",fontWeight:"bold"}}>Fred S.</p>
    <p style={{marginLeft:"350px",fontWeight:"bold"}}>Sarah W.</p>
    </div>
    <div style={{textAlign:"center",display:"flex"}}>
    <p style={{marginLeft:"250px",fontSize:"10px"}}>"This is fantastic!Thank you so much <br /> guys!"</p>
    <p style={{marginLeft:"200px",fontSize:"10px"}}>"Bootstarp is amazing .I've been using it <br /> to create lots of super nice Landing pages.."</p>
    <p style={{marginLeft:"200px",fontSize:"10px"}}>"Thank you so much for making these free <br /> resourses availible for us"</p>
    </div>

    {/* ----------------------------------------------------------------------------------------------------- */}
    <div className='img1_div'>
    <img style={{width:"1325px",height:"300px"}} src={img1} alt="" />
    <h1 className='text_overlay2'>Ready to get started? Sign up now!<br /> <input type="text" className='input_header' placeholder='Enter Email' /> <button className='Submit_Btn'>Submit</button> </h1>
  </div>
    
    </>
)  
}

export default App
