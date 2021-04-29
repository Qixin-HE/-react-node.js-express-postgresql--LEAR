import React, { useCallback, useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import SearchResult from '../pages/SearchResult';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';

const SearchBar = () => {
// const onSubmit = useCallback(event => {
//     onSubmit(event.target.value)
//   }, [onSubmit])
const [keyword, setKeyword] = useState();

const onSubmit = (e) => {
    //this.props.history.push('/search');
    e.preventDefault();
    //this.props.history.push('/search')
    // return (
    //     <Router>
    //     <Switch>
    //         <Route path="/search" component={SearchResult} />
    //     </Switch>
    //     </Router>
    // )
    window.location.href = "/search/" + keyword;
}

// handler = (e) => {
//     // do some validation
//     this.refs.myForm.submit();
//     };

    return (
        <div className="Search">
            <span className="SearchSpan">
                <Form onSubmit={onSubmit} inline>
                    <FormControl className="SearchInput" type="text" onChange={(e) => setKeyword(e.target.value)} placeholder="Search" className="mr-sm-2"
                    />
                    <Button type="submit" value="Submit" variant="outline-info">Search</Button>
                </Form>
            </span>

        </div>
    );
};

export default SearchBar;