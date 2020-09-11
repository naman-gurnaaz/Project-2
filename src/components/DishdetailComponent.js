import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
     
    renderComments(comments) {
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

    render() {
        if (this.props.Dish != null){
            return (
                <div className="row">
                   <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.Dish.image} alt={this.props.Dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.Dish.name}</CardTitle>
                            <   CardText>{this.props.Dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.Dish.comments)}
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

}   

export default Dishdetail;