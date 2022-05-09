import { IconType } from 'react-icons'
import {
  FaAirbnb,
  FaAudible,
  FaElementor,
  FaEnvelope,
  FaFirstOrder,
  FaGamepad,
  FaHeart,
  FaStar,
} from 'react-icons/fa'

import { MdDryCleaning, MdToys } from 'react-icons/md'
import { IAccount } from './typings'

export const myAccountData: IAccount[] = [
  { icon: FaFirstOrder, text: 'Orders' },
  { icon: FaEnvelope, text: 'Inbox' },
  { icon: FaAirbnb, text: 'Pending Reviews' },
  { icon: FaAirbnb, text: 'Jumia Coupon' },
  { icon: FaHeart, text: 'Saved Items' },
]
export const ourServicesData: IAccount[] = [
  { icon: FaStar, text: 'Jumia Prime' },
  { icon: FaStar, text: 'Pay Airtime & Bills' },
  { icon: FaStar, text: 'Pay Electricity Bills' },
  { icon: FaStar, text: 'Pay Internet Bills' },
  { icon: FaStar, text: 'Buy Data' },
  { icon: FaStar, text: 'Jumia Food' },
]
export const ourCategoriesData: IAccount[] = [
  { icon: FaFirstOrder, text: 'Supermarket' },
  { icon: FaEnvelope, text: 'Health & Beauty' },
  { icon: FaAirbnb, text: 'Phone & Tablet ' },
  { icon: FaAirbnb, text: 'Computing' },
  { icon: FaElementor, text: 'Electronics' },
  { icon: MdDryCleaning, text: 'Womens Fashon' },
  { icon: FaHeart, text: 'Baby Products' },
  { icon: FaGamepad, text: 'Gaming' },
  { icon: FaHeart, text: 'Sporting Goods' },
  { icon: MdToys, text: 'Automobile' },
]

export const categories: { image: string; text: string }[] = [
  {
    image:
      'https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/71/378017/1.jpg?3332',
    text: 'Computing',
  },
  {
    image:
      'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/phones-tablets.png',
    text: 'Pohes & Tablets',
  },
  {
    image: 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/fashion.png',
    text: 'Fashion',
  },
  {
    image: 'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/groceries.png',
    text: 'Groceries',
  },
  {
    image:
      'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/electronics.png',
    text: 'Electronics',
  },
  {
    image:
      'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/baby-products.png',
    text: 'Baby Products',
  },
  {
    image:
      'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/health-beauty.png',
    text: 'Health and Beauty',
  },
  {
    image:
      'https://ng.jumia.is/cms/0-1-homepage/0-0-thumbnails/home-office.png',
    text: 'Home and Office',
  },
]
