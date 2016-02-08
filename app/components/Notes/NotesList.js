import React from 'react';

class NotesList extends React.Component {
  render(){
    const {notes} = this.props;
    return(
      <ul className="list-group">
        {notes.map((note, index) => {
          return <li className="list-group-item" key={index}>{note}</li>
        })}
      </ul>
    )
  }
}

export default NotesList;
