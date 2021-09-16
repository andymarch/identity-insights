import { Container, Grid, GridColumn, GridRow} from 'semantic-ui-react';
import './Home.css';
import SideNav from './SideNav';
import TopNav from './TopNav'

const Home = () => {
  return (
    <Container ui fluid>
      <TopNav></TopNav>
      <Grid borderless columns={2} divided='vertically'>
        <Grid.Column width={3}>
          <SideNav></SideNav> 
        </Grid.Column>
        <Grid.Column>
        <img src="/team/II.png" width="500px"></img>
        <Container className="productPanel">
            <div>
                <h1 class="ui huge header productTitle">Hacktane: Data is Beautiful<h2 class="ui sub header">September 13th - 17th 2021</h2></h1>
            </div>
          
          <h3>Issue ❌</h3>
          <ul>
            <li>The Okta identity platform now has multiple panes of glass each of which require monitoring seperately.</li>
            <li>Trust and transpancy are key Okta values, so enabling customers to easily view their own consumption/data is critical.</li>
            <li>Customer's today require data teams to build these tools to access the data avaiable in each platform product.</li>
            <li>Customers today are dependant on CSM to query Tablau for records of MAU- which is rigid and inflexible. 90% of Okta customers don't have a CSM!</li>
            <li>In the Forester Wave report 2021 we scored 3/5 for report/compliance, this tool address's that gap.</li>
            <li>Licence compliance is important to maximise revenue, the current Tablau reporting does not adress all use cases- eg. Tarmac Group showing 0 MAU consumption.</li>
            <li>For FY22 there is a VMT all around Data- <i>Empower with Data</i></li>
          </ul>

          <h3>Solution ✅ </h3>
          <p>Using the new Okta log streaming integrate feeds from each component into AWS EventBridge to build an aggregated log. Push this aggregated log to OpenSearch and build queries based on customer requests.</p>
          <p>This gives admins a real time report from all of the components in the platform in a form that is suitable for an ops room.</p>
          <p>As part of the hackathon we also had to build out some test rigs to generate the data to display.</p>
          <img style={{maxWidth:'100%'}} src="./hacktane-architecture.png" alt="architecture"/>

          <h3>The team 🧑‍💻</h3>

          <Grid columns={5}>
            <GridColumn>
              <GridRow>
              <img class="ui small circular image" src="/team/matt.jpeg"></img>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>Matt Bailey</b></p>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>Platform Specialist</b></p>
              </GridRow>
              <GridRow>
              <p align="center"><img src="/team/UK.png" width="50px"></img></p> 
              </GridRow>
            </GridColumn>
            <GridColumn>
              <GridRow>
              <img class="ui small circular image" src="/team/waldemar.jpg"></img>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>Waldemar Rosenfeld</b></p>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>Platform Specialist</b></p>
              </GridRow>
              <GridRow>
              <p align="center"><img src="/team/Germany.png" width="50px"></img></p> 
              </GridRow>
            </GridColumn>
            <GridColumn>
              <GridRow>
              <img class="ui small circular image" src="/team/tomasz.png"></img>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>Tomasz Wrobel</b></p>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>Sr Software Dev</b></p>
              </GridRow>
              <GridRow>
              <p align="center"><img src="/team/Canada.png" width="50px"></img></p> 
              </GridRow>
            </GridColumn>
            <GridColumn>
              <GridRow>
                <img class="ui small circular image" src="/team/andy.jpg"></img>
              </GridRow>
              <GridRow className="centered">
                <p align="center" className="ui center aligned"><b>Andy March</b></p>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>Sr Platform Specialist</b></p>
              </GridRow>
              <GridRow>
              <p align="center"><img src="/team/UK.png" width="50px"></img></p> 
              </GridRow>
            </GridColumn>
            <GridColumn>
              <GridRow>
              <img class="ui small circular image" src="/team/james.png"></img>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>James Perkins</b></p>
              </GridRow>
              <GridRow>
              <p align="center" className="ui center aligned"><b>SE Manager</b></p>
              </GridRow>
              <GridRow>
              <p align="center"><img src="/team/Portugal.png" width="50px"></img></p> 
              </GridRow>
            </GridColumn>
          </Grid>

          <h3>Thanks 🎉</h3>
          Dan Denmnhardt (@dan.dennhardt) and Azhar Iqbal (@charizard) for enabling Okta log streaming.
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Home;