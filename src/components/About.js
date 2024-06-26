

export default function About(props) {

    
  return (
    <>
        <div className="container" >
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
            <h2 className="accordion-header" >
                <button className="accordion-button" style={props.mode==='ligth'?{backgroundColor:'#dbe8e9',color:'black'}:{backgroundColor:'#878ba2',color:'white'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
                </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={props.mode==='ligth'?{backgroundColor:'transparent',color:'black'}:{backgroundColor:'#dccfcf',color:'black'}}>
                <div className="accordion-body" >
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header" >
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={props.mode==='ligth'?{backgroundColor:'#dbe8e9',color:'black'}:{backgroundColor:'#878ba2',color:'white'}}>
                Accordion Item #2
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={props.mode==='ligth'?{backgroundColor:'transparent',color:'black'}:{backgroundColor:'#dccfcf',color:'black'}}>
                <div className="accordion-body" >
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
            <div className="accordion-item">
            <h2 className="accordion-header">
                <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={props.mode==='ligth'?{backgroundColor:'#dbe8e9',color:'black'}:{backgroundColor:'#878ba2',color:'white'}}>
                Accordion Item #3
                </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={props.mode==='ligth'?{backgroundColor:'transparent',color:'black'}:{backgroundColor:'#dccfcf',color:'black'}}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
            </div>
            </div>
            </div>
                
        </div>
    </>
  )
}
