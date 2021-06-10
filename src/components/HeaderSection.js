import React, { Component } from 'react';
import {
    Menu,
    Segment,
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Search
} from 'semantic-ui-react';

export default class HeaderSection extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            activeItem: 'home'
        }
    }  

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='gallery'
                        active={activeItem === 'gallery'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='genres'
                        active={activeItem === 'genres'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='authors'
                        active={activeItem === 'authors'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item
                            name='signUp'
                            active={activeItem === 'Sign Up'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
                <SegmentExamplePlaceholderGrid />
            </div>
        );
    }
}

const SegmentExamplePlaceholderGrid = () => (
  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Find Quotes
          </Header>

          <Search placeholder='Search Author / Quotes ...' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='world' />
            Add New Quote
          </Header>
          <Button primary>Create</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);
