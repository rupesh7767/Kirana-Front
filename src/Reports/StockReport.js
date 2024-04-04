import styled from "styled-components";
import './Reports.css';
import { useEffect, useState } from "react";
import TableComponent from "./TableComponent";

const StockReport = ({onsubmit}) => {

    const[data , setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() =>{
        const fetchdata = async() => {
            try{
                const response = await fetch('http://ec2-54-167-54-70.compute-1.amazonaws.com:8080/fetchItems');
                const jsonData = await response.json();
                setData(jsonData);
            }catch(error){
                console.error("error occured while fetching data:" , error)
            }
        };

        fetchdata();
    } , []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
      };

    const filteredData = data.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    

    return (
        <Container>
          <div className="search-container"> {/* Add a search-container class */}
        <input
          type="text"
          placeholder="Search by name or type"
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
             <TableComponent data={filteredData} />
        </Container>
      );
    };
    
    const Container = styled.div`
      margin-top: 100px;
    `;
    
    const Wrap = styled.div``;


export default StockReport;