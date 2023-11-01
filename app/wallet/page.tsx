"use client";
import { title, subtitle } from "@/components/primitives";
export default function WalletPage() {
	return (
		<>
		<div>
			<h1 className={title({ color: "violet" })}>Bitcoin&nbsp;</h1>
			<h1 className={title({ color: "violet" })}>Adult&nbsp;</h1>
			<h1 className={title()}>Wallet&nbsp;</h1>
			<h2 className={`${subtitle({ class: "mt-4" })} italic`}>
            <p>Welcome to the gateway of secure, decentralized, and instant financial transactions! </p>
            <p>Here, you'll find the official BitcoinAdult wallet tailored for your specific device and operating system. Whether you're a long-time crypto enthusiast or just beginning your journey,</p>
            <p>our wallet ensures seamless management of your BitcoinAdult holdings</p>
            <p>Dive into an intuitive interface, fortified security, and robust functionality.</p>
            <p>Choose your preferred version below and step into the future of financial autonomy and privacy with BitcoinAdult.</p>
        </h2>
		</div>
	   </>
	);
}
