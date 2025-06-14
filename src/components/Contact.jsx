import { Instagram, Linkedin, Mail, Map, Phone, Send, Twitter } from "lucide-react";

import { cn } from "@/lib/utils"

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-11">
          <div className="flex flex-col justify-center h-full">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:fabiokdp8@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    fabiokdp8@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+16044994783"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (604) 499-4783
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Map className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Vancouver, BC, Canada
                  </a>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold m-6">Connect With Me</h3>

            <div className="pt-8">
              <div className="flex space-x-10 justify-center">
                <a
                  href="https://www.linkedin.com/in/fabiokallina/"
                  target="_blank"
                >
                  <Linkedin size={45} className="hover:text-primary transition-colors duration-300"/>
                </a>
                <a
                  href="https://www.x.com/fabiokallina/"
                  target="_blank"
                >
                  <Twitter size={45} className="hover:text-primary transition-colors duration-300"/>
                </a>
                <a
                  href="https://www.instagram.com/fabiokallina/"
                  target="_blank"
                >
                  <Instagram size={45} className="hover:text-primary transition-colors duration-300"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
