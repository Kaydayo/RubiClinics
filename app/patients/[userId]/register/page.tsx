import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RegisterForm from '../../../../components/forms/RegisterForm'

const Register = async ({params:{userId}}:SearchParamProps) => {
    const user = await getUser(userId)
    return (
        <div className="flex h-screen max-h-screen">
            {/* TOO: OTP verification | Passkey modal */}
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit"
                    />
                    <RegisterForm/>
                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text_left">
                            © 2024 RubiiClinic
                        </p>
                        <Link href="/?admin=true" className="text-green-500">
                            Admin
                        </Link>
                    </div>
                </div>

            </section>
            <Image
                src="/assets/images/pills.png"
                height={2000}
                width={2000}
                alt="patient"
                className="side-img grayscale max-w-[590px]"
            />
        </div>
    )
}

export default Register