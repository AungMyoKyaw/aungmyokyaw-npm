const React = require('react');
const Ink = require('ink');
const BigText = require('ink-big-text');
const Link = require('ink-link');

const { Component } = React;
const { render, Color, Box } = Ink;

class AungMyoKyaw extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Aung Myo Kyaw',
      about: 'nothing',
      items: [
        {
          label: 'Website',
          url: 'https://www.aungmyokyaw.com/'
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/MgAungMyoKyaw'
        },
        {
          label: 'Github',
          url: 'https://github.com/AungMyoKyaw'
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/aungmyokyaw/'
        },
        {
          label: 'Blog',
          url: 'https://blog.aungmyokyaw.com/'
        }
      ]
    };
  }
  render() {
    return (
      <Box flexDirection="column" padding={1}>
        <Box marginBottom={1}>
          <Color green>
            <BigText
              text={this.state.name}
              font="chrome"
              space={false}
              align="left"
            />
          </Color>
        </Box>
        {this.state.items.map((item, i) => {
          return (
            <Box marginLeft={1} marginBottom={1} key={i}>
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

render(<AungMyoKyaw />);
