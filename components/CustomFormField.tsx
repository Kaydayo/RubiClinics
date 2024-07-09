"use client"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control } from "react-hook-form";
import { FormFieldType } from "./ui/forms/PatientForm";
import Image from "next/image";
import { BiUser } from "react-icons/bi";

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
const RenderField = ({field,props}:{field:any,props:CustomProps}) => {
    const {fieldType,iconAlt, iconSrc,placeholder} = props
   switch (props.fieldType) {
    case FormFieldType.INPUT:
        
        return(
            <div className="flex rounded-md border border-dark-500 bg-dark-400">
                {iconSrc && (<BiUser height={24} width={24} className='ml-2 mt-3'/>)}
                <FormControl>
                    <Input {...field} placeholder={placeholder} className="shad-input border-0"/>
                </FormControl>
            </div>

        )
   
    default:
        break;
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
                        <FormLabel>{label}</FormLabel>
                    )}

                    <RenderField field={field} props={props} />

                    <FormMessage className="shad-error"/>

                </FormItem>

              
            )}
        />
    )
}

export default CustomFormField