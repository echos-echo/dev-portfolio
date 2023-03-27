import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SplashTitle from "./SplashTitle";
import SplashDescription from "./SplashDescription";
import styles from "../styles/Home.module.css";

export default function SplashContainer() {
    return (
        <div className={styles.splashContainer}>
            <SplashTitle/>
            <SplashDescription/>
        </div>
    )
}