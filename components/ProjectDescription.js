import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function ProjectDescription(props) {
    const description = props.description;

    return (
        <p>{description}</p>
    )
}