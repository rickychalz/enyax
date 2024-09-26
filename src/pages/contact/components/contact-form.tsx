import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";


// Ensure environment variables are defined
const EMAILJS_SERVICE_ID = "service_ixjgdee";
const EMAILJS_TEMPLATE_ID = "template_ekrw802";
const EMAILJS_PUBLIC_KEY = "4jyqkQoFOtTjmmN1Y";

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error("EmailJS environment variables are not set");
}

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(10, {
    message: "Subject should be at least 10 characters.",
  }),
  message: z.string().min(10, {
    message: "Message should be at least 10 characters.",
  }),
});

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (!formRef.current || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Unable to send email. Please try again later.",
      });
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      toast({
        title: "Email sent",
        description: `Thanks ${data.username}, your message has been sent.`,
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send email. Please try again later.",
      });
    }
  };

  return (
    <div className="mb-12 max-w-xl w-full">
      <Form {...form}>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your Name" {...field} className="h-12 shadow-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email Address" {...field} className="h-12 shadow-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field}  className="h-12 shadow-none"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} className="shadow-none"  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="h-12 w-24">Send</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;