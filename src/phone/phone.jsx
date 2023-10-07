
import { useEffect, useState } from "react";
import { useLoaderData, useParams} from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {

    const{id} = useParams()
    // console.log(id);

    const [phone, setPhone] = useState()
    const [isTrue, setIsTrue] = useState(false)

    const phones = useLoaderData();
    // console.log(phones);
    
    useEffect (() => {
        const findPhone = phones?.find(phone=>phone.id  === id )

        // console.log(findPhone);

        setPhone(findPhone)

    } , [id, phones ,isTrue])


    return (
        <div>
            <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;