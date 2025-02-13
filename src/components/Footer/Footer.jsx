import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-r from-emerald-600 to-teal-500">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="flex flex-wrap -mx-4">
                    {/* Logo and Copyright Section */}
                    <div className="w-full px-4 mb-8 lg:mb-0 md:w-1/2 lg:w-4/12">
                        <div className="flex flex-col h-full">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <p className="text-sm text-gray-200 mb-6">
                                Empowering creativity through visual storytelling.
                            </p>
                            <div className="mt-auto">
                                <p className="text-sm text-gray-200">
                                    &copy; {new Date().getFullYear()} VisionaryPic. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    <div className="w-full px-4 lg:w-8/12">
                        <div className="flex flex-wrap">
                            {/* Company Section */}
                            <div className="w-full mb-8 sm:w-1/2 lg:w-1/3">
                                <h3 className="mb-6 text-base font-semibold text-gray-100">
                                    Company
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Affiliate Program
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Support Section */}
                            <div className="w-full mb-8 sm:w-1/2 lg:w-1/3">
                                <h3 className="mb-6 text-base font-semibold text-gray-100">
                                    Support
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Community
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Legal Section */}
                            <div className="w-full sm:w-1/2 lg:w-1/3">
                                <h3 className="mb-6 text-base font-semibold text-gray-100">
                                    Legal
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Terms of Service
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="inline-block text-sm text-gray-200 hover:text-white transition-colors duration-200" to="/">
                                            Cookie Policy
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer
