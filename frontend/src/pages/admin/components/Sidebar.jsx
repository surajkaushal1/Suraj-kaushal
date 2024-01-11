import React, {useState} from 'react'
import { UilEstate, UilClipboardAlt, UilUsersAlt, UilPackage, UilChart } from '@iconscout/react-unicons';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const SidebarData = [
  {
      icon:UilEstate,
      link:'/admin',
      heading:'DashBoard'
  },
  {
      icon:UilClipboardAlt,
      link:'/admin',
      heading:'Orders',
  },
  {
      icon:UilUsersAlt,
      link:'/admin',
      heading:'Customers',
  },
  {
      icon:UilPackage,
      link:'/admin/product',
      heading:'Products',
  },
  {
      icon:UilChart,
      link:'/admin',
      heading:'Analytics'
  }
];


const Sidebar = () => {
  const [selected, setSelected] = useState(0);

   return (
    <div className='Sidebar'>
      <div className='menu'>
        {SidebarData.map((item,index)=>{
          return(
            <div className={selected===index?'menuItem active':'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
              >
              <item.icon/>
                <Link to={item.link}>
                  <span>
                    {item.heading}
                  </span>     
                </Link>           
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar