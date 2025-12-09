import { BiSearchAlt } from 'react-icons/bi'
import { GrAssistListening } from 'react-icons/gr'
import { MdHeadphones, MdOutlineLibraryBooks } from 'react-icons/md'
import { RiSpeakLine } from 'react-icons/ri'
import { SiWikibooks } from 'react-icons/si'
import { TbHexagonNumber1Filled, TbHexagonNumber2Filled, TbHexagonNumber3Filled, TbHexagonNumber4Filled, TbHexagonNumber5Filled, TbHexagonNumber6Filled } from 'react-icons/tb'
import { TfiPencilAlt } from 'react-icons/tfi'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
      <div className='bg-[#37414f]'>
        <div className='flex  justify-between px-10 py-5'>
          <div className='relative'>
            <Link href={'/'}>
              <Image width={200} height={60} src="/logo.png" alt="" />
            </Link>
          </div>
          <div className='relative flex items-center gap-6 text-white'>
            <div className='hover-element'>
              <p className='hover:text-[#1a8ec1] font-semibold'>Grammar</p>
              <div className='hover-elements '>
                <Link href={'/1-bosqich'}>
                  <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber1Filled color='#5dafd3' /> Beginner</p>
                </Link>
                <Link href={'/2-bosqich'}>
                  <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber2Filled color='#5dafd3' /> Elementary</p>
                </Link>
                <Link href={'/3-bosqich'}>
                  <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber3Filled color='#5dafd3' /> Pre-Intermediate</p>
                </Link>
                <Link href={'/4-bosqich'}>
                  <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber4Filled color='#5dafd3' /> Intermediate</p>
                </Link>
                <Link href={'/5-bosqich'}>
                  <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber5Filled color='#5dafd3' /> Upper-Intermediate</p>
                </Link>
                <Link href={'/6-bosqich'}>
                  <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber6Filled color='#5dafd3' /> Advanced</p>
                </Link>
              </div>
            </div>

            <div className='hover-element'>
              <p className='hover:text-[#db5f8b] font-semibold'>Vocabulary</p>
              <div className='hover-elements '>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'><TbHexagonNumber1Filled color='#db5f8b' /> Beginner</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'><TbHexagonNumber2Filled color='#db5f8b' /> Elementary</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'><TbHexagonNumber3Filled color='#db5f8b' /> Pre-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'><TbHexagonNumber4Filled color='#db5f8b' /> Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'><TbHexagonNumber5Filled color='#db5f8b' /> Upper-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'><TbHexagonNumber6Filled color='#db5f8b' /> Advanced</p>
              </div>
            </div>

            <div className='hover-element'>
              <p className='hover:text-[#e7bc08] font-semibold'>Listening</p>
              <div className='hover-elements '>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber1Filled color='#e7bc08' /> Beginner</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber2Filled color='#e7bc08' /> Elementary</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber3Filled color='#e7bc08' /> Pre-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber4Filled color='#e7bc08' /> Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber5Filled color='#e7bc08' /> Upper-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber6Filled color='#e7bc08' /> Advanced</p>
              </div>
            </div>

            <div className='hover-element'>
              <p className='hover:text-[#df1e26] font-semibold'>Reading</p>
              <div className='hover-elements '>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber1Filled color='#df1e26' /> Beginner</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber2Filled color='#df1e26' /> Elementary</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber3Filled color='#df1e26' /> Pre-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber4Filled color='#df1e26' /> Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber5Filled color='#df1e26' /> Upper-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber6Filled color='#df1e26' /> Advanced</p>
              </div>
            </div>

            <div className='hover-element'>
              <p className='hover:text-[#bb6233] font-semibold'>Writing</p>
              <div className='hover-elements '>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber1Filled color='#bb6233' /> Beginner</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber2Filled color='#bb6233' /> Elementary</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber3Filled color='#bb6233' /> Pre-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber4Filled color='#bb6233' /> Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber5Filled color='#bb6233' /> Upper-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber6Filled color='#bb6233' /> Advanced</p>
              </div>
            </div>

            <div className='hover-element'>
              <p className='hover:text-[#914e81] font-semibold'>Speaking</p>
              <div className='hover-elements '>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber1Filled color='#914e81' /> Beginner</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber2Filled color='#914e81' /> Elementary</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber3Filled color='#914e81' /> Pre-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber4Filled color='#914e81' /> Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber5Filled color='#914e81' /> Upper-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber6Filled color='#914e81' /> Advanced</p>
              </div>
            </div>

            <div className='hover-element'>
              <p className='hover:text-[#4fa434] font-semibold'>Exams</p>
              <div className='hover-elements '>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber1Filled color='#4fa434' /> Beginner</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber2Filled color='#4fa434' /> Elementary</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber3Filled color='#4fa434' /> Pre-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber4Filled color='#4fa434' /> Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TbHexagonNumber5Filled color='#4fa434' /> Upper-Intermediate</p>
                <p className='flex items-center gap-1 text-[#8e8e8e]'> <TbHexagonNumber6Filled color='#4fa434' /> Advanced</p>
              </div>
            </div>

            <div className='hover-element'>
              <p className='hover:text-[#3235e8] font-semibold'>IELTS</p>
              <div className='hover-elements '>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <MdHeadphones color='#3235e8' /> Listening</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <MdOutlineLibraryBooks color='#3235e8' /> Reading</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <RiSpeakLine color='#3235e8' /> Speaking</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TfiPencilAlt color='#3235e8' /> Writing</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <SiWikibooks color='#3235e8' /> Practice</p>
              </div>
            </div>


            <div className='hover-element'>
              <p className='hover:text-[#48b979] font-semibold'>Multilevel</p>
              <div className='hover-elements '>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <MdHeadphones color='#48b979' /> Listening</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <MdOutlineLibraryBooks color='#48b979' /> Reading</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <RiSpeakLine color='#48b979' /> Speaking</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <TfiPencilAlt color='#48b979' /> Writing</p>
                <p className='flex items-center gap-1 text-[#8e8e8e] mb-2'> <SiWikibooks color='#48b979' /> Practice</p>
              </div>
            </div>

          </div>
          <div className='flex gap-3 items-center relative'>
            <div className='cursor-pointer'>
              <BiSearchAlt size={25} className='text-white ' />
            </div>
            <button className='border-2 cursor-ppx-3 text-white rounded-2xl py-0.3 px-2'>Login</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar