import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    createdAt: '27/03/2021',
    description: '',
    media: '/static/images/products/product_1.png',
    title: 'TRAK POS',
    totalDownloads: '594'
  },
  {
    id: uuid(),
    createdAt: '31/03/2021',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: '/static/images/products/product_2.png',
    title: 'TRAK RETSAURANT',
    totalDownloads: '625'
  },
  {
    id: uuid(),
    createdAt: '03/04/2021',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '/static/images/products/product_3.png',
    title: 'JULISHA BULK EMAILER',
    totalDownloads: '857'
  }
];
