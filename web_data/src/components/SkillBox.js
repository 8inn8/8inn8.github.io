import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  min-height: 200px;
  border-radius: 8px;
  background-color: powderblue;
  opacity: 0.7;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
            0 3px 1px -2px rgba(0,0,0,0.12),
            0 1px 5px 0 rgba(0,0,0,0.2);
  padding: 1% 1%;
  margin-right: 1%;
  margin-bottom: 0%;
  width: 4%;
  height: fit-content;
  min-width: fit-content;
  max-width: 100px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.5s ease-out;
  :hover {
    box-shadow:  0 8px 17px 2px rgba(0,0,0,0.14),
            0 3px 14px 2px rgba(0,0,0,0.12),
            0 5px 5px -3px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.5s;
  }
  :last-of-type{
    margin-right: 0;
  }
  a{
    margin-top: auto;
    color: #7fa1e8;
    text-decoration: none;
  }
  @media (max-width: 300px) {
    width: fit-content;
    min-height: auto;
    padding: 5%;
  }
`
const SkillBox = ({ info }) => (
    <Box>
        <h3>{info.title}</h3>
        {info.icon}
    </Box>
);

export default SkillBox;
