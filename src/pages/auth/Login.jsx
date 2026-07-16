import React from 'react'
import AuthLayout from './AuthLayout'

import Typography from '@/components/common/Typography'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

import MultiSvg from '@/components/common/graphic/MultiSvg'

import { User, Mail, Phone } from "lucide-react";
import { FaGoogle } from 'react-icons/fa'
import { FaTwitter } from "react-icons/fa";

import MetaMaskIcon from "@/assets/icons/MetaMask.svg";

const Sparkle = (<div>
  <svg
    width="457.0549509460955"
    height="579.9250733234868"
    viewBox="-76 -1 571 570"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className='rotate-[60deg]'
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M446.719 438.074C422.443 485.535 399.431 549.423 346.973 558.912C292.643 568.739 255.117 503.065 204.098 481.961C164.28 465.49 111.234 480.629 81.7548 449.2C52.2914 417.789 75.7158 363.83 56.9403 325.071C28.2868 265.92 -75.7653 229.707 -54.735 167.437C-34.197 106.624 71.4958 149.263 127.128 117.247C173.478 90.5719 180.094 -0.775563 233.522 1.54297C289.295 3.9633 294.828 93.5303 339.893 126.48C376.8 153.465 438.67 135.46 466.398 171.812C494.085 208.111 479.895 260.086 476.53 305.614C473.126 351.682 467.754 396.948 446.719 438.074Z" stroke="#BA6C40" strokeOpacity="0.3" strokeWidth="3" />
  </svg>
</div>);

export default function Login() {
  return (
    <AuthLayout>
      <div className="absolute left-0 top-0 w-full min-h-screen overflow-hidden">
        <MultiSvg
          className="left-[540px] top-[600px] opacity-[0.35] w-0 h-0"
          image={Sparkle}
          x={500}
          y={350}
          count={25}
          rotation={{ start: 0, end: -48, delta: -5 }}
          opacity={{ start: 0, end: 1 }}
          pivot="bottom-right"
        />
      </div>

      <div className="absolute w-[376px] right-[226px]">
        <Typography
          as="h1"
          size="4xl"
          font="SemiBold"
          weight="bold"
          className="leading-[120%] text-center"
          color='#372A2A'
        >
          Log in
        </Typography>

        <Typography
          as="p"
          size="base"
          font="Medium"
          weight="normal"
          color="#654657"
          className="leading-[140%] text-center mt-[25px]"
        >
          Provide necessary information to proceed with registration or sign up with social media
        </Typography>
        <div className="flex flex-col gap-[24px] apsolute right-[226px] mt-[40px]">
          <Input
            icon={User}
            placeholder="Username"
          />

          <Input
            icon={Mail}
            placeholder="Email"
            type="email"
          />

          <Input
            icon={Phone}
            placeholder="Phone Number (Optional)"
          />
          <Button
            text="Proceed"
            className='w-full text-center'
          />
          <Button
            text="I already have an account"
            className='w-full text-center'
            variant='secondary'
          />
        </div>

        <div className="flex mt-[55px] gap-4 justify-center">
          <Button
            height={67}
            variant='icon'
            icon={<FaGoogle size={36} />}
          />
          <Button
            height={67}
            variant='icon'
            icon={<img
              src={MetaMaskIcon}
              alt="MetaMask"
              className="w-9 h-9"
            />}
          />
          <Button
            height={67}
            variant='icon'
            icon={<FaTwitter size={36} />}
          />
        </div>
      </div>

    </AuthLayout>
  )
}
