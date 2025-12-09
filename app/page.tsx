import React from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { GrAssistListening } from 'react-icons/gr'
import { MdHeadphones, MdOutlineLibraryBooks } from 'react-icons/md'
import { RiSpeakLine } from 'react-icons/ri'
import { SiWikibooks } from 'react-icons/si'
import { TbHexagonNumber1Filled, TbHexagonNumber2Filled, TbHexagonNumber3Filled, TbHexagonNumber4Filled, TbHexagonNumber5Filled, TbHexagonNumber6Filled } from 'react-icons/tb'
import { TfiPencilAlt } from 'react-icons/tfi'
import Footer from './components/footer';
import Navbar from './components/navbar';

const page = () => {
  return (
    <div>
      <div className='home-section'>
        <Navbar />
        <div className='relative mt-45 text-white px-10 py-5'>
          <h1 className='text-6xl font-bold'>
            Inglizcha.uz <br />
            <span className="text-[#2596be] font-bold text-3xl">bilan Ingliz tilini o'rganish qulay!</span>
          </h1>
          <p className='text-2xl mt-5'>Grammatika darslari — mashqlar va sodda tushuntirishlar bilan. <br /> Grammatika jadvallari, transkripsiyali o`qish va tinglash testlari,<br /> yozish bo`yicha darslar, darhol javob tekshiruvi, xatolar bo`yicha <br /> aniq izohlar va bundan ham ko`proq imkoniyatlar!</p>

        </div>
      </div>
      <div>
        <h1 className='text-6xl text-center my-10'>What would you like to learn today?</h1>
      </div>

      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex  -m-4 gap-4">

              {/* card 1 */}
              <div className=" md:w-1/3 shadow-md hover:shadow-2xl duration-400 rounded-2xl ">
                <div className="h-full border-2 border-gray-200 rounded-2xl  border-opacity-60 overflow-hidden">
                  <img className=" h-70 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg  text-gray-900 mb-3 font-semibold">Grammar Lessons</h1>
                    <p className="leading-relaxed mb-3">Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson, and feedback for every single question!</p>
                    <div className="flex items-center flex-wrap ">
                      <button className='border py-3 px-10 rounded-md cursor-pointer'>Go to the lessons</button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>


              {/* card 2 */}
              <div className="rounded-2xl  md:w-1/3 shadow-md hover:shadow-2xl duration-400">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                  <img className=" h-70 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg  text-gray-900 mb-3 font-semibold">Grammar Lessons</h1>
                    <p className="leading-relaxed mb-3">Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson, and feedback for every single question!</p>
                    <div className="flex items-center flex-wrap ">
                      <button className='border py-3 px-10 rounded-md cursor-pointer'>Go to the lessons</button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className=" md:w-1/3 rounded-2xl  shadow-md hover:shadow-2xl duration-400">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                  <img className=" h-70 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg  text-gray-900 mb-3 font-semibold">Grammar Lessons</h1>
                    <p className="leading-relaxed mb-3">Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson, and feedback for every single question!</p>
                    <div className="flex items-center flex-wrap ">
                      <button className='border py-3 px-10 rounded-md cursor-pointer'>Go to the lessons</button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="flex  -m-4 gap-4 mt-8">

              {/* card 1 */}
              <div className="rounded-2xl  md:w-1/3 shadow-md hover:shadow-2xl duration-400">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                  <img className=" h-70 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg  text-gray-900 mb-3 font-semibold">Grammar Lessons</h1>
                    <p className="leading-relaxed mb-3">Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson, and feedback for every single question!</p>
                    <div className="flex items-center flex-wrap ">
                      <button className='border py-3 px-10 rounded-md cursor-pointer'>Go to the lessons</button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>


              {/* card 2 */}
              <div className="rounded-2xl  md:w-1/3 shadow-md hover:shadow-2xl duration-400">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                  <img className=" h-70 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg  text-gray-900 mb-3 font-semibold">Grammar Lessons</h1>
                    <p className="leading-relaxed mb-3">Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson, and feedback for every single question!</p>
                    <div className="flex items-center flex-wrap ">
                      <button className='border py-3 px-10 rounded-md cursor-pointer'>Go to the lessons</button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* card 3 */}
              <div className="rounded-2xl  md:w-1/3 shadow-md hover:shadow-2xl duration-400">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl  overflow-hidden">
                  <img className=" h-70 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg  text-gray-900 mb-3 font-semibold">Grammar Lessons</h1>
                    <p className="leading-relaxed mb-3">Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson, and feedback for every single question!</p>
                    <div className="flex items-center flex-wrap ">
                      <button className='border py-3 px-10 rounded-md cursor-pointer'>Go to the lessons</button>
                      <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>1.2K
                      </span>
                      <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                        <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>6
                      </span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
      </div>

      <div className='flex items-center gap-2 justify-between mx-6'>
        <div className="rounded-2xl  shadow-md hover:shadow-2xl duration-400">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className=" h-40 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
            <div className="p-2">

              <p className="leading-relaxed mb-3 font-light">The girl who saved 100 lives – A2 English Reading Test</p>
             
            </div>
          </div>
        </div>
        <div className=" shadow-md rounded-2xl  hover:shadow-2xl duration-400">
        </div>
        <div className=" shadow-md rounded-2xl  hover:shadow-2xl duration-400">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className=" h-40 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
            <div className="p-2">

              <p className="leading-relaxed mb-3 font-light">The girl who saved 100 lives – A2 English Reading Test</p>
              <div className="flex items-center flex-wrap ">

                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" shadow-md rounded-2xl  hover:shadow-2xl duration-400">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className=" h-40 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
            <div className="p-2">

              <p className="leading-relaxed mb-3 font-light">The girl who saved 100 lives – A2 English Reading Test</p>
              <div className="flex items-center flex-wrap ">

                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" shadow-md rounded-2xl  hover:shadow-2xl duration-400">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className=" h-40 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
            <div className="p-2">

              <p className="leading-relaxed mb-3 font-light">The girl who saved 100 lives – A2 English Reading Test</p>
              <div className="flex items-center flex-wrap ">

                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" shadow-md rounded-2xl  hover:shadow-2xl duration-400">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className=" h-40 w-full object-cover" src="https://www.test-english.com/img/test-english-home-Grammar-points.jpg" alt="blog" />
            <div className="p-2">

              <p className="leading-relaxed mb-3 font-light">The girl who saved 100 lives – A2 English Reading Test</p>
              <div className="flex items-center flex-wrap ">

                <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>1.2K
                </span>
                <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                  <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>6
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />


    </div>
  )
}

export default page