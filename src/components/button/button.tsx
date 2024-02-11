"use client";
import InfoSvg from "@/imgs/infoSvg"
import Link from "next/link"
import "./button.css";
import { SVGProps, useState } from "react";

export default function Button(props: {
    uri: string,
    title: string,
    class: string
}) {

    return ( 
    <div id="button">
        <Link className={props.class} href={props.uri}>{props.title}</Link>
    </div>
    )
}