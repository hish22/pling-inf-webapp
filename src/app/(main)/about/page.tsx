import Button from "@/components/button/button";
import Image from "next/image";
import Card from "@/components/card/card";
import Logo from "@/components/logo/logo";
import Person from "@/imgs/person";

export default function About() {
    return (
        <>
            <div style={{textAlign: "center"}}>
            
            <div id="currentAboutButton">
                <Image id="levelIcon" src={"/Images/BlueMonster.png"} alt="spicy" width={50} height={50} />
                <Button id="about-button" uri="/about" title={"LEVEL 1"}/>
            </div>
                <Button id="link-button" uri="/links" title={"LEVEL 2"}/>
                <Button id="lang-button" uri="/lang" title={"LEVEL 3"}/>
            </div>

            <section id="about-Page">
                <div id="about-page-div">
                    <Image id="char-img" src={"/Images/newWiredDude.png"} alt="Character" width={512} height={512} />
                    <div id="info">
                        <h1>PLING</h1>
                        <p>Hello everyone, I'm <span>hisham</span> (Know as pling), CS student, <br />
                            I don't like to talk to much so let us end with it, <br />
                            I like programming, problem solving , <br />
                            designing, learning and play video games
                            </p>
                    </div>
                </div>
            </section>
        </>
    )
}