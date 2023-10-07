





const PhoneCard = ({phone}) => {

    const {title} = phone || {}

    //favorites
    const handleAddToFavorites   = () => {
        const addedFavoritesArray = [];

        const favoriteItems = JSON.parse(localStorage.getItem('favorite'))  

        //STOP repeat selection
        if(!favoriteItems) {
            addedFavoritesArray.push(phone)
            localStorage.setItem('favorite', JSON.stringify(addedFavoritesArray));  
            swal("Good job!", "phone added!", "success");
        }else{

            const isExists = favoriteItems.find(phone => phone.id === id)

            if(!isExists){

            addedFavoritesArray.push(...favoriteItems, phone)
            localStorage.setItem('favorite', JSON.stringify(addedFavoritesArray))
            swal("Good job!", "phone added!", "success");    }
            else{
                swal({
                    title: "Already Selected?",
                    text: "You can seclected one time only",
                    icon: "warning",
                    
                    dangerMode: true,
                  })                 
            }          
        }
        // localStorage.setItem('love', phone.id )
    }


    return (
 

      <div data-tooltip="author-2">

            
             <button onClick={handleAddToFavorites} className="btn">Favourite</button>        
       

      </div>
    );
};

export default PhoneCard;