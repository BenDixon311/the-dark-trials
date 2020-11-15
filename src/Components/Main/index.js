import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import { Frame } from 'framer'

import Media from 'react-bootstrap/Media'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Navbar from '../Nav/index'
import SignupForm from '../SignupForm'
import Footer from '../Footer/index';
import image from '../../images/DarkTrials_WEB.jpg'
import bgImage from '../../images/DarkTrials_WEBBackground.jpg'

const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1,  transition: { duration: 2 } },
  }

//original animation//
// const list = {
//     hidden: { opacity: 0, x: 0, y: "50%" },
//     visible: { opacity: 1, x: "30%", transition: { duration: 2 } },
//   }

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
    const [mini, setMini] = React.useState(true);
    const classes = useStyles();


   

    return (
        <React.Fragment>
            <div>
            <img src={bgImage} id="bg" />
                <Navbar />
           
                    <Container style={{textAlign: 'center'}}> 
                    
                        
                    <Row className="align-items-center" style={{marginTop: '100px'}}>
                            <Col lg={5} md={5} className="mt-4 pt-2 pt-sm-0">
                                <div className="position-relative">
                                    <img src={image} className="rounded img-fluid mx-auto d-block mb-2" alt="" />
                                    {/* <div className="play-icon">
                                        <Link onClick={this.openModal}  to="#" className="play-btn video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    </div> */}
                                </div>
                            </Col>

                            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                                <h1 className="title-heading main-font" style={{color: 'white'}}>THE DARK TRIALS</h1>
                                                <p className="text-white h4">THE DARK TRIALS is the exciting first book in The Dark Trials series. A coming-of-age YA paranormal
                                                    thriller, THE DARK TRIALS is full of dark mystery, supernatural thrills, and heart-wrenching twists that
                                                    will keep you turning the page until the end.</p>
                                            
                                           
                                            <Row className="mt-4">
                                            <Col lg={4} sm={false}></Col>
                                            <Col lg={4} sm={12} className="mb-1 mt-2 justify-content-center">
                                                      <p className="text-muted mt-2">"Wow, I really loved this book!"</p>
                                                      <h6 className="text-primary">J.,<small className="text-muted">Reader</small></h6> 
                                              </Col>
                                              <Col lg={4} sm={false}></Col>
                                            </Row>
                                            <Row className="mt-4">
                                            <Col className="mb-3">
                                                {/* <Card className="mt-3">
                                                <Form className={classes.form}>
                                                            <Form.Group controlId="formBasicEmail">
                                                            <h1 className="title-heading main-font">Sign Up</h1>
                                                                <Form.Label>Join the mailing list for updates and
                                                                your <i>FREE</i> e-copy of The Dark Trials (for a very limited time).</Form.Label>
                                                                <Form.Control type="email" placeholder="Enter email" />
                                                            
                                                                <Form.Text className="text-muted">
                                                                We'll never share your email with anyone else.
                                                                </Form.Text>
                                                            </Form.Group>
                                                            <Button variant="primary" type="submit">
                                                                Sign Up
                                                                </Button>

                                                        
                                                        </Form>
                                                    </Card> */}
                                                    <SignupForm />
                                                </Col>
                                            </Row>
                            </Col>  
                        </Row>
                        

                        
                    
                {/* </Frame> */}
                
            
            </Container>
            
            </div>
            <Footer />
        </React.Fragment>
    )
}