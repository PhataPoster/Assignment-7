import Image from 'next/image';
import facebookIcon from '../assets/facebook.png';
import twitterIcon from '../assets/twitter.png';
import instagramIcon from '../assets/instagram.png';



const Footer = () => {
    return (
        <div className='bg-[#244d3f] lg:px-50 pt-20 px-2 text-white'>
            <div className='flex flex-col  justify-center items-center gap-6 pb-10 text-center'>
                <div className=''>
                    <h1 className='text-5xl font-bold mb-4'>KeenKeeper</h1>
                    <p className='text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                </div>
                
                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold'>Social Links</h2>
                    <div className='flex gap-4'>
                        <div>
                            <Image src={facebookIcon}
                             alt="Facebook"
                             width={20}
                             height={20} />
                        </div>
                        <div>
                            <Image src={twitterIcon} alt="Twitter" width={20} height={20} />
                        </div>
                        <div>
                            <Image src={instagramIcon} alt="Instagram" width={20} height={20} />
                        </div>
                    </div>

                </div>
            </div>
            <div className='py-8 border-t border-gray-500 flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-4'>
                <div>
                    <p className='text-sm text-gray-400'>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className='flex gap-8'>
                    <p className='text-sm text-gray-400'>Privacy Policy</p>
                    <p className='text-sm text-gray-400'>Terms of Service</p>
                    <p className='text-sm text-gray-400'>Cookie</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;