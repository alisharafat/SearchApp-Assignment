import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './ShowBook.css';

const ShowBook = () => {

    const { bookid } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
       
        async function getData() {
            try {
                const res = await fetch(`http://localhost:8080/book/${bookid}`);
                const data = await res.json();
                setBook(data);
            }
            catch (e) {
                console.log("Cannot fetch the data at the moment!");
            }
           
        }

        getData();

    },[bookid]);
    return (
        
 <div>
    {book && <div className='showbookContainer'>
        
        <div><img className='showimage' src={book.imageLink} alt="" /></div>
        <div> 
             <ul>
                 <li >Name :{book.title}</li>
                 <li>Author:{book.author}</li>
                 <li>Language:{book.language}</li>
                 <li>Year:{book.year}</li>
                 <li>Pages:{book.pages}</li>
                 <li>{book.clickCount} times visited</li>
                 <li><a href={book.link}>click here to go to wikipedia page</a>  </li>
                 
             </ul>
         </div>
  </div>}
 </div>
    )
}

export default ShowBook;