/**
 * Facts about the charity, as recorded on the Charity Commission register
 * (checked 2026-10-15). Google for Nonprofits' verification partner matches
 * the website against these, so they are quoted, not paraphrased.
 */
const REGISTER_ENTRY = 'https://register-of-charities.charitycommission.gov.uk/en/charity-search/-/charity-details/1034707';

export const charity = {
	registeredName: 'Brooke Parent-Teacher and Friends Association',
	shortName: 'Brooke Primary PTFA',
	number: '1034707',
	registeredOn: '8 March 1994',
	schoolName: 'Brooke Church of England VC Primary School',
	address: ['Brooke Primary School', 'High Green', 'Norwich', 'Norfolk', 'NR15 1HP'],
	email: 'contact@brookeprimaryptfa.org.uk',
	governingDocument: 'Constitution adopted 6 December 1993, amended 4 October 2007 and 18 November 2025',
	areaOfBenefit: 'The catchment area of the school',
	objects: {
		lead: 'The object of the association is to advance the education of pupils in the school, in particular by:',
		means: [
			'developing effective relationships between the staff, parents and others associated with the school',
			'engaging in activities or providing facilities or equipment which support the school and advance the education of the pupils.'
		]
	},
	latestFinances: { yearEnding: '31 August 2025', income: '£4,188', expenditure: '£12,481' },
	register: {
		entry: REGISTER_ENTRY,
		trustees: `${REGISTER_ENTRY}/trustees`,
		accounts: `${REGISTER_ENTRY}/accounts-and-annual-returns`
	},
	schoolWebsite: 'https://www.brooke.norfolk.sch.uk'
} as const;
