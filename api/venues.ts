const venues = [
  { id: '48201', name: 'Harris County, TX' },
  { id: '36061', name: 'New York County, NY' },
  { id: '17031', name: 'Cook County, IL' },
];

export default function handler(
  req: any,
  res: any
) {
  res.status(200).json(venues);
}
