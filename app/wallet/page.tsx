"use client";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
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
            <p>SDive into an intuitive interface, fortified security, and robust functionality.</p>
            <p>Choose your preferred version below and step into the future of financial autonomy and privacy with BitcoinAdult.</p>
        </h2>
		</div>
		<div>
		 <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
		 <CardBody className="overflow-visible p-0">
		   <Image
			 shadow="sm"
			 radius="lg"
			 width="100%"
			 alt="test"
			 className="w-full object-cover h-[140px]"
			 src="/windows.png"
		   />
		 </CardBody>
		 <CardFooter className="text-small justify-between">
		   <b>bla</b>
		   <p className="text-default-500">noooo</p>
		 </CardFooter>
	   </Card>
	   <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
		 <CardBody className="overflow-visible p-0">
		   <Image
			 shadow="sm"
			 radius="lg"
			 width="100%"
			 alt="test"
			 className="w-full object-cover h-[140px]"
			 src="/linux.png"
		   />
		 </CardBody>
		 <CardFooter className="text-small justify-between">
		   <b>bla</b>
		   <p className="text-default-500">noooo</p>
		 </CardFooter>
	   </Card>
	   <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
		 <CardBody className="overflow-visible p-0">
		   <Image
			 shadow="sm"
			 radius="lg"
			 width="100%"
			 alt="test"
			 className="w-full object-cover h-[140px]"
			 src="/mac.png"
		   />
		 </CardBody>
		 <CardFooter className="text-small justify-between">
		   <b>bla</b>
		   <p className="text-default-500">noooo</p>
		 </CardFooter>
	   </Card>
	   </div>
	   </>
	);
}
