import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Container, Row, Col} from 'react-grid-system';
import LastGamePlayed from './components/LastGamePlayed';
import LastGamesPlayed from './components/LastGamesPlayed';

const style = {
  marginBottom: 24
};

const Dashboard = () => (<Container fluid>
  <Row>
    <Col sm={4}>
      <LastGamesPlayed />
    </Col>
    <Col sm={8}>
      <LastGamePlayed />
    </Col>
  </Row>
</Container>);

export default Dashboard;
