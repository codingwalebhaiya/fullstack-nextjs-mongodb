import {z} from "zod"

export const verifySchema = z.object({
    code:z.string().length(6,"Verfication code mus be 6 digits")
})