import { z } from "zod";

export const SignUpValidation = z.object({
    name: z.string().min(2, {message: "Too shor",}),
    username:z.string().min(2,{message:'Aur bada hoga'}),
    email:z.string().email(),
    password:z.string().min(8,{message:'Too short'},)
    
  })