import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css';
import ProjectTitle from "./ProjectTitle";
import ProjectImage from "./ProjectImage";
import ProjectDescription from "./ProjectDescription";
import ProjectTools from "./ProjectTools";
import ProjectLinks from "./ProjectLinks";

export default function ProjectContainer(props) {
    return (
        <div className={styles.projectContainer}>
            <ProjectTitle title={props.title}/>
            <ProjectImage imagePath={props.imagePath} height={props.height} width={props.width} alt={props.imgAlt}/>
            <ProjectDescription description={props.description}/>
            <ProjectTools tools={props.tools}/>
            <ProjectLinks repo={props.repoURL} siteURL={props.siteURL} name={props.title}/>
        </div>
    )
}