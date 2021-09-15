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
            <h2 className="ui header">
                Actions automated
                <h2 class="sub header">These actions have been carried out on the Okta tenant by workflows in the last week.</h2>
            </h2>
            <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/4eb3c8a0-162c-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fw%2Cto%3Anow%2Fw))" height="600" width="800"></iframe>
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Workflows;