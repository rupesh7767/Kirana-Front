import { useState } from "react"
import './Formstyle.css';
import PopupMessage from "../Component/Popup";
const AddItem = ({onsubmit})=> {
    const[name , setName] = useState('');
    const[type , settype] = useState('');
    const[price , setPrice] = useState('');
    const[quantity , setQuantity] = useState('');
    const[showPopup , setShowPopup]= useState(false);
    const[popupMessage , setPopupMessage] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata ={
            name,
            type,
            price,quantity,
        }
   // onSubmit(formdata);

        console.log("Form submited")
        fetch('http://ec2-44-219-254-125.compute-1.amazonaws.com:8080/addItem',{
            method: 'POST',
            headers:{
                'Content-Type':'Application/json',
            },
            body : JSON.stringify(formdata)
        })
        .then((response=> response.json()))
        .then(data => {
            if(data.statusCode==201){
                console.log("Item addedd succesfully!!!")
                setPopupMessage("Item addedd succesfully!!!")
                setShowPopup(true);
            }else{
                console.log("There is some issue occured!!!")
                setPopupMessage("There is some issue occured!!!")
                setShowPopup(true);
            }
        })

    setName('');
    setPrice('');
    setQuantity('');
    settype('');
    }

    // const handleAddFormSubmit = ()

    return(
        <div className="form-container">
        {showPopup && <PopupMessage message={popupMessage} onclose={()=> setShowPopup(false)} />}
            <h2>Add items</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label>Product:</label>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} required/>
                </div>
                <div className="form-group">
                <label>Brand:</label>
                <input type="text" value={type} onChange={(e)=> settype(e.target.value)}required/>
                </div>
                <div className="form-group">
                <label>Price:</label>
                <input type="number"  value={price} onChange={(e)=> setPrice(e.target.value)} required/>
                </div>
                <div className="form-group">
                <label>Quantity:</label>
                <input type="number"  value={quantity} onChange={(e)=> setQuantity(e.target.value)} required/>
                </div>
                <button>Add</button>
            </form>
        </div>
    ); 
};

export default AddItem;
