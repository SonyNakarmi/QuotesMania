import React from 'react';
import { Card } from 'semantic-ui-react';

// In-memory data for cards
// const items = [
//     {
//         header: 'Annonymous',
//         description:
//             'You never know what you can do, unless you try!',
//         meta: 'Author Name',
//     },
//     {
//         header: 'Annonymous',
//         description:
//             'You never know what you can do, unless you try!',
//         meta: 'Author Name',
//     },
//     {
//         header: 'Annonymous',
//         description:
//             'You never know what you can do, unless you try!',
//         meta: 'Author Name',
//     },
//     {
//         header: 'Annonymous',
//         description:
//             'You never know what you can do, unless you try!',
//         meta: 'Author Name',
//     },
// ]

class CardExampleGroupCentered extends React.Component{

    constructor(props){
        super(props);
        this.state = {quotes:[]};
    }

    refreshList(){
        fetch(process.env.REACT_APP_API)
        .then(response => response.json())
        .then(data => {
            this.setState({quotes:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentWillUnmount(){
        this.refreshList();
    }

    render(){
        const quotes = this.state.quotes;
        const quoteItems = quotes.map(function(name,index){
            return {
                header: quotes[index]["Author"],
                description: quotes[index]["Quote"],
                meta:quotes[index]["Genre"]
            }
        });
        return(
            <Card.Group centered items={quoteItems} />
        );
    }
} 

export default CardExampleGroupCentered;