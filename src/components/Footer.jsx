import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <div>
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
           <div>
             <img className='mb-5 w-32' src={assets.logo} alt=""/>
             <p className="w-full md:w-2/3 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam perferendis dicta esse itaque delectus consequuntur nostrum vero non consequatur, nisi blanditiis excepturi eligendi, temporibus ipsum? Pariatur vero nam ipsam.
             </p>
           </div>
            
            <div>
                <p className="text-xl font-medium mb-5">COMPANY</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                <NavLink to='/'><p>Home</p></NavLink>
                <NavLink to='/about'><p>About Us</p></NavLink>
                <NavLink to='/contact'><p>Contact Us</p></NavLink>
                <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className="text-xl font-medium mb-5">Get In Touch</p>
                <ul className="flex flex-col gap-1 text-gray-600">
                   <li>+1-212-678-0985</li>
                   <li>Contact@forever.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr/>
            <p className="py-5 text-sm text-center">Copyright 2024@ Forever.com - All Right Reserved.</p>
        </div>
    </div>
  )
}
