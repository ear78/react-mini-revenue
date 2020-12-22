import React from 'react'
import {
  render,
  unmountComponentAtNode
} from "react-dom";
import {
  act
} from "react-dom/test-utils";

import PageTitle from './PageTitle'

let container = null;
beforeEach( () => {
  // setup a DOM element as a render target
  container = document.createElement( "div" );
  document.body.appendChild( container );
} );

afterEach( () => {
  // cleanup on exiting
  unmountComponentAtNode( container );
  container.remove();
  container = null;
} );

it( "renders with or without a name", () => {
  act( () => {
    render( <PageTitle>Hello, Margaret!</PageTitle>, container );
  } );
  expect( container.textContent )
    .toBe( "Hello, Margaret!" );
} );