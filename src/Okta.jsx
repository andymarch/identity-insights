import { Container, Divider, Grid, GridColumn, GridRow} from 'semantic-ui-react';
import './Okta.css';
import SideNav from './SideNav';
import TopNav from './TopNav'

const Okta = () => {
  return (
    <Container ui fluid>
      <TopNav></TopNav>
      <Grid borderless columns={2} divided='vertically'>
        <Grid.Column width={3}>
          <SideNav activeItem="okta"></SideNav> 
        </Grid.Column>
        <Grid.Column>
        <Container className="productPanel">
            <div>
                <h1 class="ui huge header productTitle">Okta<h2 class="ui sub header">examplydev.okta-emea.com</h2></h1>
            </div>
            <Divider></Divider>
            <Grid>
                <GridRow columns="3">
                    <GridColumn>
                    <h2 className="ui header">
                    Logins last hour
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/3b9a1bd0-1621-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1h%2Cto%3Anow))" height="300" width="300"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    Logins last24hrs
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/49e8d410-1621-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-24h%2Cto%3Anow))" height="300" width="300"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    Monthly Active Users
                </h2>
                <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/f86cdf00-15f8-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Cto%3Anow))" height="300" width="500"></iframe>
                    </GridColumn>
                </GridRow>
            </Grid>
            <Container>
                
            </Container>
            <Container>
                <h2 className="ui header">
                    Today's user authentications
                    <h2 class="sub header">Authentication traffic to your tenant in 5 minute intervals.</h2>
                </h2>
                <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/b6312a60-155d-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fd%2Cto%3Anow%2Fd))" height="500" width="100%"></iframe>
            </Container>
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Okta;