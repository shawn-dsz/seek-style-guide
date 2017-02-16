import { expect } from 'chai';
import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import Rating from './Rating';

const renderer = createRenderer();

describe('Rating', () => {
  let element, rating;

  const render = jsx => {
    element = jsx;
    rating = renderer.render(element);
  };

  const stars = () => {
    const { props: { children } } = rating;
    return children[1];
  };

  it('should have a displayName', () => {
    render(<Rating rating={3.2}>SEEK</Rating>);
    expect(element.type.displayName).to.equal('Rating');
  });

  it('should have a adf', () => {
    render(<Rating rating={3.2}>SEEK</Rating>);

    // console.log('{ rating }', rating.props.children.length);
    // console.log('{ rating }', rating.props);
    const fppp = stars();
    console.log(fppp);
    // console.log('{ rating }', rating.props.children[1].props);
    expect(element.type.displayName).to.equal('Rating');
  });
});
