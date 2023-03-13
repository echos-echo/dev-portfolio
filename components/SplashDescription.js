import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function SplashDescription() {
    return (
        <div>
            <div>some information about me goes here</div>
            <div>like how im an engineer and stuff</div>
            <div>and how im a creator blah blah</div>
            <div>my links and stuff will go below here too</div>
            <div>the outer div should be a flexbox with flex-direction column</div>
        </div>
    )
}