import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const style = {
  marginBottom: 24
};

const LastGamePlayed = () => (<Card style={style}>
  <CardHeader title="Last game played" />
  <CardText></CardText>
</Card>);

export default LastGamePlayed;
