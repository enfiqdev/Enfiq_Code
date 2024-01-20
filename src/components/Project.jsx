import React from 'react';
import '../css/Project.css';
// import image1 from '../Images/image 31.png';
// import image2 from '../Images/image 32.png';
// import image3 from '../Images/image 33.png';

import Doodunes from '../Images/doordunes.png';
import Adhyay from '../Images/adhyay.png';
import Civil from '../Images/civillabs.png';

const Project = () => {
  return (
    <>

    <div className="portfolio-container" id='Project'>
    <h2 className="section">Portfolio</h2>

    {/* Project 1 */}
    <div className="portfolio-sec">
      <div className="project-background">
        <a href="https://doordunes.com/" target="_blank" rel="noopener noreferrer">
          <img className="project-img" src={Doodunes} alt="doorDunes" />
        </a>
      </div>

      <div className="project-para">
        <p className="websit-link">
          <a href="https://doordunes.com/" target="_blank" rel="noopener noreferrer">
            doordunes.com
          </a>
        </p>
        <h2 className="company-name">DoorDunes</h2>
        <p className="paragh1">
          DOOR DUNES is a one-of-a-kind and distinctive piece of digital art collection that is offered for sale in OpenSea Marketplace as a non-fungible token (NFT) created on the Ethereum Blockchain.
        </p>
      </div>
    </div>

    {/* Project 2 */}
    <div className="portfolio-sec2">
      <div className="project-para">
        <p className="websit-link">
          <a href="https://www.adhyay.live/" target="_blank" rel="noopener noreferrer">
            adhyay.live
          </a>
        </p>
        <h2 className="company-name">Adhyay</h2>
        <p className="paragh1">
          Adhyay is the non-profit organisation which provides free and quality education. Adhyay provides live classes and study materials to students. Adhyay also provides test series building a healthy atmosphere to compete and achieve big.
        </p>
      </div>

      <div className="project-background2">
        <a href="https://www.adhyay.live/" target="_blank" rel="noopener noreferrer">
          <img className="project-img" src={Adhyay} alt="Adhyay" />
        </a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="portfolio-sec">
      <div className="project-background3">
        <a href="https://www.civillabs.co.in/" target="_blank" rel="noopener noreferrer">
          <img className="project-img" src={Civil} alt="civillabs" />
        </a>
      </div>

      <div className="project-para">
        <p className="websit-link">
          <a href="https://www.civillabs.co.in/" target="_blank" rel="noopener noreferrer">
            civillabs.co.in
          </a>
        </p>
        <h2 className="company-name">Civillabs</h2>
        <p className="paragh1">
          DOOR DUNES is a one-of-a-kind and distinctive piece of digital art collection that is offered for sale in OpenSea Marketplace as a non-fungible token (NFT) created on the Ethereum Blockchain.
        </p>
      </div>
    </div>
  </div>
      
    </>
  )
}

export default Project