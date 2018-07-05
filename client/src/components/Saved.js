import React, {Component} from "react";
import API from "../utils/API"
import { Col, Row, Container } from "./Grid";
import {List, ListItem} from "./List";
import DeleteBtn from "./DeleteBtn";
// const Saved = () => (
// <p> hello this is Saved page dude </p>
// );

class Saved extends Component{
    state={
        results: []
    }

    componentDidMount(){
        this.loadArticles()
    };

    loadArticles = () => {
        API.getSavedArticles()
        .then(res => this.setState({results: res.data}))
        // .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    deleteArticle = (id) => {
        API.deleteArticle(id)
        .then(this.loadArticles())
        .catch(err => console.log(err) )
    }

    render(){return(
        <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
        <List>
                {this.state.results.map((result,index)=> {
                  return (
                    <ListItem >
                        <p> {result.title} </p>
                        <p> {result.date} </p>
                        <a href={result.link}> {result.link} </a>
                        <DeleteBtn onClick={() =>this.deleteArticle(result._id)}/>
                    </ListItem>
                  );
                })}
              </List>
        </Col>
        </Row>
    )
    }

}


export default Saved;