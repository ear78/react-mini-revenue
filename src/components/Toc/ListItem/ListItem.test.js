import React from 'react'

import {
  render,
  unmountComponentAtNode
} from "react-dom";
import {
  act
} from "react-dom/test-utils";

import ListItem from './ListItem'

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

it( 'renders without crashing', () => {
  const div = document.createElement( 'div' );
  render( <ListItem />, div );
} );

it( "expects data props to render a list item.", async () => {
  const fakeData = {
    "product": "List 1",
    "table": "Tropical Fruit",
    "contents": "Loaded With Potassium"
  }
  jest.spyOn( global, "fetch" )
    .mockImplementation( () =>
      Promise.resolve( {
        json: () => Promise.resolve( fakeData )
      } )
    );
  await act( () => {
    render( <ListItem item="List 1"/>, container );
  } );
  expect( container.textContent )
    .toContain( fakeData.product );

  global.fetch.mockRestore();
} );