import React from "react";
import PropTypes from "prop-types";
import {meta} from "../data/Seo";



const Footer = ({ footerClass}) => (
      <div className={`defaultFooter ${footerClass}`}>
      </div>
);

Footer.propTypes = {
    footerClass: PropTypes.string,
};

export default Footer;
