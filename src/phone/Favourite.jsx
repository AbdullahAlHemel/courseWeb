import { useEffect, useState } from "react";
import PhoneCard from "./PhoneCard"
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";

const Favourites = () => {

    const [favourite, setFavourite] = useState([])

    const [noFound, setNofound] = useState(false)


    const [totalPrice, setTotalPrice] = useState(0)
    const [isShow, setIsShow] = useState(false)

    useEffect(()=>{

        const favoriteItems = JSON.parse(localStorage.getItem('favorite'));
        
        if(favoriteItems){
            setFavourite(favoriteItems)
        }else{
            setNofound('No Data Found')
        }



        const total = favoriteItems.reduce((preValue, currentItem) => preValue + currentItem.price , 0)
        setTotalPrice(total)

    }, [])

    console.log(favourite);

    const handleRemove = () => {
        localStorage.clear()
        setFavourite([])
        setNofound('NO Data')
    }

    return <div> {noFound ? <p className="text-4xl w-[300px] my-48 mx-auto">{noFound}</p>
    
    : 
    
    <div >

    {favourite.length > 0 && <div>

        <h2>Total price: {totalPrice}</h2>
        <button className="w-[200px] my-4 bg-slate-500 text-center p-2 text-white rounded 
     mx-auto" onClick={handleRemove}>Deleted all Favourites</button></div>}


     <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4 max-w-6xl mx-auto my-16 ${}">
        { isShow ?
         favourite.map((phone)=> (<FavoriteCard key={phone.id} phone={phone}></FavoriteCard>))
         :
         favourite.slice(0,3).map((phone)=> (<FavoriteCard key={phone.id} phone={phone}></FavoriteCard>))

        }
    </div>
    
    </div>}

    <div className="w-[200px] mx-auto">

        {favourite.length > 3 && <button onClick={() => setIsShow(!isShow)}  className="  my-6 mb-8 bg-slate-500 text-center p-2 text-white rounded ">
           {isShow? "See Less" : "See More"}
       </button>}

    </div>
    
    </div>;
    
};

export default Favourites;