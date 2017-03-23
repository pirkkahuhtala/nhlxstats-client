import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

const style = {
  marginBottom: 24
};

const LastGamesPlayed = () => (<Card style={style}>
  <CardHeader title="Last 5 games" />
  <CardText></CardText>
</Card>);

export default LastGamesPlayed;
