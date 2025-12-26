'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function neurosalaah() {
    const handleCopy = () => {
        navigator.clipboard.writeText('NEUROSALAAH');
    };
    return (
        <section className='bg-white py-30 px-6'>
            <div className='max-w-7xl mx-auto'>
                <div className='bg-[#FFD6C3] rounded-[1.5rem] md:rounded-[2.5rem] pt-12 pb-4 px-5 md:px-20'>
                    <div className='grid md:grid-cols-2 gap-12 items-center'>
                        {/* Left Content */}
                        <div className=''>
                            <h2 className='text-[20px] md:text-[26px] lg:text-[30px] font-semibold text-gray-900 mb-1 leading-tight'>
                                Stuck despite hard work?
                            </h2>
                            <h1 className='text-[24px] md:text-[30px] lg:text-[35px] font-bold text-gray-900 mb-6 leading-tight'>
                                Get <span className='bg-amber-700 text-white rounded-tl-2xl rounded-br-2xl px-3 py-1'>mentorship from toppers</span>
                            </h1>

                            <p className='text-purple-dark text-[16px] md:text-[19px] lg:text-[22px] font-semibold mb-6 leading-relaxed'>
                                For NEET UG, PG & global exams
                            </p>

                            <div className='rounded-xl w-full bg-orange-50 p-2 flex flex-col sm:flex-row sm:justify-between gap-2 border-2 border-dashed border-orange-primary '>
                                <div>
                                    <p className='text-purple-dark text-[18px] md:text-[21px] lg:text-[24px] font-bold'>Use code: <span className='text-lg md:text-xl lg:text-2xl'>NEUROSALAAH</span></p>
                                </div>
                                <button onClick={handleCopy} className='flex items-center gap-2 cursor-pointer text-purple-primary'  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-copy" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z" />
                                    </svg>
                                    <p className='text-xs'>
                                        Copy
                                    </p>
                                </button>
                            </div>
                            <p className='font-semibold text-purple-dark mb-6'>Get flat 10% off <span className='text-[11px] md:text-[12px] lg:text-[13px] font-light'>(upto Rs. 50)</span></p>

                            {/* App Store Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4'>
                                <Link href='https://play.google.com/store/apps/details?id=com.neuroflip.neetpg' target='_blank' rel='noopener noreferrer' className=' text-white px-4 md:px-8 py-1 bg-purple-dark rounded-full font-light flex items-center gap-3 text-[18px] md:text-[22px] lg:text-[26px] items-center justify-center'>
                                    Find your mentor
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Mobile App Image */}
                        <div className='flex justify-center'>
                            <Image
                                src='/assets/salaahneuro.png'
                                alt='Mobile App'
                                width={450}
                                height={412}
                                className='w-full max-w-sm'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}