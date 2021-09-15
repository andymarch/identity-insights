import { Container, Grid, Divider, GridRow, GridColumn} from 'semantic-ui-react';
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
            <div>
                <h1 class="ui huge header productTitle">Auth0<h2 class="ui sub header">examplydev.eu.auth0.com</h2></h1>
            </div>
            <Divider></Divider>
            <Grid>
                <GridRow columns="3">
                    <GridColumn>
                    <h2 className="ui header">
                    Logins last hour
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/7ea30460-1620-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1h%2Cto%3Anow))" height="300" width="300"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    Logins last24hrs
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/b46400e0-1620-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-24h%2Cto%3Anow))" height="300" width="300"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    Monthly Active Users
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/19ebf600-1628-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Cto%3Anow))" height="300" width="500"></iframe>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Auth0;