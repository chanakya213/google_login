import React, { useState } from "react";
import moment from "moment";

function Notification(){

    const [data,setdata] = useState({title:"" , description:"" , date:""});
    const [alldata,setalldata] = useState([]);    
    const [input,setinput] = useState("");
    const [show,setshow] = useState(false);
    const [editshow,seteditshow] = useState(false);
    const [editdata,seteditdata] = useState({title:"" , description:"" , date:""});
    const [key,setkey] = useState("");


    function handlechange(e){
        setdata(prev=>{
            return {...prev , [e.target.name]:e.target.value , date:moment().format('DD/MM/YYYY HH:mm:ss A')}
        })
    };
    function handlesubmit(e){
    e.preventDefault();
        if(!data.title || !data.description){
            alert("Values cannot Be Empty ... .... !");
        }else{
            setalldata(prev=>{
                return [...prev,data];
            });
            setdata(prev=>{
                return {title:"" , description:"" , date:""}
            })
        }
    };

function showform(){
    setshow(prev=>{
        return !prev;
    })
};

function showeditform(){
  seteditshow(false);
};

function handledit(key){
  const item = alldata.find((x,index)=>{
    return key == index;    
})
setkey(key);
seteditdata(item);

console.log(data);
};

function handledelete(key){
if ( window.confirm("Want to delete?")) {
  setalldata((prev)=>{
    return prev.filter((x,index)=>{
           return key != index;    
    })
  })  
}
};

function handleedit(e){
  e.preventDefault();
  alldata[key] = editdata;
}

function handleeditchange(e){
  seteditdata(prev=>{
    return {...prev, [e.target.name]:e.target.value}
  })
}
   return( <div className="notification-div">
       <div className="add-notification">

       <input className="form-control serchfield" type="search" placeholder="Search-By-Name" aria-label="Search" onChange={(e)=>{setinput(e.target.value)}}></input>

       <button onClick={showform} type="button" className="btn btn-warning">Add-Notification</button>
       
       </div>

      { show && <div className="form-div">
          <i class="far fa-times-circle" onClick={showform}></i>
      <form onSubmit={handlesubmit} method="post">
        <input onChange={handlechange} type="text" className="form-control" name="title" id="title" value={data.title} placeholder="Title"/>
        <textarea onChange={handlechange} className="form-control" name="description" id="description" cols="30" rows="2" placeholder="Description - Here" value={data.description}></textarea>
       <button type="submit" className="btn btn-info">Sumbmit</button>
    </form> 
    </div> }
    { editshow && <div className="form-div">
          <i class="far fa-times-circle" onClick={showeditform}></i>
      <form onSubmit={handleedit} method="post">
        <input onChange={handleeditchange} type="text" className="form-control" name="title" id="title" value={editdata.title} placeholder="Title"/>
        <textarea onChange={handleeditchange} className="form-control" name="description" id="description" cols="30" rows="2" placeholder="Description - Here" value={editdata.description}></textarea>
       <button type="submit" className="btn btn-info">Save-Changes</button>
    </form> 
    </div> }
    <table className="table table-dark table-striped table-hover text-center">
  <thead>
    <tr>
      <th>Title</th>
      <th>Description</th>
      <th>Date</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {alldata.filter((item)=>{
      if(input === ""){
        return item
      }else if(item.title.toLowerCase().includes(input.toLowerCase())){
        return item 
      }
    }).map((item,index)=>{
      return (
        <tr key={index}>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.date}</td>
        <td> <i  onClick={()=>{
              handledit(index);
              seteditshow(true);
            }} className="fas fa-edit"></i>
             <i onClick={()=>{
              handledelete(index)
            }} className="fas fa-trash-alt"></i></td>
      </tr>
      )
    })}
  </tbody>
</table>
   </div>
   )
};

export default Notification;