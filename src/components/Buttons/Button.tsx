import React from "react"
import { default as MUIButton } from "@mui/material/Button"

interface IButtonProps extends React.PropsWithChildren {
    variant: undefined | "success" | "danger"
}

const getColor = (type: string | undefined): string => {
    if (!type) return "#F79F79"

    if (type === "success") return "#028090"
    return "#ac1d1d"
}

const Button = ({ children, variant }: IButtonProps) => {
    return (
        <MUIButton sx={{ backgroundColor: getColor(variant), color: "white" }}>
            {children}
        </MUIButton>
    )
}

export default Button
