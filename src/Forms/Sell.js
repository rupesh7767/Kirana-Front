import { useState, useEffect } from "react"
import './Formstyle.css';
import PopupMessage from "../Component/Popup";


const SellItem = ({onsubmit}) => {

    const [itemData , setItemData] = useState({});
    const [selectedItem , setSelectedItem] = useState('');
    const [selectedType , setSelectedType] = useState('');
    const [quantity , setQuantity] = useState('');
    const[showPopup , setShowPopup]= useState(false);
    const[popupMessage , setPopupMessage] = useState('');

    useEffect(() =>{
        const fetchdata = async() => {
            try{
                const response = await fetch('http://ec2-44-219-254-125.compute-1.amazonaws.com:8080/getItemWithTypes');
                const data = await response.json();
                setItemData(data.items)
            }catch(error){
                console.error("error occured while fetching data:" , error)
            }
        };

        fetchdata();
    } , []);

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata ={
           name:selectedItem,
           type: selectedType,
            quantity,
        };

        fetch('http://ec2-44-219-254-125.compute-1.amazonaws.com:8080/sellproduct',{
            method: 'POST',
            headers:{
                'Content-Type':'Application/json',
            },
            body : JSON.stringify(formdata)
        })
        .then((response)=> response.json())
        .then(data=>{
            if(data.statusCode==200){
                setPopupMessage("Item sold successfully!!!")
                setShowPopup(true)
            }else{
                console.log("fail", data.statusCode);
                setPopupMessage("Item can not be sell due to insufficient quantity")
                setShowPopup(true)
            }
        })
        .catch(error=>{
            console.log("Error while fetching :" , error)
        })
        setSelectedItem('')
        setSelectedType('')
        setQuantity('')

    }

    const handleItemChange = (e)=>{
        setSelectedItem(e.target.value);
        setSelectedType('');
        console.log('Selected item is :' , selectedItem);
    }
    return(
        <div className="form-container">
        {showPopup && <PopupMessage message={popupMessage} onclose={()=> setShowPopup(false)} />}
        <h2>Item</h2>
        <form onSubmit={handleSubmit}>
        <select className="dropdown" onChange={handleItemChange} value={selectedItem}>
        <option value="">
            Select an Item
        </option>
       {Object.keys(itemData).map((item) =>(
        <option key={item} value={item}>{item}</option>
       ))}
        </select>
        <h2>Type</h2>
        <div className="dropdown-container">
            <select className="dropdown" onChange={handleTypeChange} value={selectedType} disabled={!selectedItem}  >
            <option value="">Select Type</option>
            { selectedItem && itemData[selectedItem].map((type) =>(
                <option key={type}  value={type}>{type}</option>
            ))}
            </select>
        </div> 
        <div className="form-group">
        <label>Quantity</label>
        <input type="number" value={quantity} onChange={(e)=> setQuantity(e.target.value)} required/>
        </div>
        <button type="submit"> Sell</button>
        </form>
        </div>
    );
    
}


export default SellItem;