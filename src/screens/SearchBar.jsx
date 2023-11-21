import Card from '../component/Cards/Card';
import axios from 'axios';
import star from "../images/star.png"
import { useState, useEffect } from 'react';
import { Skeleton, Stack, TextField } from "@mui/material";
import ProductDetail from './ProductDetail';
import { useNavigate } from 'react-router-dom';



function SearchBar() {
  const [productData,setProductData] = useState([]);
  const [isData, setIsData] = useState(false);
  const [searchInput, setSearchInput] = useState("")
  const navigate = useNavigate()
// get data from fakestore aapi
  const getData = async ()=>{

   const fetchData = await axios.get("https://fakestoreapi.com/products")
   try{
    setProductData(fetchData.data)
    setIsData(true)
  }catch(err){
    console.log(err);
    setIsData(true)
   }
}

console.log(productData)
  useEffect(()=>{
  getData();
  },[])

const searchBarHandler = ()=>{

}
  
  return (
    <div className='main'>

      <Stack>
        <TextField onChange={(e)=>setSearchInput(e.target.value)} />
        
      </Stack>
      
  

{
     productData.filter((e,i)=>e.title.includes(searchInput)).map((e,i)=>{
              const {title, image, description, rating, price,category} = e
              return <Card title={title} catagory={category} image={image} description={description} price={price} rating={rating.rate}  key={i} star={star} onClick={()=>navigate("/product-details/"+(i+1))} />
            })
}





      {
    //    isData ? productData.map((e,i)=>{
    //       const {title, image, description, rating, price,category} = e
    //       return <Card title={title} catagory={category} image={image} description={description} price={price} rating={rating.rate}  key={i} star={star} onClick={()=>navigate("/product-details/"+(i+1))} />
    //     }) :  <Stack spacing={1}>
    //     {/* For other variants, adjust the size with `width` and `height` */}
    //     <Skeleton variant="rounded" width={350} height={250} />
    //     <Skeleton variant="rounded" width={350} height={40} />
    //     <Skeleton variant="rounded" width={350} height={100} />
    //     <Skeleton variant="rounded" width={350} height={50} />
    //   </Stack>
      }
      
    </div>
  );
}

export default SearchBar;
