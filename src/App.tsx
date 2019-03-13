import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tree } from './tree';
import { Tooltip } from './tooltip';

export interface State {
  top: number;
  left: number;
  width: number;
  height: number;
  isTooltipVisible: boolean;
}

export interface Props {

}

class App extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.handleRectangleHover = this.handleRectangleHover.bind(this);
    this.state = {
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      isTooltipVisible: false,
    }
  }

  handleRectangleHover = (e: ClientRect) => {
    this.setState({ left: e.left, top: e.top, width: e.width, height: e.height, isTooltipVisible: true })
  }

  handleRectangleMouseLeave = () => {
    this.setState({ isTooltipVisible: false });
  }

  handleTooltipHover = () => {
    this.setState({ isTooltipVisible: true })
  }

  handleTooltipBlur = () => {
    this.setState({ isTooltipVisible: false })
  }

  render() {
    return (
      <div className="App">
        <Tree onRectangleHover={this.handleRectangleHover} onRectangleMouseLeave={this.handleRectangleMouseLeave}></Tree>
        <Tooltip
          onHover={this.handleTooltipHover}
          onBlur={this.handleTooltipBlur}
          top={this.state.top}
          left={this.state.left}
          height={this.state.height}
          width={this.state.width}
          visible={this.state.isTooltipVisible} />
      </div>
    );
  }
}

export default App;
