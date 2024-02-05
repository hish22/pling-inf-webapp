"use client";
import InfoSvg from "@/imgs/infoSvg"
import Link from "next/link"
import "./button.css";
import { SVGProps, useState } from "react";

export default function Button(props: {
    uri: string,
    icon: React.ReactNode,
    id: string
}) {

    return ( 
    <div id="button">
        <Link href={props.uri} id={props.id}>{props.icon}</Link>
    </div>
    )
}