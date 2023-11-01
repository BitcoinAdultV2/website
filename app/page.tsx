import { title, subtitle } from "@/components/primitives";

export default function Home() {
    return (
        <>
        <section className="flex flex-col justify-center items-center gap-4 py-8 md:py-10 h-full text-center">
            <h1 className={title({ color: "violet" })}>Bitcoin Adult&nbsp;</h1>
            <h2 className={title()}>
                <p>Delivers a seamless experience</p>
                <p>tailored for the unique demands</p>
                <p>of online adult content</p>
                <p>and webcam shows.</p>
            </h2>
            <h2 className={`${subtitle({ class: "mt-4" })} italic`}>
                <p>Whether you're a performer, a platform, or a patron,</p>
                <p>BitcoinAdult ensures your financial interactions remain confidential,</p>
                <p>with top-tier encryption safeguarding every transaction.</p>
                <p>Say goodbye to lengthy wait times, exorbitant fees, and potential breaches of discretion.</p>
                <p>With BitcoinAdult, you're not just investing in a cryptocurrency you're investing in peace of mind.</p>
                Join the BitcoinAdult revolution and experience the perfect blend of pleasure and privacy.
            </h2>
        </section>
        <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </div>
     </>
    );
}
