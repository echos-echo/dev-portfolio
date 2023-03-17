import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

export default function AboutMeLinks() {

    return (
        <div className={''}>
            <br/>
            <Link href="/">for now if you click on this you can return to splash</Link>
        </div>
    )
}