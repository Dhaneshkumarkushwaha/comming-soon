import React from 'react';

function App() {
  return (
    <React.Fragment>

      <video className="bg-video" playsInline={true} autoPlay={true} muted={true} loop={true} >
        <source src="/assets/mp4/bg.mp4" type="video/mp4" /></video>

      <div className="masthead">
        <div className="masthead-content text-white">
          <div className="container-fluid px-4 px-lg-0">
            <h1 className="fst-italic lh-1 mb-4">Our Website is Coming Soon</h1>
            <p className="mb-5">We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!</p>
          </div>
        </div>
      </div>


    </React.Fragment>

  )

}

export default App;
