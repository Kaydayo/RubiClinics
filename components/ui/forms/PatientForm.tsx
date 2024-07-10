"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form
} from "@/components/ui/form"
import CustomFormField from "../../CustomFormField"
import { BiUser } from "react-icons/bi"
import { MdOutlineEmail } from "react-icons/md"
import SubmitButton from "../../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "../../../lib/validation"

export enum FormFieldType {
    INPUT = 'input',
    TEXTAREA = 'textarea',
    PHONE_INPUT = 'phoneInput',
    CHECKBOX = 'checkbox',
    DATE_PICKER = 'datePicker',
    SELECT = 'select',
    SKELETON = 'skeleton'
}


const PatientForm = () => {
    const [isLoading, setisLoading] = useState(false)
    const form = useForm<z.infer<typeof UserFormValidation>>({
        resolver: zodResolver(UserFormValidation),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    })


    function onSubmit(values: z.infer<typeof UserFormValidation>) {

        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header">Hi there 👋🏻</h1>
                    <p className="text-dark-700"> Schedule your first appointment</p>
                </section>
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="name"
                    label="Full name"
                    placeholder="Joh Does"
                    iconSrc={(<BiUser height={24} width={24} className='ml-2 mt-3' />)}
                    iconAlt="user"
                />
                <CustomFormField
                    fieldType={FormFieldType.INPUT}
                    control={form.control}
                    name="email"
                    label="Email"
                    placeholder="johndoes@gmail.com"
                    iconSrc={(<MdOutlineEmail height={24} width={24} className='ml-2 mt-3' />)}
                    iconAlt="email"
                />
                <CustomFormField
                    fieldType={FormFieldType.PHONE_INPUT}
                    control={form.control}
                    name="phone"
                    label="Phone number"
                    placeholder="+2348188331245"
                    iconSrc={(<MdOutlineEmail height={24} width={24} className='ml-2 mt-3' />)}
                    iconAlt="phone number"
                />
                <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
            </form>
        </Form>
    )
}

export default PatientForm