const  {z} =  require ("zod");

const signupSchema = z.object({
username: z
 .string({require_error: "Name is required"})
 .trim()
 .min(3, {message: "Name must be at least of 3 Character"})
 .max(255, {message: "Name must not be more than 255 character"}),
email: z
 .string({required_error: "Email is required"})
 .trim()        
 .email({message:"Invalid email address make true"})
 .min(3, {message: "Email must be at least of 3 character"})
 .max(255, {message: "Email must not be more than of 255 character"}),
phone: z
 .string({required_error: "phone is required"})
 .trim()
 .email({message:"Invalid email address"})
 .min(10, {message: "phone must be at least of 10 character"})
 .max(10, {message: "Email must not be more than of 10 character"}),
password:z
 .string({required_error: "Email is required"})
 .trim()
 .email({message:"Invalid email address"})
 .min(8, {message: "Email must be at least of 8 character"})
 .max(25, {message: "Email must not be more than of 25 character"}),
})

module.exports = signupSchema;