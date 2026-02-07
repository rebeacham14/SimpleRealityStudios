import React, { useState } from 'react';

import './SoftwareEng.css';

import { Link } from 'react-router-dom';


function SoftwareEng() {
  // project = [0:title, 1:description, 2:[languages], 3:[frameworks]]
  let project = {
    '':['','',[''],['']],
    "BroncoBond":[
      "BroncoBond",
      "A collegic social networking app for Cal Poly Pomona Community. Tailored focused on connecting students to events and resources that enhance the college experience.",
      ["JavaScript"], //project["BroncoBond"][2][0]
      ["MongoDB", "Postman"]
    ], 
    "The Core":[
      "The Core",
      "The first release for Simple Reality Studios' debut game series.",
      ["C#"],
      ["Unity"]
    ], 
    "E-Board":[
      "E-Board",
      "Task Managing System",
      ["C"],
      ["ASP.NET"]
    ], 
  };

  const [activeProject, setActiveProject] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectLanguages, setprojectLanguages] = useState(['']);
  const [projectFrameworks, setprojectFrameworks] = useState(['']);
  
  const updateActiveProject = (project) => {
    let title = '';
    let description = '';
    let languages = '';
    let frameworks = '';

    if(project != ''){
      setActiveProject(project[0]);
    }

    switch (project[0]) {
      case "BroncoBond":
        title = project[0];
        description = project[1];
        languages = project[2];
        frameworks = project[3];
        break;
      case "The Core":
        title = project[0];
        description = project[1];
        languages = project[2];
        frameworks = project[3];
        break;
      case "E-Board":
        title = project[0];
        description = project[1];
        languages = project[2];
        frameworks = project[3];
        break;
      default:
        return '';
    }
    
    setActiveProject(title);
    setProjectDescription(description);
    setprojectLanguages(languages);
    setprojectFrameworks(frameworks);
  };


  return (
    <div className="SoftwareEng-Wrapper">
      <div className='Back-Button-Container'>
        <Link to="/"><button className='Back-Button'>
          &lt;
        </button></Link>
      </div>

      <div className="SoftwareEng-Content-Container">
        {/* Project Items */}
        <div className="Projects-Wrapper">

          <div className="Project-Header-Container">
            <div className="Project-Header">
              Projects
            </div>
          </div>

          <div className='Projects-Container'>
            <div class="Projects-Items-Container">
              <div class="center-circle"></div>
              <div class="orbit-item i3" onClick={() => updateActiveProject(project["BroncoBond"])}><span>{project["BroncoBond"][0]}</span></div>
              <div class="orbit-item i2" onClick={() => updateActiveProject(project["The Core"])}><span>{project["The Core"][0]}</span></div>
              <div class="orbit-item i1" onClick={() => updateActiveProject(project["E-Board"])}><span>{project["E-Board"][0]}</span></div>
            </div>
          </div>

        </div>

        {/* Project Description */}
        <div className="Project-Description-Wrapper">

          <div className="Description-Header-Container">
            <div className="Description-Header">
              Details
            </div>
          </div>

          <div className="Project-Description-Container">
            {(activeProject == '') 
            ?
            (
              // if data is empty --> show select hint
              <div className="Description-Missing-Message">
                <p>
                  &lt;&lt;--- <br />
                  Select a project to learn more.
                </p>
              </div>
            ) 
            :
            (
              // else --> show corresponding data
              <div>                
                <div className="Description-Title-Container">
                  <div className="Description-Title">
                    {activeProject}
                  </div>
                </div>

                <div className="Description-Content-Container">
                  <div className="Description-Content">
                    {projectDescription}
                  </div>
                </div>

                <div className="Project-Tech-Stack-Wrapper">
                  
                  <div className='Project-Tech-Stack-Header-Container'>
                    <div className='Header-Languages'>
                      <p>Languages</p>
                    </div>
                    <div className='Header-Frameworks'>
                      <p>Frameworks</p>
                    </div>
                  </div>

                  <div className="Project-Tech-Stack-Container">
                    <div className="Project-Tech-Stack-Languages-Wrapper">
                      <div className="Project-Tech-Stack-Languages-Container">
                        {projectLanguages.map((lang, index) => (
                          <div className="Project-Tech-Stack-Languages" key={index}>{lang}</div>
                        ))}
                      </div>
                    </div>

                    <div className="Project-Tech-Stack-Frameworks-Wrapper">
                      <div className="Project-Tech-Stack-Frameworks-Container">
                        {projectFrameworks.map((frame, index) => (
                          <div className="Project-Tech-Stack-Frameworks" key={index}>{frame}</div>
                        ))}
                      </div>   
                    </div>   
                  </div>

                </div>

              </div>
            )}
          </div>

        </div>

      </div>
      
    </div>
  );
}
export default SoftwareEng;
