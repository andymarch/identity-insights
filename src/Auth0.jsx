import { Container, Grid} from 'semantic-ui-react';
import './Auth0.css';
import SideNav from './SideNav';
import TopNav from './TopNav'

const Auth0 = () => {
  return (
    <Container ui fluid>
      <TopNav></TopNav>
      <Grid borderless columns={2} divided='vertically'>
        <Grid.Column width={3}>
          <SideNav></SideNav> 
        </Grid.Column>
        <Grid.Column>
        <Container className="productPanel">
          Add auth0 data here
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Auth0;