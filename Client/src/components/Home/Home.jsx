import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllPublish } from "../../redux/actions/index";
import Card from '../Card/Card';


function Home() {
    const allPublishes = useSelector((state) => state.allPublish);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getAllPublish())
    },[dispatch])

    console.log(allPublishes)

  return (
    <div class="flex justify-center flex-wrap m-8">
        {allPublishes.map((user) => <Card key={user.idPublish} {...user}/>)}
    </div>
  )
}

export default Home