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
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/7ea30460-1620-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-1h%2Cto%3Anow))" height="300" width="100%"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    Logins last24hrs
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/b46400e0-1620-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-24h%2Cto%3Anow))" height="300" width="100%"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    Monthly Active Users
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/19ebf600-1628-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Cto%3Anow))" height="300" width="100%"></iframe>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
        <Container>
                <h2 className="ui header">
                    Today's user authentications
                    <h2 class="sub header">Authentication traffic to your tenant in 1 minute intervals.</h2>
                </h2>
                <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/b2d49f90-1626-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fd%2Cto%3Anow%2Fd))" height="600" width="1200"></iframe>
        </Container>

        <Container>
                <h2 className="ui header">
                    Monthly Active Users
                    <h2 class="sub header">Current month-to-date active users vs last month</h2>
                </h2>
                <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/8a89e360-162b-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fw%2Cto%3Anow%2Fw))" height="600" width="100%"></iframe>         
            </Container>
        <Container>
                <h2 className="ui header">
                GeoLocation last 24hours
                
                </h2>
                <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=private#/edit/d95eed30-16c8-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow%2Fd%2Cto%3Anow%2Fd))" height="600" width="100%"></iframe>         
        </Container>

        </Grid.Column>


      </Grid>
    
      <Container className="productPanel">
            
            <Grid>
                <GridRow columns="2">
                    <GridColumn>
                    <h2 className="ui header">
                    Failed Authn Attempts last 24hours
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=private#/edit/ce4878a0-1630-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Cto%3Anow))" height="300" width="100%"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    Most frequent failed users last 24hours
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=private#/edit/1bd49d10-1631-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-30d%2Cto%3Anow))" height="300" width="100%"></iframe>
                    </GridColumn>

                </GridRow>
            </Grid>
        </Container>
        <Container className="productPanel">
            
            <Grid>
                <GridRow columns="3">
                    <GridColumn>
                    <h2 className="ui header">
                    Blocked Users last 24h
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/4f698500-16e5-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-24h%2Cto%3Anow))" height="300" width="100%"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    New Users last 24h
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/5bb8e7a0-16e1-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-24h%2Cto%3Anow))" height="300" width="100%"></iframe>
                    </GridColumn>
                    <GridColumn>
                    <h2 className="ui header">
                    Deleted Users last 24h
                    </h2>
                    <iframe src="https://search-hacktane-lc7gniuymsydmk4lsp23cdd6uq.us-east-1.es.amazonaws.com/_dashboards/app/visualize?security_tenant=global#/edit/e9054a90-16e6-11ec-b2cc-51b429372e2a?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-24h%2Cto%3Anow))" height="300" width="100%"></iframe>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    </Container>
    
    
  );
};
export default Auth0;