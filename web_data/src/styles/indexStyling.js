import styled from 'styled-components';

export const UserWrapper = styled.div`
  margin: 0 0;
`;
export const UserLogo = styled.span`
  img{
    max-width: 200px;
    max-height: 200px;
  }
`;

export const UserTitle = styled.h1`
  font-size: 4.2em;
  font-weight: bold;
  color: white;
  span{
    color: #7fa1e8;
  }
  @media (max-width: 700px) {
    font-size: 3em;
  }
`;

export const UserSkills = styled.h2`
  font-size: 2em;
  font-weight: bold;
  color: white;
  span{
    color: #7fa1e8;
  }
  @media (max-width: 1400px) {
    font-size: 3em;
  }
`;

export const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  margin-bottom: 0%;
  color: black;
  font-size: 30px;
  p{
    color: #ffffff;
    max-width: 90%;
    font-weight: 300;
    font-size: 36px;
    line-height: 1.3;
    margin-bottom: 15%;
  }
  img{
    max-width: 50%;
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    img{
      max-width: 100%;
    }
    p{
      max-width: 100%;
      font-size: 19px;
    }
  }
`;

export const CenteredElem = styled.div`
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;

  align-items: center;

`;
export const DownloadButton = styled.a`
  width: 51px;
  height: 51px;
  background-color: white;
  opacity: 0.4;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20 px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: indigo;
  cursor: pointer;
  border-radius: 10px;
  :hover{
    color: darkslateblue;
  }
  @media (max-width: 1400px) {
    width: 100%;
  }
`
export const UserTopic = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1400px) {
    flex-direction: column;
  }
`
