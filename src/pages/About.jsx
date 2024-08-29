import { assets } from "../assets/assets"
import NewsLetterBox from "../components/NewsLetterBox"
import Title from "../components/Title"


const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
         <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
         <img className='w-full max-w-[450px]' src={assets.about_img} alt=""/>
         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga necessitatibus, odio repellat a ab repellendus saepe, qui delectus facilis assumenda error vero culpa similique sequi vitae ea enim perspiciatis ratione.</p>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequuntur maxime ducimus atque, repellat aspernatur esse minima, perferendis harum unde sed illo a mollitia. Quaerat sit et perferendis ratione esse!</p>
           <b className="text-gray-800">OUR MISSION</b>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate, minima enim placeat inventore dolores laborum, facilis dolor aspernatur sit doloremque aliquid dignissimos? Officia cupiditate doloribus eaque odio nisi maiores.</p>
         </div>
      </div>
      <div className="text-xl py-4">
         <Title text1="WHY" text2="CHOOSE US"/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et obcaecati, adipisci, accusantium quidem nam illum voluptate saepe incidunt suscipit, eius ut aspernatur? Asperiores natus, deleniti nobis ullam quod omnis vitae.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta totam provident id assumenda quis doloribus quod quisquam sequi, tenetur, repudiandae veniam error quaerat perferendis commodi? Delectus possimus consequatur modi nostrum!</p>
          </div>
          <div className="border px-8 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sunt ex recusandae molestiae repellat iste quo dignissimos eius illo perferendis, eos nisi, totam necessitatibus adipisci doloribus! Voluptatum excepturi impedit mollitia.</p>
          </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About