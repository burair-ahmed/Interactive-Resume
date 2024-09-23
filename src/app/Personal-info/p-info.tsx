import Image from "next/image";
import "./personal-info.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faTwitter, faInstagram, faLinkedin, faFacebookF } from '@fortawesome/free-brands-svg-icons';


  

export default function Personalinfo() {
  return (
    <div className="full-cont">
      <div className="container mx-auto w-3/5 main-container">
        <div className="grid grid-cols-12 p-info-box">
          <div className="col-span-5 flex flex-col items-center">
            <Image
              className="profile-image"
              src="/assets/mypic2.webp"
              alt="Image of the person"
              width={400}
              height={600}
            />
                        {/* <FontAwesomeIcon icon={faCalendarDays}
                        style={{color: "orange" }} size="1x" />
                        <p>Enjoy a Coffee!</p> */}
                        
          </div>
          <div className="col-span-7 ">
            <div className="hlo-txt-box">
              <h1 className="hlo-txt">HELLO</h1>
            </div>
            <div>
            <h1 className="personal-name">I&apos;m <b>Burair Ahmed</b></h1>

              <h1 className="profession">Web Developer</h1>
            </div>
            <hr className="hr-personal" />
            <div className="grid-rows-6">
              <div className="row-span-1 info-parameters-row">
                <div className="grid grid-cols-12">
                  <div className="col-span-3">
                    <h1 className="info-parameters">Age</h1>
                  </div>
                  <div className="col-span-9">
                    <h1>18</h1>
                  </div>
                </div>
              </div>
              <div className="row-span-1 info-parameters-row">
                <div className="grid grid-cols-12">
                  <div className="col-span-3">
                    <h1 className="info-parameters">Address</h1>
                  </div>
                  <div className="col-span-9">
                    <h1>ABC ST. XYZ</h1>
                  </div>
                </div>
              </div>
              <div className="row-span-1 info-parameters-row">
                <div className="grid grid-cols-12">
                  <div className="col-span-3">
                    <h1 className="info-parameters">E-Mail</h1>
                  </div>
                  <div className="col-span-9">
                    <h1>burair.s3380@gmail.com</h1>
                  </div>
                </div>
              </div>
              <div className="row-span-1 info-parameters-row">
                <div className="grid grid-cols-12">
                  <div className="col-span-3">
                    <h1 className="info-parameters">Phone</h1>
                  </div>
                  <div className="col-span-9">
                    <h1>+92-302-2110999</h1>
                  </div>
                </div>
              </div>
              <div className="row-span-1 info-parameters-row">
                <div className="grid grid-cols-12">
                  <div className="col-span-3">
                    <h1 className="info-parameters">Experience</h1>
                  </div>
                  <div className="col-span-9">
                    <h1>18</h1>
                  </div>
                </div>
              </div>
              <div className="row-span-1 info-parameters-row">
                <div className="grid grid-cols-12">
                  <div className="col-span-3">
                    <h1 className="info-parameters">FreeLance</h1>
                  </div>
                  <div className="col-span-9">
                  <h1 className="info-parameters available-parameter">Available</h1>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-3/5 secondary-container">
      <div className="grid grid-cols-12">
        <div className="flex flex-col items-center col-span-12 ">
            
                
     <li>   <FontAwesomeIcon className="social-icons1" icon={faFacebookF} size="2x" style={{ color: 'blue' }} />  </li>
      <li>      <FontAwesomeIcon className="social-icons1" icon={faTwitter} size="2x" style={{ color: 'blue' }}    /> </li>
      <li>     <FontAwesomeIcon className="social-icons1" icon={faInstagram} size="2x" style={{ color: 'blue' }} /> </li>
      <li>     <FontAwesomeIcon className="social-icons1" icon={faLinkedin} size="2x" style={{ color: 'blue' }} /> </li>
                
            
        </div>
      </div>
      </div>
    </div>
  );
}
