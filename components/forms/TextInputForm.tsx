import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

export default function TextInputForm({
    name,
    placeholder,
    label,
    type,
}: {
    name: string;
    placeholder?: string;
    label?: string;
    type?: React.HTMLInputTypeAttribute | undefined;
}) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    label={label}
                    value={field.value ?? ""}
                    onChange={field.onChange}
                />
            )}
        />
    );
}
