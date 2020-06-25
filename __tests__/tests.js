import "@babel/polyfill";
import React from 'react';
import sinon from 'sinon';
import {shallow, mount, render} from 'enzyme';
import App from '../client/src/components/App.jsx';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = mount(<App />);
  });
  afterEach(() => {
    component.unmount();
  })

  it('page should load', () => {
    expect(component.contains(<h2>More Places to Stay</h2>)).toBe(true);
  })

  it('getData should be called at mount', () => {
    const instance = component.instance();
    jest.spyOn(instance, 'getData');
    instance.componentDidMount();
    expect(instance.getData).toHaveBeenCalled();
  })

  // it('should successfully retrieve data', async () => {
  //   const instance = component.instance();
  //   await instance.getData()
  //   expect(instance.state.places.length).toEqual(12);
  // })

  it('nestView should change state', () => {
    const instance = component.instance();
    jest.spyOn(instance, 'nextView');
    instance.nextView();
    expect(instance.state.view).toEqual(2);
  })
});
