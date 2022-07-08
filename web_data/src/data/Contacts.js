import React from "react";
import {Icon, InlineIcon} from "@iconify/react";
import github from "@iconify-icons/logos/github-icon";
import facebook from "@iconify-icons/logos/facebook";
import linkedin from "@iconify-icons/logos/linkedin-icon";
import twitter from "@iconify-icons/logos/twitter";
import datacamp from '@iconify-icons/simple-icons/datacamp';
import googleGmail from '@iconify-icons/logos/google-gmail';

export default [
    {
        id: 1,
        title: "Github",
        icon: <Icon icon={github} width="6em"/>,
        linkTo: true,
        path: "https://github.com/prjrg"
    },
    {
        id: 3,
        title: "LinkedIn",
        icon: <Icon icon={linkedin} width="6em"/>,
        linkTo: true,
        path: "https://www.linkedin.com/in/prjrg/"
    },
    {
        id: 4,
        title: "Twitter",
        icon: <Icon icon={twitter} width="6em"/>,
        linkTo: true,
        path: "https://twitter.com/8inn8"
    },
    {
        id: 5,
        title: "Datacamp",
        icon: <Icon icon={datacamp} width="6em"/>,
        linkTo: true,
        path: "https://www.datacamp.com/profile/pmrjge"
    },
    {
        id: 6,
        title: "pmrjge@gmail.com",
        icon: <Icon icon={googleGmail} width="6em"/>,
        linkTo: false,
        path: ""
    },
]
