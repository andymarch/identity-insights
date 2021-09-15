import { Container, Grid, Divider} from 'semantic-ui-react';
import './Workflows.css';
import SideNav from './SideNav';
import TopNav from './TopNav'

const Workflows = () => {
  return (
    <Container ui fluid>
      <TopNav></TopNav>
      <Grid borderless columns={2} divided='vertically'>
        <Grid.Column width={3}>
          <SideNav></SideNav> 
        </Grid.Column>
        <Grid.Column>
        <Container className="productPanel">
            <Container className="productPanel">
                <div>
                    <h1 class="ui huge header productTitle">Workflows<h2 class="ui sub header">examplydev.workflows.oktapreview.com</h2></h1>
                </div>
                <Divider></Divider>
            </Container>
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Workflows;