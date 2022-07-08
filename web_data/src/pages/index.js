import * as React from "react"
import Layout from "../components/layout";
import {
  CenteredElem,
  DownloadButton,
  UserDescription,
  UserSkills,
  UserTitle, UserTopic,
  UserWrapper
} from "../styles/indexStyling";
import SkillBox from "../components/SkillBox";
import skills from "../data/Skills";
import {getDate} from "../components/layout";

// styles
const pageStyles = {
  color: "#ffffff",
  fontFamily: "Open Sans Light Condensed, sans-serif",
}


// markup
const IndexPage = () => {
  return (
    <Layout className={pageStyles}>
      <UserWrapper>
        <UserTitle>
          <span style={{color: "green", opacity: 0.8}}>Pedro</span> <span style={{color:"#FAFA33"}}>Jorge on </span><span style={{color:"black"}}>{getDate()}</span>
        </UserTitle>
        <UserDescription>
          <p style={{margin:"1%"}}>From the deepest feeling I know that Mathematics, Deep Learning, Machine Learning and Full Stack Web Development are one with Data if I were to put it in
          todays terms.</p>
          <p style={{color:"black", opacity: 0.6}}>To say the least, I am keen to work with any computer science field and on most open source projects.</p>
        </UserDescription>
        <UserSkills style={{marginLeft: "auto", marginRight: "auto"}}>
          <span style={{color:"Black", opacity: 0.7}}>Skills</span>
        </UserSkills>
        <UserTopic>
        <table>


          </table>
          {skills.map((item) => (<SkillBox key={item.id} style={{fontSize: "2em"}} info={item}/>))}
        </UserTopic>
        <CenteredElem><DownloadButton href="https://github.com/8inn8/8inn8.github.io/raw/main/cv_pedro_jorge_2022.pdf" download title="CV">
          Resume
        </DownloadButton></CenteredElem>
      </UserWrapper>
    </Layout>
  )
}

export default IndexPage


