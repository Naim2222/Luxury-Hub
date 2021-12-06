import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                <div className="max-width">
                    <h2 className="title">Get in touch</h2>
                    <div className="contact-content">


                        <div className="column right">
                            <div className="text">Message me</div>
                            <form action="#">
                                <div className="fields">
                                    <div className="field name">
                                        <input type="text" placeholder="Name" required />
                                    </div>
                                    <div className="field email">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                </div>
                                <div className="field">
                                    <input type="text" placeholder="Subject" required />
                                </div>
                                <div className="field textarea">
                                    <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                                </div>
                                <div className="button">
                                    <button type="submit">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <footer>
                <span>Created By <a href="https://www.linkedin.com/in/md-naim-hossen-567679201/" target="blank">Naim Hossen</a> | {new Date().getFullYear()} All rights reserved.</span>
            </footer>

        </div>

    )
}

export default Contact
