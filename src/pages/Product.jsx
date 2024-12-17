import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components0/RelatedProducts';

const Product = () => {
  const {productId}= useParams();
   const{products,currency,addToCart} =useContext(ShopContext);
   const [productData,setProductData] = useState(false);
   const [image,setImage] =useState('');
  

   const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }

    })

   }

   useEffect(() => {
    fetchProductData();
   },[productId])

  return productData ?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/*Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
         {/*Product image */}
         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {/*left Product images */}
            {
            productData.image.map((item,index) => (
              <img onClick={() => setImage(item) }  src={item} key={index} className='w-[24%] sm:w-full sm:mb3 flex-shrink-0 cursor-pointer' alt=''/>

            ))
          }

          </div>
          {/*big Product image */}

          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt='' />

          </div>

         </div>
           {/*product info */}
           <div className='flex-1 '>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img  className='w-3.5' src={assets.star_icon} alt="" />
              <img className='w-3.5'  src={assets.star_icon}  alt="" />
              <img  className='w-3.5' src={assets.star_icon} alt="" />
              <img  className='w-3.5' src={assets.star_icon} alt="" />
              <img className='w-3.5'  src={assets.star_dull_icon}  alt="" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

           
            <button onClick={() => addToCart(productData._id)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p> Cash On Delivery is available on this product</p>
              <p>Easy return and exchange policy within 7 days</p>

            </div>

           </div>


      </div>

      {/*Description and review section */}

      <div className='mt-20'>
        <div className='flex'>
          <p className='border px-5 py-3 text-sm'>Description</p>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>

        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p className=''>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          <p className=''>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        </div>

      </div>
        {/*Display related products */}
        <RelatedProducts category = {productData.category} subCategory={productData.subCategory}/>

    </div>
  ): <div className='opacity-0'></div>
}

export default Product