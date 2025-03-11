
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const FaqPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">How do I track my order?</AccordionTrigger>
              <AccordionContent>
                You can track your order by logging into your account and visiting the "Orders" section. 
                Alternatively, you can use the tracking number provided in your shipping confirmation email.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">What is your return policy?</AccordionTrigger>
              <AccordionContent>
                We accept returns within 30 days of delivery. Items must be in their original condition 
                with tags attached. Please visit our Returns page for more detailed information.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">Do you ship internationally?</AccordionTrigger>
              <AccordionContent>
                Yes, we ship to most countries worldwide. Shipping times and costs vary by location. 
                You can view the shipping options available to your country during checkout.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">How can I contact customer service?</AccordionTrigger>
              <AccordionContent>
                You can reach our customer service team by email at support@essence.com, 
                by phone at (555) 123-4567, or through the contact form on our Contact page.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">Are your products sustainable?</AccordionTrigger>
              <AccordionContent>
                We're committed to sustainability. Many of our products are made from eco-friendly 
                materials, and we're continuously working to reduce our environmental impact 
                throughout our supply chain.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
