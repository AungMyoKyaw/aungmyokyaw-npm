#!/usr/bin/env node

const namecard = require('namecard');
const nameCardConfig = {
  name: 'Aung Myo Kyaw',
  about: 'nothing',
  items: [
    {
      label: 'Github',
      url: 'https://github.com/AungMyoKyaw',
    },
    {
      label: 'Blog',
      url: 'https://blog.aungmyokyaw.com/',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/aung_myo_kyaw',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aungmyokyaw/',
    },
  ],
};
namecard(nameCardConfig.name, nameCardConfig.about, nameCardConfig.items);
