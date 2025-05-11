import React from 'react'
import { PageLayout } from '../../components/card/pageLayout'
import { DetailCard } from '../../components/card/detailCard'

const CardList = [
  {
    id: 1,
    description: `As a developer, I find myself most 
              captivated by the power and flexibility of 
              NEXT.js. I'm always eager to dive into new
              projects that leverage NEXT.js and 
              discover innovative ways to create fast, 
              scalable, and user-friendly applications.`,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.8881 3L14.8481 3.4L11.1081 21L9.14812 20.6L12.8881 3ZM19.5881 12L15.9981 8.41V5.58L22.4181 12L15.9981 18.41V15.58L19.5881 12ZM1.57812 12L7.99813 5.58V8.41L4.40812 12L7.99813 15.58V18.41L1.57812 12Z" fill="#E80505" />
    </svg>,
    title: "Web Development"
  },
  {
    id: 2,
    description: `As a developer, I find myself most 
              captivated by the power and flexibility of 
              NEXT.js. I'm always eager to dive into new
              projects that leverage NEXT.js and 
              discover innovative ways to create fast, 
              scalable, and user-friendly applications.`,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_43_105)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.20435 2.31607 4.44129 2.87868 3.87868C3.44129 3.31607 4.20435 3 5 3H19C19.7956 3 20.5587 3.31607 21.1213 3.87868C21.6839 4.44129 22 5.20435 22 6V18C22 18.7956 21.6839 19.5587 21.1213 20.1213C20.5587 20.6839 19.7956 21 19 21H5C4.20435 21 3.44129 20.6839 2.87868 20.1213C2.31607 19.5587 2 18.7956 2 18V6ZM5 5C4.73478 5 4.48043 5.10536 4.29289 5.29289C4.10536 5.48043 4 5.73478 4 6V18C4 18.2652 4.10536 18.5196 4.29289 18.7071C4.48043 18.8946 4.73478 19 5 19H19C19.2652 19 19.5196 18.8946 19.7071 18.7071C19.8946 18.5196 20 18.2652 20 18V6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5H5ZM16 7C16 6.73478 16.1054 6.48043 16.2929 6.29289C16.4804 6.10536 16.7348 6 17 6H18C18.2652 6 18.5196 6.10536 18.7071 6.29289C18.8946 6.48043 19 6.73478 19 7C19 7.26522 18.8946 7.51957 18.7071 7.70711C18.5196 7.89464 18.2652 8 18 8H17C16.7348 8 16.4804 7.89464 16.2929 7.70711C16.1054 7.51957 16 7.26522 16 7ZM9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7Z" fill="#FF9C1A" />
      </g>
      <defs>
        <clipPath id="clip0_43_105">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>,
    title: "App Development"
  },
  {
    id: 3,
    description: `As a developer, I find myself most 
              captivated by the power and flexibility of 
              NEXT.js. I'm always eager to dive into new
              projects that leverage NEXT.js and 
              discover innovative ways to create fast, 
              scalable, and user-friendly applications.`,
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C10.8181 3 9.64778 3.23279 8.55585 3.68508C7.46392 4.13738 6.47177 4.80031 5.63604 5.63604C4.80031 6.47177 4.13738 7.46392 3.68508 8.55585C3.23279 9.64778 3 10.8181 3 12Z" stroke="#FF9C1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 10V12C7 12.5304 7.21071 13.0391 7.58579 13.4142C7.96086 13.7893 8.46957 14 9 14C9.53043 14 10.0391 13.7893 10.4142 13.4142C10.7893 13.0391 11 12.5304 11 12V10M14 10L17 14M14 14L17 10" stroke="#FF9C1A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>,
    title: "UI/UX Designing"
  },
  {
    id: 4,
    description: `As a developer, I find myself most 
              captivated by the power and flexibility of 
              NEXT.js. I'm always eager to dive into new
              projects that leverage NEXT.js and 
              discover innovative ways to create fast, 
              scalable, and user-friendly applications.`,
    icon: <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_43_118)">
        <path d="M9.75008 16.5C9.63804 16.5 9.52601 16.5164 9.41914 16.5511C8.81164 16.7484 8.17273 16.875 7.50008 16.875C6.82742 16.875 6.18851 16.7484 5.58054 16.5511C5.47367 16.5164 5.36211 16.5 5.25008 16.5C2.34101 16.5 -0.015393 18.8662 7.57256e-05 21.7791C0.00663823 23.01 1.01867 24 2.25008 24H12.7501C13.9815 24 14.9935 23.01 15.0001 21.7791C15.0155 18.8662 12.6591 16.5 9.75008 16.5ZM7.50008 15C9.98539 15 12.0001 12.9853 12.0001 10.5C12.0001 8.01469 9.98539 6 7.50008 6C5.01476 6 3.00008 8.01469 3.00008 10.5C3.00008 12.9853 5.01476 15 7.50008 15ZM27.7501 0H9.75008C8.50929 0 7.50008 1.04297 7.50008 2.32453V4.5C8.59789 4.5 9.61414 4.81781 10.5001 5.33438V3H27.0001V16.5H24.0001V13.5H18.0001V16.5H14.4263C15.3216 17.2823 15.9788 18.3155 16.2868 19.5H27.7501C28.9909 19.5 30.0001 18.457 30.0001 17.1755V2.32453C30.0001 1.04297 28.9909 0 27.7501 0Z" fill="#E80505" />
      </g>
      <defs>
        <clipPath id="clip0_43_118">
          <rect width="30" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>,
    title: "Mentorship"
  },
]
const HomePage = () => {
  return (
    <div className='p-6 pr-0'>
      <PageLayout title='ABOUT ME'>
        <div className='pt-8 pb-4 font-raleway text-justify'>
          <div className='text-[16px]'>
            I'm a passionate Frontend Developer with over 3 years of professional experience specializing in React.js and modern JavaScript frameworks. I hold a Higher National Diploma in Computer Science and a BSc (Hons) in Software Engineering from London Metropolitan University.<br />
            I thrive on creating clean, responsive, and user-focused interfaces that deliver exceptional user experiences. With a solid understanding of frontend architecture, RESTful APIs, and state management tools like Redux and Context API, I take pride in building scalable, maintainable applications. My development approach is driven by performance, accessibility, and code quality.<br />
            Whether I'm working in a team or independently, I bring strong problem-solving skills, attention to detail, and a commitment to continuous learning.
          </div>
          <div className='py-8'>
            <div className="font-poppins text-[40px]">What I do!</div>
          </div>
          <div className='flex gap-6 flex-wrap'>
            {CardList.map((card, index) => <DetailCard key={index} bgColor={`${card.id == 2 | card.id == 3 ? "bg-bgColor-1" : "bg-orange-1"} w-[48%]`}icon={card.icon} title={card.title}>
              <div className='py-4 text-[16px]'>
                {card.description}
              </div>
            </DetailCard>)}
          </div>
        </div>
      </PageLayout>
    </div>
  )
}

export default HomePage