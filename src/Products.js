import React from 'react';
import './Products.css';

export default class Products extends React.Component {

    constructor(){
        super();
        this.state={
            products:[],
            todosPerPage:10,
            currentPage:1
        }
         this.handleClick= this.handleClick.bind(this);

    }

    componentDidMount(){
        console.log('component did mount')
        this.getUsers();
    }

    handleClick=(event)=>{
        this.setState({currentPage: Number(event.target.id)})
    }

    getUsers(){
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({products:data})
           });
    }
    render(){

        const {products,todosPerPage,currentPage}=this.state;

        const pageList=[];
        for(let i=1;i<=Math.ceil(products.length/todosPerPage);i++){
            pageList.push(i);
         }
         const pageNumbers=pageList.map((numbers,index)=>{
         return <button key={index} id={numbers} onClick={this.handleClick}>{numbers}</button>
         })
         const indexOfLastTodo=currentPage*todosPerPage;
        const indexOfFirstTodo=indexOfLastTodo-todosPerPage;
        const currentTodo= products.slice(indexOfFirstTodo,indexOfLastTodo);

    return (
        <>
        <div style={{display:'flex'}}>
                <div style={paper1}>
                products
                </div>
                <div className="productsList">
                    <div className="products">
                    {  currentTodo.map((pd,index)=>{
                         return <p key={index}>{pd.title}</p>
                })  }
                </div>
                        <div className="pagination">
                            <span>Page {currentPage} Of {pageNumbers.length}</span>
                                {pageNumbers}
                        </div>
                </div>
            
        </div>
            
        </>
    )
    }
}
const paper1={
    margin: '8px 5px',
    height:'500px',
    width:'19%',
    backgroundColor:'#fff',
    borderRadius: '2px',
    boxShadow: '1px 1px 1px #aaaaaa'

}

