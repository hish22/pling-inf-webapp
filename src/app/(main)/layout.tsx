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

  const config : {id: number,uri: string, icon: string, title: string, alt: string}[] = [
    { id: 1, uri: "/about", icon: "/Images/BlueMonster.png", title: "LEVEL 1", alt: "BlueMonster"},
    { id: 2, uri: "/links", icon: "/Images/Spicy.png", title: "LEVEL 2", alt:"spicy"},
    { id: 3, uri: "/lang", icon: "/Images/CuteMonster.png", title: "LEVEL 3", alt: "CuteMonster" }
    
  ]

  const navButton = () => {
    
    let targetButton : ReactNode[] = [];

    config.map(function(button) {
      if(button.uri == path) {
       targetButton.unshift(
          <div id="currentMainButton" key={button.id}>
            <Image id="levelIcon" src={button.icon} alt={button.alt} width={50} height={50} />
            <Button key={button.id} class="currentButton" uri={button.uri} title={button.title}/>
          </div>
        );
      } else {
        targetButton.push(<Button key={button.id} class="uncrrentButton" uri={button.uri} title={button.title}/>)
      }
    });

    return targetButton;

  }

  return (
        <div>
            <Logo />
            <div style={{textAlign: "center"}} key={20}>
            {navButton()}
            <div>
              {children}
            </div>
         </div>
        </div>
  )
}
