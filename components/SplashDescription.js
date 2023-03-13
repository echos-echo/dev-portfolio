import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SplashDescription() {
    return (
        <div>
            <div>
                <p>creator</p>
                <p>◇</p>
                <p>software engineer</p>
                <p>◇</p>
                <p>artist</p>
            </div>
            <div>the outer div should be a flexbox with flex-direction column</div>
            <div>my links and stuff will go below here too</div>
            <div>
                <Link href="/gallery">Gallery</Link>
            </div>
            <div>
                <Link href="/about">About</Link>
            </div>
        </div>
    )
}