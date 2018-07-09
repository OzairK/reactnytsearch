import React, {Component} from "react";
import { Input, TextArea, FormBtn } from "./Form"
import { Col, Row, Container } from "./Grid";
import {List, ListItem} from "./List";
import API from "../utils/API"
import SaveBtn from "./SaveBtn"

class Home extends Component{

    state = {
        results: [],
        title: "",
        numOfRecords: "",
        startDate: "",
        endDate: ""
    };

handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
        // es6 box notation, changes state on any input based on name attribute of input
        [name]: value                                                                   
    });    
}

handleFormSubmit = event => {
    event.preventDefault();
    const query=this.buildQueryURL(this.state.title, this.state.startDate,this.state.endDate);
    API.getArticle(query)
    .then(res=> {
        this.setState({results:res.data.response.docs});
    })
    
}

buildQueryURL= (searchTerm,startYear,endYear) => {
    // queryURL is the url we'll use to query the API
    let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  
    // add the api key parameter (the one we received when we registered)
    queryURL += "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    queryURL += "&q=" + searchTerm;
    if (parseInt(startYear)) {
      queryURL += "&begin_date=" + startYear + "0101";
    }
    if (parseInt(endYear)) {
      queryURL += "&end_date=" + endYear + "0101";
    }
    return queryURL;
}

//sends an object of saved article data to be saved
//sends the data from specified index in state.results array
saveArticle = (index) => {
    const articleToSend = {
        title: this.state.results[index].headline.main,
        link: this.state.results[index].web_url,
        date: this.state.results[index].pub_date
    }
    API.saveArticle(articleToSend)
    .then(res => {
        console.log(res);
    })
}


 render(){return(  <div>
        <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
        <form>
            <Input
                name="title"
                placeholder="Title (required)"
                onChange= {this.handleInputChange}
                value= {this.state.title}
            />
            <Input
                name="startDate"
                placeholder="Starting Year"
                onChange= {this.handleInputChange}
                value= {this.state.startDate}
            />
            <Input
                name="endDate"
                placeholder="Ending year"
                onChange= {this.handleInputChange}
                value= {this.state.endDate}
            />
            <FormBtn
            onClick = {this.handleFormSubmit}
            > submit </FormBtn>
        </form>
        </Col>
        </Row>
        <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
        
        {(this.state.results.length) ? (
              <List>
                {this.state.results.map((result,index)=> {
                  return (
                    <ListItem >
                        <p> {result.headline.main} </p>
                        <SaveBtn onClick={() => this.saveArticle(index)} />
                        <p> {result.pub_date} </p>
                        <a href={result.web_url}> {result.web_url} </a>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        </Col>
        </Row>
    </div>
);}
}
export default Home;