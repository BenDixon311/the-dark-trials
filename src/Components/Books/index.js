import React, { useState } from 'react';

import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import Navbar from '../Nav/index'
import Footer from '../Footer/index'
import image from '../../images/DarkTrials_WEB.jpg'
import bgImage from '../../images/DarkTrials_WEBBackground.jpg'


export default function Books() {

    return (
        <React.Fragment>
                        <img src={bgImage} id="bg"  />

            <Navbar />

            <Container className="margin-size">
                <Row>
                    <Col lg={3} className="mt-4">
                        <img src={image} className="rounded img-fluid mx-auto d-block mb-2" alt="The Dark Trials" />
                    </Col>
                    <Col lg={9} className="mt-4" style={{display: 'inline-grid'}}>
                        <div style={{lineHeight: 0}}>
                        <h1 className="title-heading main-font" style={{color: 'white'}}>The Dark Trials</h1>
                        <p className="text-muted">Book I</p>
                        </div>

                        <p className=" h4" style={{color: '#f2802c'}}>“When it comes to dying, the first time is the worst.”</p>
                        <p className="text-white h6 secondary-font" style={{lineHeight: '1.5'}}>
                                Hannah Church lost her parents, moved herself and her young sister across the country to live
                                with their deadbeat aunt, and started senior year at a new high school when things made a turn
                                for the strange. Soft taps on her bedpost each morning, objects moving on their own, and that
                                prickly, being-watched feeling are all signs of what Hannah’s afraid to admit: She’s haunted.
                                She’s plagued by something dark, something supernatural, something she doesn’t understand.
                                The only person who seems to have answers is a tall, mysterious, black-clad classmate, but
                                there’s just one problem: Hannah can’t be sure whether he wants to help her or whether he wants
                                her dead.
                                But when Hannah’s supernatural stalker threatens to destroy the one thing she loves most, she
                                turns to him. With life, death, and eternal damnation hanging in the balance, Hannah faces off
                                against the underworldly in a race against time to reclaim what’s hers.</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </React.Fragment>
    )
}