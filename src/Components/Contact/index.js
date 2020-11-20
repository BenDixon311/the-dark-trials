import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Navbar from '../Nav/index'
import Footer from '../Footer/index'
import ContactForm from '../Contact/ContactForm'

import bgImage from '../../images/DarkTrials_WEBBackground.jpg'
import portrait from '../../images/TJK-portrait.jpeg'



const useStyles = makeStyles({

})

export default function Contact() {
    const classes = useStyles();


    return (
        <React.Fragment>
                        <img src={bgImage} id="bg"  />

        <Navbar />

           <Container className="margin-size">
                        <Row className="align-items-center">
                            <Col lg={3} md={3} className="mt-4 pt-2 pt-sm-0">
                                <div className="position-relative">
                                    <img src={portrait} className="rounded img-fluid d-block mb-2" alt="" />
                                </div>
                            </Col>

                            <Col lg={9} md={9} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h1 className="text-white main-font">T. James Kelly</h1>
                                    <p className="text-white secondary-font">I enjoy hearing from readers, and do my best to read and
                                        respond to every message. Drop me a line in the box below. And if you want
                                        some cool insider updates like title and cover reveals for upcoming books along

                                        with special deals, be sure to connect with me on social media by clicking the
                                        links at the top of the page. Hope to see you around. – TJK</p>
                                </div>
                                <ContactForm />
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                    </React.Fragment>

    )
}