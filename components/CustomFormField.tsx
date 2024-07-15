"use client"
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form";
import { FormFieldType } from "./forms/PatientForm";
import React from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Image from "next/image";

interface CustomProps {
    control: Control<any>;
    fieldType: FormFieldType;
    name: string;
    label?: string;
    placeholder?: string;
    iconSrc?: string;
    iconAlt?: string;
    disabled?: boolean;
    dateFormat?: string;
    showTimeSelect?: boolean;
    children?: React.ReactNode;
    renderSkeleton?: (field: any) => React.ReactNode;
}
const RenderField = ({ field, props }: { field: any, props: CustomProps }) => {
    switch (props.fieldType) {
        case FormFieldType.INPUT:

            return (
                <div className="flex rounded-md border border-dark-500 bg-dark-400">
                    {props.iconSrc && (
                        <Image
                            src={props.iconSrc}
                            width={24}
                            height={24}
                            alt={props.iconAlt || "icon"}
                            className="ml-2"
                        />)
                    }
                    <FormControl>
                        <Input  {...field} placeholder={props.placeholder} className="shad-input border-0" />
                    </FormControl>
                </div>

            )
        case FormFieldType.PHONE_INPUT:
            return (
                <FormControl>
                    <PhoneInput
                        defaultCountry="NG"
                        placeholder={props.placeholder}
                        international
                        withCountryCallingCode
                        value={field.value}
                        onChange={field.onChange}
                        className="input-phone"
                    />
                </FormControl>
            )
        default:
            return null
    }

}
const CustomFormField = (props: CustomProps) => {
    const { control, fieldType, name, label } = props
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem className="flex-1">
                    {fieldType !== FormFieldType.CHECKBOX && label && (
                        <FormLabel className="shad-input-label">{label}</FormLabel>
                    )}

                    <RenderField field={field} props={props} />

                    <FormMessage className="shad-error" />

                </FormItem>


            )}
        />
    )
}

export default CustomFormField