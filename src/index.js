#!/usr/bin/env node

const ImportJsx = require('import-jsx');
const React = require('react');
const Ink = require('ink');
const { render } = Ink;

const nameCardConfig = {
  name: 'Aung Myo Kyaw',
  about: 'nothing',
  items: [
    {
      label: 'Website',
      url: 'https://www.aungmyokyaw.com/',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/aung_myo_kyaw',
    },
    {
      label: 'Github',
      url: 'https://github.com/AungMyoKyaw',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aungmyokyaw/',
    },
    {
      label: 'Blog',
      url: 'https://blog.aungmyokyaw.com/',
    },
  ],
};
const mynameCard = ImportJsx('./ui.js');

function hey(name = 'amk', about = 'amk', items = []) {
  render(
    React.createElement(mynameCard, {
      name: name,
      about: about,
      items: items,
    })
  );
}

hey(nameCardConfig.name, nameCardConfig.about, nameCardConfig.items);
