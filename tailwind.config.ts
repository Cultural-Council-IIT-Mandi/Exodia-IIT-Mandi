import type { Config } from "tailwindcss";

const { withUt } = require("uploadthing/tw");

const colors = require("tailwindcss/colors");
const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default withUt ({
	
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {

			transitionTimingFunction: {
				"minor-spring": "cubic-bezier(0.18,0.89,0.82,1.04)",
			  },
			darkMode: 'class',
			backgroundImage: {
				'custom-gradient': 'linear-gradient(to bottom, #171720, #171730, #171738)'
			},
			colors: {
				'gold': '#ffcc00',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			animation: {
				scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
				first: "moveVertical 30s ease infinite",
				second: "moveInCircle 20s reverse infinite",
				third: "moveInCircle 40s linear infinite",
				fourth: "moveHorizontal 40s ease infinite",
				"marquee-horizontal": "marquee-x var(--duration) infinite linear",
        		"marquee-vertical": "marquee-y var(--duration) linear infinite",
				fifth: "moveInCircle 20s ease infinite",
				buttonshine: 'shine 2s infinite linear',
				"parallax-bg": "parallax 10s linear infinite",
        		"parallax-bike": "bike 5s linear infinite",
			},
			keyframes: {
				parallax: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" },
				  },
				  bike: {
					"0%": { transform: "translateX(100vw)" },
					"100%": { transform: "translateX(-100%)" },
				  },
				"marquee-x": {
					from: { transform: "translateX(0)" },
					to: { transform: "translateX(calc(-100% - var(--gap)))" },
				  },
				  "marquee-y": {
					from: { transform: "translateY(0)" },
					to: { transform: "translateY(calc(-100% - var(--gap)))" },
				  },
				"reveal-up": {
					"0%": { opacity: "0", transform: "translateY(80%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				  },
				  "reveal-down": {
					"0%": { opacity: "0", transform: "translateY(-80%)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				  },
					"content-blur": {
					"0%": { filter: "blur(0.3rem)" },
					"100%": { filter: "blur(0)" },
				  },
				shine: {
					'0%': { boxShadow: '0 0 10px 2px white' },
					'50%': { boxShadow: '0 0 14px 2.2px white' },
					'100%': { boxShadow: '0 0 10px 2px white' },
				},
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))'
					},

				},
				moveHorizontal: {
					"0%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
					"50%": {
						transform: "translateX(50%) translateY(10%)",
					},
					"100%": {
						transform: "translateX(-50%) translateY(-10%)",
					},
				},
				moveInCircle: {
					"0%": {
						transform: "rotate(0deg)",
					},
					"50%": {
						transform: "rotate(180deg)",
					},
					"100%": {
						transform: "rotate(360deg)",
					},
				},
				moveVertical: {
					"0%": {
						transform: "translateY(-50%)",
					},
					"50%": {
						transform: "translateY(50%)",
					},
					"100%": {
						transform: "translateY(-50%)",
					},
				},
			},
			screens: {
				'custom-lg': '1100px',
				'xs': '480px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [addVariablesForColors, require("tailwindcss-animate")],
}) satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		":root": newVars,
	});
}

