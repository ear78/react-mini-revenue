import React from 'react'
import {
  render,
  unmountComponentAtNode
} from "react-dom";
import {
  act
} from "react-dom/test-utils";

import Paragraph from './Paragraph'

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

it( "renders with props.children", () => {
  act( () => {
    render( <Paragraph>Hello, Margaret I'm a paragraph that's longer than the page title component!</Paragraph>, container );
  } );
  expect( container.textContent )
    .toBe( "Hello, Margaret I'm a paragraph that's longer than the page title component!" );
} );