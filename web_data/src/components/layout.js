import React from "react";
import styled from "styled-components";
import {graphql, StaticQuery} from "gatsby";
import {Helmet} from "react-helmet";
import {meta} from "../data/Seo";
import moment from "moment";
import favicon from "../images/logo.png";
import {Location} from "@reach/router";
import * as PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './layout.css';


const Wrapper = styled.div`
background-color: #85FFBD;
  background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
  width: 100%;
  background-size: cover;
  min-height: 100vh;
  min-width: 100wh;
  height: auto;
  padding: 0% 0%;
  margin: 0 0;
  position: relative;
  @media (max-width: 500px) {
    min-height: 100vh;
    height: auto;
  }
`;

const Layout = ({children}) => (
    <StaticQuery
        query={graphql`
            query SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
               }
           }
        `}
        render={(data) => (
                <>
                        <Helmet title={meta.title}
                                meta={[
                                        {name: "description", content: meta.description},
                                        {name: "keywords", content: meta.keywords.join(", ")},
                                        {name: "author", content: meta.author},
                                        {name: "copyright", content: meta.copyright + " " + getDate()}
                                ]}
                                link={[
                                    {
                                        rel: "shortcut icon",
                                        type: "image/png",
                                        href: `${favicon}`
                                    }
                                ]}
                                />
                                <Location>
                                    {({location}) => {
                                        return (<Wrapper className={location.pathname === "/" ? "cutBackground" : ""}>
                                            <Navbar />
                                            {children}
                                            <Footer footerClass={location.pathname === "/" ? "footerInitial" : "footerAbsolute"}/>
                                        </Wrapper>);
                                    }}
                                </Location>
                </>
        )}
        />
);

export const getDate = () => (moment().format("MMM Do YY"));

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
