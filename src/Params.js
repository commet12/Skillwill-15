import React from 'react'
import { useParams } from 'react-router-dom';


const tedFacts = {
    id1: "Ted is an architect",
    id2: "Ted has a yellow umbrella",
    id3: "Ted's favorite book is Love in the Time of Cholera",
    id4: "Ted is allergic to lobster",
  };

const Params = () => {

    const params = useParams();
    const params1 = tedFacts[params.paramId]

    if(!params1) return (
        <h1>araa araferi</h1>
    )
  return (
    <div>
        <p>{params1}</p>
    </div>
  )
}

export default Params