import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="w-full bg-[#37424e] mt-20 text-gray-300 py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    <div>
                        <a href="index.html">
                            <img src="https://www.test-english.com/img/logo-test-english-web-home.png"
                                alt="Test English"
                                className="w-44 h-auto mb-4" />
                        </a>
                        <div className="text-sm leading-relaxed">
                            <div className='mt-14'>
                            © Copyright  2016–2025 <br />
                            </div>
                            <Link href="https://www.test-english.com/about-us/"
                                target="_blank"
                                className="hover:text-[#50af31]  duration-500">test-english.com</Link>
                            <br />
                            All rights reserved.
                            <br />
                            <div className='mt-14'>
                            Made at <br />
                            <Link href="https://illadelsbous.com/"
                                target="_blank"
                                className="hover:text-[#50af31]  duration-500">illadelsbous.com</Link>
                                </div>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <div className='w-[0.2px] h-[260px] bg-white/30 mr-10'></div>
                        <div>

                            <h5 className="text-lg font-semibold mb-3">Levels</h5>
                            <ul className="space-y-2">
                                <li><a className="hover:text-white text-gray-500" href="level-a1/index.html">A1 Elementary</a></li>
                                <li><a className="hover:text-white text-gray-500" href="level-a2/index.html">A2 Pre-intermediate</a></li>
                                <li><a className="hover:text-white text-gray-500" href="level-b1/index.html">B1 Intermediate</a></li>
                                <li><a className="hover:text-white text-gray-500" href="level-b1-b2/index.html">B1 Upper-intermediate</a></li>
                                <li><a className="hover:text-white text-gray-500" href="level-b2/index.html">B2 Pre-advanced</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='w-[0.2px] h-[260px] bg-white/30 mr-10'></div>
                        <div>
                            <h5 className="text-lg font-semibold mb-3">Info</h5>
                            <ul className="space-y-2">
                                <li><a className="hover:text-white text-gray-500" href="about-us.html">About us</a></li>
                                <li><a className="hover:text-white text-gray-500" href="terms-of-use/index.html">Terms of Use</a></li>
                                <li><a className="hover:text-white text-gray-500" href="privacy-policy/index.html">Privacy Policy</a></li>
                                <li><a className="hover:text-white text-gray-500" href="cookie-policy/index.html">Cookie Policy</a></li>
                                <li><a className="hover:text-white text-gray-500" href="cookie-declaration/index.html">Cookie Declaration</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <div className='w-[0.2px] h-[260px] bg-white/30 mr-10'></div>
                        <div>
                            <h5 className="text-lg font-semibold mb-3">Get in Touch</h5>
                            <ul className="space-y-2 mb-4">
                                <li><a className="hover:text-white text-gray-500" href="contact-us/index.html">Contact us</a></li>
                                <li><a className="hover:text-white text-gray-500" href="contact-us/index.html">Request a topic</a></li>
                                <li><a className="hover:text-white text-gray-500" href="javascript: Cookiebot.renew()">Change cookie consent</a></li>
                            </ul>

                            <div className="flex space-x-4">
                                <a href="https://instagram.com/testenglishcom/" target="_blank">
                                    <img src="https://www.test-english.com/img/ico-instagram.svg" className="w-5 h-5" />
                                </a>
                                <a href="https://facebook.com/testenglishcom" target="_blank">
                                    <img src="https://www.test-english.com/img/ico-facebook.svg" className="w-5 h-5" />
                                </a>
                                <a href="https://x.com/testenglishcom" target="_blank">
                                    <img src="https://www.test-english.com/img/ico-x.svg" className="w-5 h-5" />
                                </a>
                                <a href="https://youtube.com/channel/UCHUG1E9lZVUf4RDvyMP0UeQ" target="_blank">
                                    <img src="https://www.test-english.com/img/ico-youtube.svg" className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                    </div>

                    <div className='flex items-center'>
                        <div className='w-[0.2px] mr-10 h-[260px] bg-white/30 text-transparent text-user-select-none'>0</div>
                        <div className="flex flex-col space-y-3">
                            <a className="w-60 bg-transparent border-2 duration-400 hover:bg-[#50af31] text-white py-2 px-4 rounded-lg text-center"
                                href="index4ecb.html?p=6251">Take a level test</a>
                            <a className="bg-transparent border-2 duration-400 hover:bg-[#50af31] text-white py-2 px-4 rounded-lg text-center w-60 "
                                href="work-in-progress/index.html" target="_blank">Upgrade to Pro</a>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer