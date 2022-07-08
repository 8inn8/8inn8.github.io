import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  margin-bottom: 20px;
  img{
    margin:0 20px 0 0;
  }
  @media (max-width: 700px) {
    img{
      margin: 10% 0;
    }
  }
`
const ContactLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  opacity: 0.8;
  margin: 0em 2em;
  p{
    font-size: 30px;
    color: white;
    margin: 0;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    p{
      font-size: 20px;
    }
  }
`
const ContactBox = styled.div`
  display: flex;
  align-items: center;
  p{
    font-size: 30px;
    color: powderblue;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    p{
      font-size: 20px;
    }
  }
`
const SocialContact = ({ info }) => (
    <ContactWrapper>
        {
            info.linkTo ?
                <ContactLink href={info.path}>
                    {info.icon}
                    <p>{info.title}</p>
                </ContactLink>:
                <ContactBox>
                    {info.icon}
                    <p>{info.title}</p>
                </ContactBox>
        }
    </ContactWrapper>
);

export default SocialContact;
