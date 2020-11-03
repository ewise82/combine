import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import { Collection, CollectionItem, Row, Col } from 'react-materialize';
import './style.css';

function WordList (props) {
 const { wordList } = props;

    return (

<Row>
  <Col>
    <Collection header="Words Found">
      {wordList.map((item) => (
          <div className="word-list">{item}</div>
      ))}
    </Collection>
  </Col>
</Row>
    )
}

export default WordList;