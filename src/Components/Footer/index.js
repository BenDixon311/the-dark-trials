import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';


export default function Footer() {

    return (
        <footer className="page-footer footer font-small unique-color-dark text-dark mt-4 bg-light" >
        
          {/* <div style={{backgroundColor: '#6F7480'}}>
            <div className="container">
        
              <div className="row py-4 d-flex align-items-center">
        
                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                  <h6 className="mb-0">Get connected with us on social networks!</h6>
                </div>
               
 
        
                <div className="col-md-6 col-lg-7 text-center text-md-right">
        
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f white-text mr-4"> </i>
                  </a>
                  <a className="tw-ic">
                    <i className="fab fa-twitter white-text mr-4"> </i>
                  </a>
                  <a className="gplus-ic">
                    <i className="fab fa-google-plus-g white-text mr-4"> </i>
                  </a>
                  <a className="li-ic">
                    <i className="fab fa-linkedin-in white-text mr-4"> </i>
                  </a>
                  <a className="ins-ic">
                    <i className="fab fa-instagram white-text"> </i>
                  </a>
        
                </div>
        
              </div>
        
            </div>
          </div> */}
           <div class="ml-form-embed"
                  data-account="2501029:a3l9s8z2d6"
                  data-form="3035186:q1p6t3"
                  id="footer">
                </div>
        
          <div className="container text-center text-md-left mt-5 text-dark">
        
            <div className="row mt-3">
        
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
                <h4 className=" main-font">T. James Kelly</h4>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
               
        
              </div>
        
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6 className="text-uppercase font-weight-bold">Books</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                  <a style={{textDecoration: 'none'}} className="text-dark" href="/books">The Dark Trials</a>
                </p>
            
        
              </div>
        
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
                <h6 className="text-uppercase font-weight-bold">About</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                  <a style={{textDecoration: 'none'}} className="text-dark" href="/contact">T. James Kelly Bio</a>
                </p>
              
        
              </div>
        
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
                <h6 className="text-uppercase font-weight-bold">Contact</h6>
                <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                <p>
                <a style={{textDecoration: 'none'}} className="text-dark" href="mailto:TJKAuthor@gmail.com">
                    Email
                </a>
                </p>
                <a href="twitter.com/TJKAuthor" style={{margin: '5'}}><Twitter /></a>
                <a href="facebook.com/TJKAuthor" style={{margin: '5'}}><Facebook /></a>
             
        
              </div>
        
            </div>
        
          </div>
        
          <div className="footer-copyright text-center py-3">© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> T. James Kelly</a>
          </div>
        
        </footer>
    )
}