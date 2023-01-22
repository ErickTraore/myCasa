import React from "react";
import docdivst from "../../doc.json";
import { Card } from 'react-bootstrap';
import '../../style/BasicExample.scss';
// import img1 from '../assets/Img.png';




function BasicExample() {
  return (
    <div className="basic">
            {docdivst.map((doc, index) => (
                <div className="basic__div" key={`${doc}-${index}`}>
                      <Card className="basic__div__block">
                          <Card.Img src={doc.cover} />
                          <div className="basic__div__block__content">
                          </div>
                          <div className="basic__div__block__title">
                            { doc.title}
                          </div>
                      </Card>

                </div>
            ))}
    </div>

  );
}

export default BasicExample;