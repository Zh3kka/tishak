"use client";
import { Minus, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const SectionContact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Email sent successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Error sending email");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error sending email");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center mt-10 uppercase">
          Get in touch
        </h1>
        <Minus size={50} className="font-thin" />
        <a href="mailto:contact@danilatishkevich.com" aria-label="email">
          contact@danilatishkevich.com
        </a>
      </div>
      <hr className="w-full my-10 border-black border-2" />
      <div className="max-w-4xl mx-auto pb-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-black p-2"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-black p-2"
            required
          />
          <Input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border border-black p-2"
            required
          />
          <Textarea
            name="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-black p-2 h-32"
            required
          />
          <Button
            type="submit"
            className="bg-black text-white p-2 w-full relative"
            disabled={isLoading} // Отключаем кнопку при загрузке
          >
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <LoaderCircle
                  className="animate-spin text-white"
                  size={20} // Размер иконки
                />
              </div>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SectionContact;
