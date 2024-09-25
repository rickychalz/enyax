import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

// Ensure environment variables are defined
const EMAILJS_SERVICE_ID = "service_ixjgdee";
const EMAILJS_TEMPLATE_ID = "template_ekrw802";
const EMAILJS_PUBLIC_KEY = "4jyqkQoFOtTjmmN1Y";

if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
  console.error("EmailJS environment variables are not set");
}

const FormSchema = z.object({
  message: z.string().min(10, {
    message: "Message should be at least 10 characters.",
  }),
});

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      message: "",
    },
  });

 
  const onSubmit = async () => {
    if (
      !formRef.current ||
      !EMAILJS_SERVICE_ID ||
      !EMAILJS_TEMPLATE_ID ||
      !EMAILJS_PUBLIC_KEY
    ) {
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
        description: ` Your email has been sent.`,
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send. Please try again later.",
      });
    }
  };

  return (
    <div className="mt-6 mb-12 flex flex-col">
      <Card className="mt-4 shadow-none p-6 flex justify-between border-slate-200 bg-slate-100">
        <div className="flex flex-col w-full items-center">
          <CardHeader className="p-0 font-bold text-lg text-center mb-1">
            Lets make your dream project a reality!
          </CardHeader>
          <span className="mb-3">Drop me a message and lets discuss.</span>
          <a href="https://wa.me/+255784508094 ?text=Hi%20Erick">
            {" "}
            <Button className="w-48 bg-green-500">Chat on Whatsapp</Button>
          </a>
          <Separator className="w-full my-8"></Separator>
          <div className="flex flex-col items-center w-full">
          <span className="mb-4 font-light text-center">
            You can also drop your email and I'll get back to you.
          </span>
          <Form {...form}>
            <form
              ref={formRef}
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex w-full gap-2 max-w-sm items-center"
            >
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="example@email.com"
                        {...field}
                        className="w-full shadow-none h-10 border-none bg-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="h-10 w-24 bg-blue-500 ">
                Send
              </Button>
            </form>
          </Form>
          </div>
        </div>
      </Card>
    </div>
  );
}
