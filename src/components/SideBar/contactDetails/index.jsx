import React from 'react'
import { MainCard } from '../../card'
import ButtonComponent from '../../button'

const ContactDetails = () => {
  return (
    <div className='w-[100%] p-4'>
      <MainCard bgColor='bg-bgColor p-4'>
        <div className='flex flex-row font-raleway text-[12px] border-b border-cyan-200 py-2'>

          <div className='w-11 h-11 flex items-center justify-center'>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect y="0.5" width="24" height="24" rx="8.26855" fill="#F2F7FC" />
              <path d="M16 2.5H8C7.46957 2.5 6.96086 2.71071 6.58579 3.08579C6.21071 3.46086 6 3.96957 6 4.5V20.5C6 21.0304 6.21071 21.5391 6.58579 21.9142C6.96086 22.2893 7.46957 22.5 8 22.5H16C16.5304 22.5 17.0391 22.2893 17.4142 21.9142C17.7893 21.5391 18 21.0304 18 20.5V4.5C18 3.96957 17.7893 3.46086 17.4142 3.08579C17.0391 2.71071 16.5304 2.5 16 2.5ZM13 21.5H11V20.5H13V21.5ZM16 19.5H8V5.5H16V19.5Z" fill="url(#paint0_linear_27_11)" />
              <defs>
                <linearGradient id="paint0_linear_27_11" x1="12" y1="2.5" x2="12" y2="22.5" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FF9A1A" />
                  <stop offset="1" stop-color="#EC1C09" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className='text-start p-2 leading-4 '>
            Phone : <br /><span className='font-bold'>+94775145763
            </span>
          </div>
        </div>
        <div className='flex flex-row font-raleway text-[12px] border-b border-cyan-200 py-2'>

          <div className='w-11 h-11 flex items-center justify-center'>
            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="21.36" rx="8.26855" transform="matrix(-1 0 0 1 24 0)" fill="#F2F7FC" />
              <path d="M2.97 6.65L12 1L21.03 6.65C21.61 7 22 7.63 22 8.36V18.36C22 19.46 21.1 20.36 20 20.36H4C2.9 20.36 2 19.46 2 18.36V8.36C2 7.63 2.39 7 2.97 6.65ZM4 18.36H20V10.36L12 15.36L4 10.36V18.36ZM12 13.36L20 8.36L12 3.36L4 8.36L12 13.36Z" fill="#FF9C1B" />
            </svg>
          </div>
          <div className='text-start p-2 leading-4'>
            Email : <br /><span className='font-bold'>nishedha.srilak@gmail.com
            </span>
          </div>

        </div>
        <div className='flex flex-row font-raleway text-[12px] border-b border-cyan-200 py-2'>
          <div className='w-11 h-11 flex items-center justify-center'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="23.5" height="23.499" rx="8.26855" transform="matrix(-1 0 0 1 24 0)" fill="#F2F7FC" />
              <path d="M12.25 2C15.9766 2 19 4.87766 19 8.42188C19 12.5 14.5 18.9627 12.8477 21.1948C12.7791 21.2891 12.6892 21.3657 12.5853 21.4186C12.4814 21.4715 12.3665 21.499 12.25 21.499C12.1335 21.499 12.0186 21.4715 11.9147 21.4186C11.8108 21.3657 11.7209 21.2891 11.6523 21.1948C10 18.9636 5.5 12.5033 5.5 8.42188C5.5 4.87766 8.52344 2 12.25 2Z" stroke="#E80505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.25 11.0154C11.0332 11.0154 10.0469 10.0291 10.0469 8.81241C10.0469 7.59571 11.0332 6.60938 12.25 6.60938C13.4668 6.60938 14.4531 7.59571 14.4531 8.81241C14.4531 10.0291 13.4668 11.0154 12.25 11.0154Z" stroke="#E80505" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div className='text-start p-2 leading-4'>
            Location : <br /><span className='font-bold'>Matara, Sri Lanka
            </span>
          </div>
        </div>
        <div className='py-1 pt-4'>
        <ButtonComponent>
          <div className='flex flex-row justify-center gap-2'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.979 19.804 4.587 19.412C4.195 19.02 3.99934 18.5493 4 18V15H6V18H18V15H20V18C20 18.55 19.804 19.021 19.412 19.413C19.02 19.805 18.5493 20.0007 18 20H6Z" fill="#F2F7FC" />
            </svg>

            Download  Resume
          </div>
        </ButtonComponent>
        </div>
      </MainCard>
    </div>
  )
}

export default ContactDetails