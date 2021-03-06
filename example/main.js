'use strict';

var Avatar = require('./Avatar');
var {Block} = require('../lib/Display');
var LayoutConstants = require('./LayoutConstants');
var React = require('react');

React.render(
  <Block
    marginLeft="auto"
    marginRight="auto"
    marginTop="128"
    border={'1px solid ' + LayoutConstants.secondaryColor}
    width={48 * LayoutConstants.gridUnit}
    minHeight={64}>
    <Avatar username="pwh" />
    <Avatar username="justintimberlake" />
    <Avatar username="carlyraejepsen" />
  </Block>,
  document.getElementById('container')
);
