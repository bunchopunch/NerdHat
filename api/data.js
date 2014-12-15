// APPLICATION DATA / MOCK ------------------------------------------------------------------- 

var hats = [
  {
    id: '0',
    href: '/api/hats/0',
    name: 'Fancy Fedora',
    description: 'No, Not the operating system! This hat is a nerds cream dream!',
    features: [
      'Tippable',
      'Exists outside the Friendzone Continuum',
      'M\'lady!'
    ],
    price: '109.56',
    image: 'fedora.jpg'
  },
  {
    id: '1',
    href: '/api/hats/1',
    name: 'Houndstooth Trilby',
    description: 'Trilby? More like tribute. The sleek look and feel of this houndstooth stands for everything modern fashion has to offer!',
    features: [
      'The sleek feel of houndstooth',
      'One size fits almost most',
      'Also available at Target'
    ],
    price: '49.56',
    image: 'trilby.jpg'
  },
  {
    id: '2',
    href: '/api/hats/2',
    name: 'Twiddle Me Not Top Hat',
    description: 'The top hat and monicle are no longer just for the high and mighty (yet lovable) hackers of LulzSec, drinking wine in their ivory towers. Don this headgear and become enlightened.',
    features: [
      'Black: for stealth',
      '1337 HaX0r skillz',
      'Monicle not included'
    ],
    price: '159.56',
    image: 'tophat.jpg'
  }
];

module.exports = hats;