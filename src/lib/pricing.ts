export type AddOn = {
	name: string;
	price: number;
};

export type PricingPackage = {
	slug: string;
	name: string;
	price: number;
	accent: string;
	interior: readonly string[];
	exterior: readonly string[];
	addOns: readonly AddOn[];
};

const standardAddOns = [
	{ name: 'Pet Hair Removal', price: 25 },
	{ name: 'Clay Bar Treatment', price: 25 },
	{ name: 'Wax Sealant', price: 20 }
] as const;

export const pricingPackages = [
	{
		slug: 'express',
		name: 'Express Detail',
		price: 75,
		accent: '#126bff',
		interior: ['Standard Vacuum', 'Basic Wipe Down (Surfaces Only)'],
		exterior: ['Exterior Hand Wash'],
		addOns: standardAddOns
	},
	{
		slug: 'deluxe',
		name: 'Deluxe Detail',
		price: 105,
		accent: '#78d51f',
		interior: ['Standard Vacuum', 'Full Interior Wipe Down'],
		exterior: ['Exterior Hand Wash', 'Tire Shine', 'Wheel & Rim Cleaning', 'Wax Sealant'],
		addOns: standardAddOns
	},
	{
		slug: 'premium',
		name: 'Premium Detail',
		price: 135,
		accent: '#8e3dff',
		interior: [
			'Thorough Vacuum',
			'Full Interior Wipe Down',
			'Shampoo Seats & Carpets',
			'Deep Clean & Extract',
			'Door Jambs Cleaned',
			'Dashboard & Console Detailed'
		],
		exterior: ['Exterior Hand Wash', 'Wax Sealant', 'Clay Towel Treatment', 'Wheel Clean & Shine'],
		addOns: standardAddOns
	},
	{
		slug: 'supreme',
		name: 'Supreme Detail',
		price: 160,
		accent: '#f0a51a',
		interior: [
			'Thorough Vacuum',
			'Full Interior Wipe Down',
			'Shampoo Seats & Carpets',
			'Deep Clean & Extract',
			'Door Jambs Cleaned',
			'Dashboard & Console Detailed'
		],
		exterior: [
			'Exterior Hand Wash',
			'Wax Sealant',
			'Clay Towel Treatment',
			'Wheel Clean & Shine',
			'Tire Shine'
		],
		addOns: standardAddOns
	}
] as const satisfies readonly PricingPackage[];

export const plasticRestore = {
	name: 'Car Plastic Restore',
	price: 80,
	accent: '#126bff',
	image: '/plastic-restore-before-after.jpg',
	benefits: ['Restores faded plastic', 'Long lasting protection', 'Clean, rich like new look']
} as const;

export const subscription = {
	price: 120,
	visits: 2,
	availability: 15,
	benefits: ['High Quality Details', 'Convenient Service', 'Consistent Results']
} as const;

export const valuePropositions = [
	{ title: 'Professional Results.', detail: 'Every Time.' },
	{ title: 'Top Quality Products.', detail: 'Expert Care.' },
	{ title: 'We Take Pride In Every Detail', detail: "So You Don't Have To." }
] as const;
