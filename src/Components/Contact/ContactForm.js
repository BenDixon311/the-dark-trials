import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Card, CardContent, TextField, Typography } from "@material-ui/core";

export default function ContactForm() {

    const [status, setStatus] = useState();

    function submitForm(ev) {
        console.log('hey here')
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
              form.reset();
              setStatus("SUCCESS");
            } else {
              setStatus("ERROR");
            }
        };
        xhr.send(data);
    }

    return (
        <form 
            onSubmit={submitForm}
            action="https://formspree.io/f/mvovqywp"
            method="POST"
            className="secondary-text text-white"
            style={{marginLeft: '1.5rem'}}
        >
            
            
                <div class="form-group" >
                    {/* <label for="formGroupExampleInput">Name</label> */}
                    <input type="text" className="form-control mb-2" name="name" placeholder="Name" />
                    {/* <label for="formGroupExampleInput" className="mt-1">Email</label> */}
                    <input type="email" className="form-control" name="email" placeholder="Email" />
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea  className="form-control" name="message" placeholder="Message" />
                </div>

                {status === "SUCCESS" ? <p>Thanks!</p> : <button className="btn btn-info">Submit</button>}
                {status === "ERROR" && <p>Ooops! There was an error.</p>}

      

        </form>
    )
}