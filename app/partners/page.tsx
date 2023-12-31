import { title } from "@/components/primitives";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import {Image} from "@nextui-org/image";


export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>Exchanges</h1>
			<Card className="max-w-[400px] mt-6 font-bold mb-6">
				<CardHeader className="flex gap-3">
					<svg version="1.0" xmlns="http://www.w3.org/2000/svg" style={{ width: "42px", height: "42px" }} width="540.000000pt" height="540.000000pt" viewBox="0 0 540.000000 540.000000" preserveAspectRatio="xMidYMid meet" fill="currentColor"><g transform="translate(0.000000,540.000000) scale(0.100000,-0.100000)" fill="currentColor" stroke="none"><path fill="#EBBE5A" d="M812 4181 c6 -18 1023 -1300 1029 -1298 18 6 236 283 229 292 -4 6 -116 150 -248 321 -133 172 -242 315 -242 318 0 3 103 6 230 6 l229 0 215 -267 215 -268 -33 -40 c-148 -181 -1626 -2036 -1626 -2040 0 -3 319 -5 708 -5 l708 0 164 204 c90 111 162 207 161 212 -4 12 -225 283 -231 283 -3 0 -67 -74 -143 -165 l-138 -164 -230 0 c-141 0 -229 4 -227 9 2 6 293 376 648 822 355 447 657 830 673 850 l27 37 -352 451 -353 451 -708 0 c-412 0 -707 -4 -705 -9z"></path><path d="M3011 3988 c-90 -112 -163 -207 -163 -211 1 -10 225 -286 232 -286 3 0 67 74 143 165 l138 164 230 0 c142 0 229 -4 227 -10 -1 -5 -304 -392 -673 -860 -368 -468 -670 -855 -670 -860 0 -4 157 -206 350 -449 l350 -441 708 0 c412 0 707 4 705 9 -6 18 -1023 1300 -1029 1298 -18 -6 -236 -283 -229 -292 4 -5 116 -150 248 -321 133 -172 242 -315 242 -318 0 -3 -103 -6 -229 -6 l-230 0 -210 255 c-116 140 -211 260 -211 266 0 5 371 478 825 1049 454 572 825 1042 825 1045 0 3 -319 5 -708 5 l-708 0 -163 -202z"></path></g></svg>
					<div className="flex flex-col">
						<p className="text-xl">xeggex.com</p>
					</div>
				</CardHeader>
				<Divider />
				<CardBody>
					<p><Link isExternal href="https://xeggex.com/market/BTAD_BTC" aria-label="xeggex">BTAD-BTC</Link></p>
					<p><Link isExternal href="https://xeggex.com/market/BTAD_USDT" aria-label="xeggex">BTAD-USDT</Link></p>
				</CardBody>
			</Card>
			<h1 className={title()}>Partners</h1>
            {/* Partners Section */}
            <div className="mt-6">
                {/* CoinCodex Link */}
                <Card className="max-w-[400px] mb-4 font-bold">
                    <CardHeader className="flex gap-3">
                        <Image src="/coincodex.png" alt="CoinCodex Logo" style={{ width: "42px", height: "42px" }} />
                        <div className="flex flex-col">
                            <p className="text-xl">CoinCodex</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p><Link isExternal href="https://coincodex.com/crypto/bitcoin-adult/" aria-label="coincodex">CoinCodex - Info, charts, and statistics</Link></p>
                    </CardBody>
                </Card>

                {/* CoinPaprika Card */}
                <Card className="max-w-[400px] mb-4 font-bold">
                    <CardHeader className="flex gap-3">
                        <Image src="/coinpaprika.png" alt="CoinPaprika Logo" style={{ width: "42px", height: "42px" }} />
                        <div className="flex flex-col">
                            <p className="text-xl">CoinPaprika</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p><Link isExternal href="https://coinpaprika.com/coin/btad-bitcoin-adult/" aria-label="coinpaprika">CoinPaprika - Info, charts, and statistics</Link></p>
                    </CardBody>
                </Card>

                {/* Pecunia Card */}
                <Card className="max-w-[400px] mb-4 font-bold">
                    <CardHeader className="flex gap-3">
                        <Image src="/pecunia.png" alt="Pecunia Logo" style={{ width: "42px", height: "42px" }} />
                        <div className="flex flex-col">
                            <p className="text-xl">Pecunia</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p><Link isExternal href="https://pecuniaplatform.io/" aria-label="pecunia">Pecunia - Masternode hosting</Link></p>
                    </CardBody>
                </Card>

                {/* IHOSTMN Card */}
                <Card className="max-w-[400px] mb-4 font-bold">
                    <CardHeader className="flex gap-3">
                        <Image src="/ihostmn.png" alt="IHOSTMN Logo" style={{ width: "42px", height: "42px" }} />
                        <div className="flex flex-col">
                            <p className="text-xl">IHOSTMN</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p><Link isExternal href="https://ihostmn.com/" aria-label="ihostmn">IHOSTMN - Masternode hosting</Link></p>
                    </CardBody>
                </Card>

                {/* Find Your Masternode Card */}
                <Card className="max-w-[400px] mb-4 font-bold">
                    <CardHeader className="flex gap-3">
                        <Image src="/findyourmasternode.png" alt="Find Your Masternode Logo" style={{ width: "42px", height: "42px" }} />
                        <div className="flex flex-col">
                            <p className="text-xl">Find Your Masternode</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p><Link isExternal href="https://findyourmasternodes.com/" aria-label="findyourmasternode">Find Your Masternode - Masternode hosting</Link></p>
                    </CardBody>
                </Card>
				
            </div>
		</div>
	);
}
