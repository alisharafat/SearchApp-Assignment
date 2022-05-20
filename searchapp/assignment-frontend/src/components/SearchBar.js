import React,{useState,useEffect} from 'react'
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';

function SearchBar() {

    const [filteredData, setFilteredData] = useState([]);
 
    const [text, settext] = useState("");

    const [books, setBooks] = useState([]);

    useEffect(() => {
      async function getData() {
        try {
          const res = await fetch('http://localhost:8080/books');  
          const data = await res.json();
          setBooks(data);
          setFilteredData(data);
        }
        catch (e) {
          console.log(e.message);
        }
      }
      getData();
  
    },[]);

    const handleChange=(e)=>{
        const word=e.target.value;
        settext(word);
        const newFilter = books.filter((value) => {
            return value.title.toLowerCase().includes(word.toLowerCase());
          });
            setFilteredData(newFilter);
          
    }

    const clearInput = () => {
        setFilteredData([]);
        settext("");
      };

  return (

    <div  className='searchBar'>
        <div className='searchBox'>
        <input 
         type="text"
          className='inputBox'
          onChange={handleChange} 
          value={text}
          placeholder="Search your book here "/>
        <div className='searchIcon'>
        { text==="" ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}

        </div>
        </div>
        {filteredData.length !== 0 && (
      
        <div className="dataResult">
          {filteredData.map((book) => {
      
            return (
                <div className="dataItem" key={book._id}> 
              <Link to={`/book/${book._id}`} >
                  <img src={book.imageLink} alt="" className='image' />        
                  <h4 className='booktitle'>{ book.title }</h4>
              </Link>

                </div>
             );
          })}
        </div>
      ) }
    </div>
  )
}

export default SearchBar