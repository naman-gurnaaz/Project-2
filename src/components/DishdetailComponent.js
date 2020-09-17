import React from 'react';
import { Card, CardImg, Breadcrumb, BreadcrumbItem, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
    
function RenderDish({ dish }) {
	return (
        <FadeTransform in
                transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
	);
}
        
    function RenderComments({comments, postComment, dishId}) {
        if (comments != null){
            return(
                <div className="container">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        <Stagger in>
                            {comments.map((Dcomment) => {
                                return(
                                    <Fade in>
                                        <li>
                                            <p>{Dcomment.comment}</p>
                                            <p>--{Dcomment.author},{" "}
                                                {new Intl.DateTimeFormat("en-US",{
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "2-digit"
                                                    }).format(new Date(Date.parse(Dcomment.date)))
                                                }
                                            </p>
                                        </li>
                                    </Fade>
                                );
                            })}
                    </Stagger>
                    </ul>
                    <div>
                        <CommentForm dishId={dishId} postComment={postComment} />
                    </div>
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
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">            
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else if (props.Dish != null){
            return (
                <div className = "container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.Dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12">
                        <h3>{props.Dish.name}</h3>
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish = {props.Dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments = {props.comments}
                                postComment={props.postComment}
                                dishId={props.Dish.id}
                            />
                        </div>
                        
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