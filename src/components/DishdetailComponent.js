import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

     
    function RenderComments({comments}) {
        if (comments != null){
            return(
                <div className="container">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments.map((Dcomment) => {
                            return(
                                <li>
                                    <p>{Dcomment.comment}</p>
                                    <p>{Dcomment.author},{" "}
                                        {new Intl.DateTimeFormat("en-US",{
                                            year: "numeric",
                                            month: "short",
                                            day: "2-digit"
                                            }).format(new Date(Date.parse(Dcomment.date)))
                                        }
                                    </p>
                                </li>
                            );
                        })}
                    </ul>

                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        if (props.Dish != null){
            return (
                <div className="row">
                   <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={props.Dish.image} alt={props.Dish.name} />
                            <CardBody>
                                <CardTitle>{props.Dish.name}</CardTitle>
                            <   CardText>{props.Dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments = {props.Dish.comments} />
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
        
    }

export default DishDetail;