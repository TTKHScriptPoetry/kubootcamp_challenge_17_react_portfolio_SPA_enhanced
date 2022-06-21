import React, {Component} from 'react'
import myGithub from '../../assets/images/small/whereto/light_theme/github_alt_48.png';
import myLinkedin from '../../assets/images/small/whereto/light_theme/linkedin_alt_48.png';
import myFacebook from '../../assets/images/small/whereto/light_theme/facebook_alt_48.png';
 
class Footer extends Component {
    render() {
      return (
        <footer className="w-100 mt-auto bg-secondary p-2 mb-0 flex-row  align-center border-top-thin ">
          {/* <div class="container">
            <div id="hover-me">
                <span>Hover Me</span>
                <div id="hover-content">
                    This content is visible only when you mouse hover the parent div and it has no transition.
                </div>
            </div>
          </div> */}
          <div className="container justify-center text-center "> 
            
            <div className="flex-row justify-space-between justify-center ">
              <img 
                  alt="Available Upon Request" title="Available Upon Request"
                  src={myGithub}
                  width={48}
                  height={48}
                />
              <a href="https://www.linkedin.com/in/mercurykt/" 
              target='blank'  >
                <img 
                  title={"Connect with me on LinkedIn"}
                  src={myLinkedin}
                  alt={"Connect with me on LinkedIn"}
                  width={49}
                  height={49}
                />
              </a> 
               
              <img  
                  title={"Placeholder for Illustration Purpose Only"}
                  src={myFacebook}
                  alt={"Placeholder for Illustration Purpose Only"}
                  width={48}
                  height={48}
                />
            </div>
          </div>
        </footer>


           
      );
    }
  }

  export default Footer
  