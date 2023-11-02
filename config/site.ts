export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Bitcoin Adult",
	description: "Bitcoin Adult is a cryptocurrency that aims to provide privacy and security to its users.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Wallet",
      href: "/wallet",
    },
    {
      label: "Roadmap",
      href: "/roadmap",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Whitepaper",
      href: "/whitepaper",
    }
	],
	navMenuItems: [
		{
			label: "Wallet",
			href: "/wallet",
		  },
		  {
			label: "Roadmap",
			href: "/roadmap",
		  },
		  {
			label: "Team",
			href: "/team",
		  },
		  {
			label: "Whitepaper",
			href: "/whitepaper",
		  },
	],
	links: {
		github: "https://github.com/BitcoinAdultV2/BitcoinAdultV2",
		twitter: "https://twitter.com/bitcoin_adult",
		docs: "https://github.com/BitcoinAdultV2/BitcoinAdultV2",
		discord: "https://discord.gg/nyAhUFXVzF",
    sponsor: "https://github.com/BitcoinAdultV2"
	},
};
