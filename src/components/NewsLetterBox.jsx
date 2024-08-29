

const NewsLetterBox = () => {

   const onSumitHandler = () => {
      event.preventDefault();
   }

  return (
    <div className="text-center">
       <p className="text-2xl font-medium text-gray-800"> Subscribe Now & get 25% off</p>
       <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas, iusto magnam cum, doloremque alias nobis quod ipsam accusamus mollitia qui! Quae quia odit quos nostrum sed sequi aliquam doloribus!
       </p>
       <form onSubmit={onSumitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
         <input className='w-full sm:flex-1 outline-none' type="email" placeholder="Enter your email" required/>
         <button type="submit" className="bg-black text-white text-xs px-10 py-4 hover:border hover:border-black hover:bg-white hover:text-black">SUBSCRIBE</button>
       </form>
    </div>
  )
}

export default NewsLetterBox