import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from '../Nav/index'
import Footer from '../Footer/index';
import image from '../../images/BookBrushImage3D-07_book_Template-small.png'
import bgImage from '../../images/DarkTrials_WEBBackground.jpg'



const useStyles = makeStyles({
    root: {
        marginTop: '100px'
      },
      media: {
        maxWidth: '70%',
        height: 'auto',
        margin: '0 auto'
       
      },
      form: {
          margin: '10px'
      },
      formParent: {
        marginTop: '70%'
      }
})



export default function Main() {
   

    function scroll() {
        document.getElementById('footer').scrollIntoView({behavior: 'smooth'});
    }

   

    return (
        <React.Fragment>
            <div>
            <img src={bgImage} id="bg" />
                <Navbar />
           
                    <Container> 
                    
                        
                    <Row className="align-items-center mb-4" style={{marginTop: '100px'}}>
                            <Col lg={5} md={5} className="mt-4 pt-2 pt-sm-0">
                                <div className="position-relative">
                                    <img src={image} className="rounded img-fluid mx-auto d-block mb-2 zoom" alt="" />
                                </div>
                            </Col>

                            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                                <h1 className="title-heading main-font" style={{color: 'white', fontSize: '5rem'}}>THE DARK TRIALS</h1>
                                                <p className="text-white h5 secondary-font" style={{lineHeight: '1.5'}}>THE DARK TRIALS is the exciting first book in The Dark Trials series. A coming-of-age YA paranormal
                                                    thriller, THE DARK TRIALS is full of dark mystery, supernatural thrills, and heart-wrenching twists that
                                                    will keep you turning the page until the end.</p>
                                            
                                           <button type="button" onClick={scroll} class="btn btn-info mt-4">Join to Get a Free E-copy</button>
                            </Col>  
                        </Row>
                        

                        
                    
                
            
            </Container>
            
            </div>
            <Footer />
        </React.Fragment>
    )
}