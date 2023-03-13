import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import SplashTitle from "./SplashTitle";

export default function SplashContainer() {
    return (
        <div>
            <SplashTitle/>
            <div>
                <Link href="/gallery">Gallery</Link>
            </div>
            <div>
                <Link href="/about">About</Link>
            </div>
        </div>
    )
}