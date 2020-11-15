import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import portrait from '../../images/TJK-portrait.jpeg'
import Navbar from '../Nav/index'
import Footer from '../Footer/index'


const useStyles = makeStyles({

})

export default function Contact() {
    const classes = useStyles();


    return (
        <React.Fragment>

        <Navbar />

           <Container>
                        <Row className="align-items-center">
                            <Col lg={5} md={5} className="mt-4 pt-2 pt-sm-0">
                                <div className="position-relative">
                                    <img src={portrait} className="rounded img-fluid mx-auto d-block mb-2" alt="" />
                                    {/* <div className="play-icon">
                                        <Link onClick={this.openModal}  to="#" className="play-btn video-play-icon">
                                            <i className="mdi mdi-play text-primary rounded-pill bg-white shadow"></i>
                                        </Link>
                                    </div> */}
                                </div>
                            </Col>

                            <Col lg={7} md={7} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-4">
                                    <h4 className="title mb-4 text-white">T. James Kelly</h4>
                                    <p className="text-white">I enjoy hearing from readers, and do my best to read and
                                        respond to every message. Drop me a line in the box below. And if you want
                                        some cool insider updates like title and cover reveals for upcoming books along

                                        with special deals, be sure to connect with me on social media by clicking the
                                        links at the top of the page. Hope to see you around. – TJK</p>
                                    {/* <Link to="#" className="btn btn-primary mt-3">Buy Now <i className="mdi mdi-chevron-right"></i></Link> */}
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Footer />
                    </React.Fragment>

    )
}