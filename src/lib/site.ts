export const site = {
	name: 'Ideal Detailing',
	description: 'Convenient mobile car detailing, booked around your schedule.',
	email: 'hello@example.com',
	services: [
		{
			number: '01',
			name: 'Exterior Detail',
			description: 'A polished exterior service placeholder ready for your final package details.',
			features: ['Hand wash', 'Wheel and tire clean', 'Paint-safe finish'],
			accent: '#126bff'
		},
		{
			number: '02',
			name: 'Interior Detail',
			description: 'A thorough interior service placeholder ready for your final package details.',
			features: ['Complete vacuum', 'Interior wipe down', 'Glass and trim clean'],
			accent: '#894cff'
		},
		{
			number: '03',
			name: 'Complete Detail',
			description: 'A full inside-and-out option placeholder ready for your final package details.',
			features: ['Interior and exterior', 'Deep-clean treatment', 'Finishing protection'],
			accent: '#f0a51a'
		}
	]
} as const;
