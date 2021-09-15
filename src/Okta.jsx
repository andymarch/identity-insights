import { Container, Grid} from 'semantic-ui-react';
import './Okta.css';
import SideNav from './SideNav';
import TopNav from './TopNav'

const Okta = () => {
  return (
    <Container ui fluid>
      <TopNav></TopNav>
      <Grid borderless columns={2} divided='vertically'>
        <Grid.Column width={3}>
          <SideNav></SideNav> 
        </Grid.Column>
        <Grid.Column>
        <Container className="productPanel">
            <div>
                <h1 class="ui huge header productTitle">Okta<h2 class="ui sub header">examplydev.okta-emea.com</h2></h1>
            </div>
          Add okta data here
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Okta;