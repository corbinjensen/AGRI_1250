import React, { Component } from 'react';
import logo from './logo.svg';
import economicImpact from './img/Tax_Release_Infographic.jpg';
import councilLogo from './img/bccfu-logo-retina2.png';
import iatseLogo from './img/IATSE-Local-891.png';
import cameraLogo from './img/IATSE-Local-669-footer.png';
import teamstersLogo from './img/Teamsters-Local-Union-155-footer.png';
import acfcLogo from './img/acfc.png' ;
import dgcLogo from './img/DGC-BC-Logo.png';
import creativeBCLogo from './img/crbc-logo-home.png';
import circularE from './img/CIRC.PNG';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <h1>Sustainability in the Film Industry</h1>
          <h3>With a Focus on Food</h3>
        </section>

        <section>
          <h2>What is Sustainability?</h2>
          <p>Sustainability means meeting our own needs without 
            compromising the ability of future generations to meet their 
            own needs.</p>
          <p>In addition to natural resources, we also need social 
          and economic resources.</p>
           <p>Sustainability is not just environmentalism. 
          Embedded in most definitions of sustainability we also find 
          concerns for social equity and economic development</p>
        </section>

        <section>
          <h2>BC's Motion Picture Industry</h2>
          <h3>Economic Impact</h3>
          <img src={economicImpact}></img>
          <h4>Labour: $1,780,000,000</h4>
          <h4>56% of productions were Canadian</h4>
          <h4>60,000 Skilled workers earning higher than average incomes.</h4>
          <h4>200 BC Based Producers + 250 BC Film Businesses Supporting</h4>
          <h4>65 Film Studios, 30 Post Facility, 100 Animation/VFX</h4>
        </section>

        <section>
          <h2>Sustainability Challenges</h2>
          <p>Areas of Focus in BC Film Industry:</p>
          <ul>
            <li>Waste Management</li>
            <li>Sustainable Supply Chains</li>
            <li>Energy and Fuel Use</li>
          </ul>
        </section>
        <section class="unions">
          <h2>Unionized Industry</h2>
          <div class="council">
            <img src={councilLogo}></img>
            <img src={iatseLogo}></img>
            
            <img src={cameraLogo}></img>
            
            <img src={teamstersLogo}></img>
            
          </div>
          <div>
            <h3>Other Unions</h3>
            <img src={acfcLogo}></img>
            
            <img src={dgcLogo}></img>
            
          </div>
          </section> 
          <section class="govStudio">
          <div>
            <h3>Government</h3>

            <img src={creativeBCLogo}></img>
            <p>Film Tax Credit: 28% of Labour</p>
            <p>Plus 6% for outside Vancouver</p>
            <p>or 35% and 12.5% for CAD Productions.</p>

            <h4>Government of Canada</h4>
            <p>15% of Labour || 25% for CAD Productions</p>
          </div>
          <div>
            <h3>Local Production Companies</h3>
          </div>
          <div>
            <h3>Studios</h3>
            <h4>Warner Brothers</h4>
            <h4>Amazon Studios</h4>
            <h4>Apple Studios</h4>
            <h4>Disney / ABC Studios</h4>
          </div>
        </section>
        <section>
          <h2>Food in Film</h2>
          <h3>Catering</h3>
          <ul>
            <li>Only open at meal times</li>
            <li>Teamsters Member Staffed</li>
            <li>Contract to member-owned catering companies</li>
            <li>Serves full, hearty meals.</li>
          </ul>
          <h3>Craft Services</h3>
          <ul>
            <li>Open all the time throughout the work day.</li>
            <li>IATSE 891 Member Staffed</li>
            <li>First Aid Trained with Occupational Level 3</li>
            <li>Light snacks, toasters, hot snack, gum, nuts.</li>
            <li>Hydration - water, juice, pop.</li>
          </ul>
          <h3>Meals / Meal Penalty</h3>
          <p>On Set:</p>
          <ul>
            <li>Meals must happen by a certain time.</li>
            <li>If not then the production is fined overtime.</li>
            <li>Until the meal is served.</li>
            <li>This ensures our members get to eat on time.</li>
          </ul>
          <p>Off Set:</p>
          <ul>
            <li>Some shows get a lunch budget for crew to have a meal for under $14.</li>
            <li>Water is always available.</li>
            <li>No crafty or catering on prep days.</li>
            <li>Office staff gets catering buffet brought in.</li>
          </ul>
        </section>
        <section>
          <h2>Sustainability and the Future</h2>
          <p>Reel Green Program</p>
          <iframe 
            width="100%" 
            height="500px" 
            src="https://www.youtube.com/embed/tHqDJ6Gcbr0" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </section>
        <section>
          
          <a 
          href="https://player.vimeo.com/video/277699619" 
          >
          <img class="circ" src={circularE}></img>
          </a>
        </section>
        <section>
          <h2>Sources:</h2>
          <ul>
            <li>
              <a href="https://www.mcgill.ca/sustainability/files/sustainability/what-is-sustainability.pdf">Definition of Sustainability: McGill</a>
            </li>
            <li>
              <a href="https://www.creativebc.com/2018/07/16/press-release-bcs-motion-picture-industry-contributes-34b-to-the-provincial-economy.php">Creative BC - Press Release on 2017 Economic Impact</a>
            </li>
            <li>
              <a href="https://www.creativebc.com/programs/tax-credits/">
                Creative BC</a>
            </li>
            <li>
              <a href="http://www.bccfu.com/">
                BC Council of Film Unions
              </a>
            </li>
            <li>
              <a href="https://www.acfcwest.com/">
                ACFC West
              </a>
            </li>
            <li>
              <a href="https://www2.gov.bc.ca/gov/content/taxes/income-taxes/corporate/credits/production-services">
                BC Government - Production Services Tax Credits
              </a>
            </li>
            <li>
              <a href="https://www.greensparkgroup.com/services">Green Spark Group</a>
            </li>
            <li>
              <a href="http://nispcanada.ca/">NISP CANADA</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
