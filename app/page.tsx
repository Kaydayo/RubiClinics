import Image from "next/image";
import PatientForm from "../components/ui/forms/PatientForm";
import Link from "next/link";


export default function Home() {
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
          <PatientForm />

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
        src="/assets/images/onboarding-img.jpg"
        height={900}
        width={1000}
        alt="patient"
        className="side-img  object-top max-w-[50%]"
      />
    </div>
  )
}