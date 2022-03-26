import React, { Component } from 'react'
import { Draggable } from 'drag-react';

export class DragAndDrop extends Component {
  render() {
    return (
      <Draggable>
        <div>My element is draggable now</div>
      </Draggable>
    )
  }
}

export default DragAndDrop;