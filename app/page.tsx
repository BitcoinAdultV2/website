import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";

export default function Home() {
    return (
        
<section className="flex justify-between items-start gap-4 py-8 md:py-10 blurred-background">
    <div className="w-1/2 items-center text-center">
        <h1 className={title({ color: "violet" })}>Bitcoin&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Adult&nbsp;</h1>
        <br />
        <h1 className={title()}>
            <p> Delivers a seamless experience</p> <p>tailored  
            for the unique demands</p> <p>of online adult content</p> <p>and webcam shows.</p>
        </h1>
        <h2 className={`${subtitle({ class: "mt-4" })} italic`}>
            <p>Whether you're a performer, a platform, or a patron,</p> <p>BitcoinAdult ensures your financial interactions remain confidential,</p> <p>with top-tier encryption safeguarding every transaction.</p> <p>Say goodbye to lengthy wait times, exorbitant fees, and potential breaches of discretion.</p> <p>With BitcoinAdult, you're not just investing in a cryptocurrency you're investing in peace of mind.</p>

            Join the BitcoinAdult revolution and experience the perfect blend of pleasure and privacy.
        </h2>
    </div>

</section>

    );
}
