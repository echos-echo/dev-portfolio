import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function ProjectImage(props) {
    const imagePath = props.imagePath;  // tools will be an array of the tech stack used for project
    const height = props.height;
    const width = props.width;
    const alt = props.alt;

    return (
        <Image src={imagePath} height={height} width={width} alt={alt} quality={90} style={{height: "auto", width:"100%"}}/>
    )
}