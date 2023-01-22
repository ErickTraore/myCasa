import React from "react";
import docdivst from "../../doc.json";
import { Card, card } from 'react-bootstrap';
import '../../style/BasicExample.scss';



function BasicExample() {
  return (
    <div className="basic">
            {docdivst.map((doc, index) => (
                <div className="basic__div" key={`${doc}-${index}`}>
                    <div className="basic__div__image">
                      <Card>
                          <Card.Img src={doc.cover} />
                      </Card>
                    </div>
                    <div className="basic__div__title">
                      { doc.title}
                    </div>
                </div>
            ))}
    </div>

  );
}

export default BasicExample;