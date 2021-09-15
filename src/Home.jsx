import { Container, Grid} from 'semantic-ui-react';
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
        <Container className="productPanel">
            <div>
                <h1 class="ui huge header productTitle">Hacktane<h2 class="ui sub header">September 13th - 17th 2021</h2></h1>
            </div>
          <h1 class="ui header">Data is Beautiful</h1>
          
          <h3>Issue</h3>
          <p>Multiple panes of glass.</p>

          <h3>Solution</h3>
          <p>hacks</p>

          <h3>The team</h3>
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Home;