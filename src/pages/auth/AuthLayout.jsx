import Button from '@/components/common/Button';

import img_logo from '@/assets/images/logo/logo.png';
import { Link } from 'react-router-dom';

export default function AuthLayout({ children }) {
    return (
        <div className="auth-layout">
            <div className="auth-header flex px-[124px] py-[40px] relative z-[20]">
                <Link to="/" className="logo flex items-center h-[60px]">
                    <img 
                        src={img_logo} 
                        alt="Logo" 
                        className="w-[73.4117660522461px]"
                    />
                </Link>
                <div className="flex-grow"></div>
                <div className="flex auth-btn-group gap-[14px]">
                    <Button
                        text="Log in"
                        variant='ghost'
                    />
                    <Button
                        text="Sign Up"
                    />
                </div>
            </div>

            <img 
                src={img_logo} 
                alt="Logo" 
                className="absolute top-[258px] left-[148px] w-[383px] h-[383px] hidden lg:block"
            />

            <div className="w-full lg:w-7/12">
                {children}
            </div>
        </div>
    );
}