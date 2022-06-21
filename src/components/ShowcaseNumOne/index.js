import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/dark_theme/github_48.png';
 
class ShowcaseNumOne extends Component{
  
  render() {
    
    const screenOrigin={
        backgroundImage: 
          "url('https://raw.githubusercontent.com/TTKHScriptPoetry/kubootcamp_challenge_17_module_20_react_portfolio/main/src/assets/images/small/portfolio/000.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'cover',  
        // backgroundAttachment: 'fixed', 
        opacity: '0.50',
    };
    const screenHovering={
      backgroundImage: 
        "url('https://raw.githubusercontent.com/TTKHScriptPoetry/KUBC_Q2_Inception/main/gray_template_hovering_560_310.png')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'cover',  
      // backgroundAttachment: 'fixed', 
      opacity: '0.78', //shows no rectangular boundary
    };
    return (
      // <div className="bg-secondary p-3 mb-0 flex-row  align-center border-top-thin ">
     
          <span className='flex-row justify-space-between justify-center mb-2 text-center'>
            <span id="hover-me" className='separator' >
                
              <div style={screenOrigin} id="be-gone">
                <div className='worksample-photo' >                     
                  <p>Consuming Server-Side APIs </p>
                </div>
              </div>

              <div style={screenHovering} id="hover-content" >
                <div className='worksample-detail' >
                  <a href="https://mercuryktgithub.github.io/KUbootcamp_MilestoneAssignments/Challenge_06_Weather_Dashboard" target={'_blank'} 
                      rel="noreferrer" 
                      alt="Weather Dashboard" 
                      title="Click for a Demo"> 
                      Weather Dashboard 
                  </a> 
                  <br></br> 
                  <img src={myGithub} alt="Available Upon Request" title="Available Upon Request" />
                </div>
              </div>
            
            </span>
          </span>


      // </div>

    );
  };

}
export default ShowcaseNumOne;


