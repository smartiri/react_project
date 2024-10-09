import '../contact/Contact.css';
export default function Contact(){
    return (
        <div id="contact" class="contact-section">
            <form class="contact-form" id="contact_form">
                <h1>Contact Me</h1>   
                <div class="align-items">
                    <label for="name">
                        <input type="text" name="name" id="name" placeholder="Name" />
                        <span class="error" id="name-error"></span>
                    </label>
                    <label for="lastname">
                        <input type="text" name="lastname" id="lastname" placeholder="Lastname" />
                        <span class="error" id="lastname-error"></span>
                    </label>
                    <label for="email">
                        <input type="text" name="email" id="email" placeholder="Email" />
                        <span  class="error" id="email-error"></span>
                    </label>
                    <label for="subject">
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                        <span class="error" id="subject-error"></span>
                    </label>
                </div>
                <label for="message">
                    <textarea name="message" id="message" placeholder="Message"></textarea>
                    <span id="msg-error" class="error"></span>
                </label>
                <div id="success"></div>
                <input type="submit" value="Submit" id="submit-contact"/>
            </form>
        </div>
    )
}