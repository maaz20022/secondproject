import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Contact = () => {
    const history = useHistory()
    const [msg, setMsg] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const handleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setMsg({ ...msg, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, subject, message } = msg;
        try {
            const res = await fetch('/message', {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, subject, message
                })
            })
            console.log(res.status)
            if (res.status === 400 || !res) {
                window.alert("Message not sent")
            } else {
                // You need to Restart the Server for Proxy Works
                // Now Try Again
                window.alert("Message Sent");
                setMsg({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
                history.push('/')

            }
        } catch (error) {
            console.log(error)
        }
    }







    return (
        <>
            <div>
                <div className="row">
                    <div className="col">

                        <section className="mb-4">


                            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                                a matter of hours to help you.</p>

                            <div className="row">


                                <div className="col-md-9 mb-md-0 mb-5">
                                    <form onSubmit={handleSubmit} id="contact-form" name="contact-form" method="POST">


                                        <div className="row">


                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="name" name="name" value={msg.name}
                                                        onChange={handleChange} className="form-control" />
                                                    <label className="name">Your name</label>
                                                </div>
                                            </div>



                                            <div className="col-md-6">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="email" name="email"
                                                        value={msg.email} onChange={handleChange} className="form-control" />
                                                    <label className="email">Your email</label>
                                                </div>
                                            </div>


                                        </div>



                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="md-form mb-0">
                                                    <input type="text" id="subject" name="subject"
                                                        value={msg.subject} onChange={handleChange} className="form-control" />
                                                    <label className="">Subject</label>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row">


                                            <div className="col-md-12">

                                                <div className="md-form">
                                                    <textarea type="text" id="message" name="message"
                                                        value={msg.message} onChange={handleChange} rows="2" className="form-control md-textarea"></textarea>
                                                    <label>Your message</label>
                                                </div>

                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>

                                    </form>


                                </div>


                                <div className="col-md-3 text-center">
                                    <ul className="list-unstyled mb-0">
                                        <li><i className="fa fa-map-marker fa-2x"></i>
                                            <p>San Francisco, CA 94126, USA</p>
                                        </li>

                                        <li><i className="fa fa-phone mt-4 fa-2x"></i>
                                            <p>+ 01 234 567 89</p>
                                        </li>

                                        <li><i className="fa fa-envelope mt-4 fa-2x"></i>
                                            <p>contact@mdbootsp.com</p>
                                        </li>
                                    </ul>
                                </div>


                            </div>

                        </section>





                    </div>

                </div>
            </div>
        </>

    )
}

export default Contact;
