import React from 'react'
import {useParams} from 'react-router-dom'
import { servicesData } from '../Home/Services/Services';


const ServiceDetails = () => {
    const params = useParams();
   
    const findOne = servicesData.find((item)=>item?.id == params?.id )
    // console.log(findOne)


  return (
    <div className='max-w-screen-xl mx-auto px-4 min-h-screen'>
       <h4>
       {findOne?.title}
       </h4>
       <div className='grid grid-cols-4 gap-4 md:gap-5'>
        {findOne?.sub_category?.map((ite,index)=>(
            <div key={index} className='bg-gray-100 border border-gray-200 shadow shadow-gray-200 rounded-md  p-5 md:p-10'>
                <h4>
                    {ite?.title}
                </h4>
            </div>
        ))}
       </div>
    </div>
  )
}

export default ServiceDetails