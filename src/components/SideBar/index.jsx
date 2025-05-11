import React from 'react'
import { MainCard } from '../card'
import SocialIcons from './socialIcons'
import ContactDetails from './contactDetails'
import NishPhoto from '../../images/nish-photo.jpeg';
import ButtonComponent from '../button';

const SideBar = () => {
  return (
<div className="w-[300px] flex flex-col">
  <div className="sticky top-5">
    <div className="w-[150px] h-[150px] mx-auto -mb-[75px] z-10 relative">
      <MainCard bgColor="bg-gradient-1" borderRadius="rounded-lg">
        <img
          src={NishPhoto}
          alt="Nish"
          className="w-full h-full rounded-lg"
        />
      </MainCard>
    </div>

    <div className="w-full">
      <MainCard bgColor="bg-white" borderRadius="rounded-lg">
        <h1 className="font-medium pt-[95px]">
          Nisehdha Sri Lak<br />Hemachandra
        </h1>
        <p className="pt-2 text-sm">Frontend Developer</p>
        <SocialIcons />
        <ContactDetails />
      </MainCard>
    </div>
  </div>
</div>
  )
}

export default SideBar