import React from 'react';
import {
  Card, CardImg
} from 'reactstrap';

const ImgCard = (props) => {
  return (
    <div className="col-md-3" id={props.id} onClick={(e) => props.handleClick(props.id)}>
      <Card>
        <CardImg top width="100%" src={props.src} alt="Card image cap" />
      </Card>
    </div>
  );
};

export default ImgCard;