import * as React from "react"
import Layout from "../components/layout";
import {ContactDetails, ContactHeader, ContactWrapper} from "../styles/contactStyling";
import Contacts from "../data/Contacts";
import SocialContact from "../components/SocialContact";
// styles
const pageStyles = {
    color: "#ffffff",
    fontFamily: "Open Sans Light Condensed, sans-serif",
}


// markup
const ContactPage = () => {
    return (
        <Layout className={pageStyles}>
            <ContactWrapper>
                <ContactHeader>Find me there</ContactHeader>
                <ContactDetails>
                    {Contacts.map((item) => (<SocialContact key={item.id} info={item}/>))}
                </ContactDetails>
            </ContactWrapper>
        </Layout>
    )
}

export default ContactPage


