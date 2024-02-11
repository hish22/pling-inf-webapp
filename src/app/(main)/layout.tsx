"use client";
import Logo from "../../components/logo/logo";
import "./../layout.css";
import "./main.layout.css";
import Image from "next/image";
import Button from "@/components/button/button";
import { usePathname, useRouter } from "next/navigation";
import React, { ReactElement, ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const path = usePathname();

  const config : {uri: string, icon: string, title: string, alt: string}[] = [
    { uri: "/about", icon: "/Images/BlueMonster.png", title: "LEVEL 1", alt: "BlueMonster"},
    { uri: "/links", icon: "/Images/spicy.png", title: "LEVEL 2", alt:"spicy"},
    { uri: "/lang", icon: "/Images/CuteMonster.png", title: "LEVEL 3", alt: "CuteMonster" }
    
  ]

  const navButton = () => {
    
    let targetButton : ReactNode[] = [];

    config.map(function(button) {
      if(button.uri == path) {
       targetButton.unshift(
          <div id="currentMainButton">
            <Image id="levelIcon" src={button.icon} alt={button.alt} width={50} height={50} />
            <Button class="currentButton" uri={button.uri} title={button.title}/>
          </div>
        );
      } else {
        targetButton.push(<Button class="uncrrentButton" uri={button.uri} title={button.title}/>)
      }
    });

    return targetButton;

  }

  return (
        <div>
            <Logo />
            <div style={{textAlign: "center"}}>
            {navButton()}
            <div>
              {children}
            </div>
         </div>
        </div>
  )
}
