import { ISubNav } from '../SubNav/SubNav';

// { label: 'Home', href: '/' },
const NAV_LINKS: ISubNav[] = [
  {
    label: 'PROFILE',
    href: '/user',
  },
  {
    label: 'TRANSACTIONS',
    href: '/transactions',
  },
  {
    label: 'TRANSFERS',
    href: '/transfers',
    children: [
      {
        label: 'ERC20',
        subLabel: 'Get your ERC20 transfers',
        href: '/transfers/erc20',
        logo: 'token',
      },
      {
        label: 'NFT',
        subLabel: 'Get your ERC721 and ERC1155 transfers',
        href: '/transfers/nft',
        logo: 'lazyNft',
      },
    ],
  },
  {
    label: 'BALANCES',
    href: '/balances',
    children: [
      {
        label: 'ERC20',
        subLabel: 'Get your ERC20 balances',
        href: '/balances/erc20',
        logo: 'token',
      },
      {
        label: 'NFT',
        subLabel: 'Get your ERC721 and ERC1155 balances',
        href: '/balances/nft',
        logo: 'pack',
      },
    ],
  },
];

export default NAV_LINKS;
