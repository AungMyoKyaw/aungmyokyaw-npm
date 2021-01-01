const React = require('react');
const PropTypes = require('prop-types');
const Ink = require('ink');
const BigText = require('ink-big-text');
const Link = require('ink-link');

const { Component } = React;
const { render, Color, Box } = Ink;

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

class NameCard extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Box
        borderStyle="double"
        borderColor="cyan"
        float="center"
        flexDirection="column"
        padding={1}
      >
        <Box float="center" marginBottom={1}>
          <BigText
            text={this.props.name}
            font="tiny"
            space={false}
            colors={['green']}
            background="blue"
            align="left"
          />
        </Box>
        {this.props.items.map((item, i) => {
          return (
            <Box float="center" marginLeft={1} marginBottom={1} key={i}>
              <Color green>
                <Link url={item.url}>{item.label}</Link>
              </Color>
            </Box>
          );
        })}
      </Box>
    );
  }
}

NameCard.propTypes = {
  name: PropTypes.string.isRequired,
  about: PropTypes.string,
  items: PropTypes.array.isRequired,
};

render(
  <NameCard
    name={nameCardConfig.name}
    about={nameCardConfig.about}
    items={nameCardConfig.items}
  />
);
