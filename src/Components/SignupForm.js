import React,  { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';


import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import Form from 'react-bootstrap/Form'

import axios from 'axios';

const useStyles = makeStyles({
    form: {
        margin: '10px'
    }
})


export default function SignupForm() {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [name, setName] = useState();


    function handleEmail(event) {
        setEmail(event.target.value)
    }

    function handleName(event) {
        setName(event.target.value)
    }

    function createSubscriber() {
        axios.post('https://api.mailerlite.com/api/v2/groups/104660509/subscribers', {
            name: name,
            email: email,
        },
        {
            headers: {
                "Content-Type": "application/json",
                "X-MailerLite-ApiKey":  "015283fe43d01eebe78c0b7d20a55e40"
            }
        }).then(response => {
            console.log(response);
        })
    }

    return (
        <Card className="mt-3">
        <Form className={classes.form}>
                    <Form.Group controlId="formBasicEmail">
                    <h1 className="title-heading main-font">Sign Up</h1>
                        <Form.Label>Join the mailing list for updates and
                        your <i>FREE</i> e-copy of The Dark Trials (for a very limited time).</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" onChange={handleName} />
                        <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />
                    
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        {name}, {email}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" onClick={createSubscriber}>
                        Sign Up
                    </Button>

                
                </Form>
            </Card>
    )
}