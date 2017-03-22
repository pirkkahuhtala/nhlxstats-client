import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Container, Row, Col} from 'react-grid-system';

const style = {
  marginBottom: 24
};

const Dashboard = () => (<Container fluid>
  <Row>
    <Col sm={4}>
      <Card style={style}>
        <CardHeader title="Last 5 games" />
        <CardText></CardText>
      </Card>
    </Col>
    <Col sm={8}>
      <Card style={style}>
        <CardHeader title="Last game played" />
        <CardText></CardText>
      </Card>
    </Col>
  </Row>
</Container>);

export default Dashboard;
