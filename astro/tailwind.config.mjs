import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,jsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', ...defaultTheme.fontFamily.mono],
			},
			colors: {
				// Brutalism color palette - Emerald Green
				brutal: {
					50: '#ecfdf5',
					100: '#d1fae5',
					200: '#a7f3d0',
					300: '#6ee7b7',
					400: '#34d399',
					500: '#10b981',
					600: '#059669',
					700: '#047857',
					800: '#065f46',
					900: '#064e3b',
					950: '#022c22',
				},
				// Dark mode colors
				dark: {
					50: '#f8fafc',
					100: '#f1f5f9',
					200: '#e2e8f0',
					300: '#cbd5e1',
					400: '#94a3b8',
					500: '#64748b',
					600: '#475569',
					700: '#334155',
					800: '#1e293b',
					900: '#0f172a',
					950: '#020617',
				}
			},
			boxShadow: {
				'brutal': '4px 4px 0px 0px #000000',
				'brutal-lg': '8px 8px 0px 0px #000000',
				'brutal-xl': '12px 12px 0px 0px #000000',
				'brutal-hover': '6px 6px 0px 0px #000000',
				'brutal-lg-hover': '10px 10px 0px 0px #000000',
			},
			animation: {
				'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			keyframes: {
				glitch: {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
