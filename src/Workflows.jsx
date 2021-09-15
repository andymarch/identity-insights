import { Container, Grid} from 'semantic-ui-react';
import './Workflows.css';
import SideNav from './SideNav';
import TopNav from './TopNav'

const Workflows = () => {
  return (
    <Container ui fluid>
      <TopNav></TopNav>
      <Grid borderless columns={2} divided='vertically'>
        <Grid.Column width={4}>
          <SideNav></SideNav> 
        </Grid.Column>
        <Grid.Column>
        <Container className="productPanel">
          Add some workflows data here
        </Container>
        </Grid.Column>
      </Grid>
    </Container>
  );
};
export default Workflows;