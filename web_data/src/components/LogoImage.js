import React, {useMemo} from "react";
import {graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

export default ({ src, ...rest }) => {
 const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { internal: { mediaType: { regex: "/image/" } } }
      ) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              fluid(maxWidth:300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

 const match = useMemo(
     () => data.images.edges.find(({ node }) => src === node.relativePath),
     [data, src]
 );

 if (!match) return null;

 const { node: { childImageSharp, publicURL, extension } = {} } = match;

 if (extension === 'svg' || !childImageSharp) {
  return <img src={publicURL} {...rest} alt="brand logo" />;
 }

 return <Img fluid={childImageSharp.fluid} {...rest} />;
};
