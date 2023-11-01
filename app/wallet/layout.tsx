import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
export default function DocsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
		<div className="base-color h-full flex flex-col justify-center">
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
			<div className="inline-block max-w-lg text-center justify-center">
				{children}
			</div>
		</section>
		<div className="flex flex-row flex-wrap justify-center items-center gap-4 w-full">
		<Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="linux logo"
          height={40}
          radius="sm"
          src="/linux.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Linux</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/BitcoinAdultV2/BitcoinAdultV2/releases/download/v2.0.0/bitcoinadult2.0.0-x86_64-linux-gnu.tar.gz"
        >
          Download from GitHub.
        </Link>
      </CardFooter>
    </Card>
	<Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Windows logo"
          height={40}
          radius="sm"
          src="/windows.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Windows</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/BitcoinAdultV2/BitcoinAdultV2/releases/download/v2.0.0/bitcoinadult2.0.0-win64.zip"
        >
          Download from GitHub.
        </Link>
      </CardFooter>
    </Card>
	<Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Mac logo"
          height={40}
          radius="sm"
          src="/mac.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">Mac</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/BitcoinAdultV2/BitcoinAdultV2/releases/download/v2.0.0/bitcoinadult2.0.0-x86_64-apple-darwin.tar.gz"
        >
          Download from GitHub.
        </Link>
      </CardFooter>
    </Card>
	   </div>
	   </div>
	   </>
	);
}
