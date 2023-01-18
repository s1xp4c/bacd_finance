import { ISideNav } from '../SideNav/SideNav';

// { label: 'Home', href: '/' },
const SNAV_LINKS: ISideNav[] = [
  {
    label: 'SWAP',
    href: '/swap',
    logo: 'marketplace',
  },
  {
    label: 'PRESALE',
    href: '/presale',
    logo: 'chest',
  },
  {
    label: 'VOTING',
    href: '/voting',
    logo: 'documentation',
  },
  {
    label: 'CHARTS',
    href: '/charts',
    children: [
      {
        label: 'ERCTEST',
        subLabel: 'Get your ERC Stuff',
        href: '/balances/erc20',
        logo: 'token',
      },
    ],
  },
];

export default SNAV_LINKS;
