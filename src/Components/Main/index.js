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
            <img src={bgImage} id="bg" />
                <Navbar />
           
                    <Container> 
                    
                        
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
                                                <p className="text-white h4">I enjoy hearing from readers, and do my best to read and
                                                    respond to every message. Drop me a line in the box below. And if you want
                                                    some cool insider updates like title and cover reveals for upcoming books along

                                                    with special deals, be sure to connect with me on social media by clicking the
                                                    links at the top of the page. Hope to see you around. – TJ</p>
                                            
                                           
                                            <Row className="mt-4">
                                            <Col lg={4} sm={false}></Col>
                                            <Col lg={4} sm={12} className="mb-1 mt-2 justify-content-center">
                                                      <p className="text-muted mt-2">" Here is my review "</p>
                                                      <h6 className="text-primary">Pino Paladino <small className="text-muted">Bassist</small></h6> 
                                              </Col>
                                              <Col lg={4} sm={false}></Col>
                                            </Row>
                               
                             
                            </Col>
                        </Row>
                        <Row>
                        <Col className="mb-3">
                            <Card className="mt-3">
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
                                </Card>
                            </Col>
                        </Row>

                        
                    
                {/* </Frame> */}
               
            
            </Container>
       
        </React.Fragment>
    )
}