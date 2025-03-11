
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const ReturnsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Returns & Refunds</h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
              <p className="text-muted-foreground mb-4">
                We want you to be completely satisfied with your purchase. If you're not happy with your order, 
                you can return it within 30 days of delivery.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Items must be in their original condition with all tags attached</li>
                <li>Original packaging should be intact and included</li>
                <li>Proof of purchase is required (order number or receipt)</li>
                <li>Sale items can only be returned for store credit</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
              <ol className="list-decimal pl-5 space-y-4 text-muted-foreground">
                <li>
                  <p className="font-medium text-foreground">Initiate your return</p>
                  <p>Log into your account and visit the "Orders" section to initiate a return. Alternatively, 
                  contact our customer service team.</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">Package your items</p>
                  <p>Carefully pack the items in their original packaging along with the return form.</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">Ship your return</p>
                  <p>Use the prepaid shipping label provided or send the package to our returns address.</p>
                </li>
                <li>
                  <p className="font-medium text-foreground">Refund processing</p>
                  <p>Once we receive and inspect your return, we'll process your refund within 5-7 business days.</p>
                </li>
              </ol>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Refund Information</h2>
              <p className="text-muted-foreground mb-4">
                Refunds will be issued to the original payment method used for the purchase.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Credit/debit card refunds typically take 5-7 business days to process</li>
                <li>Store credit is issued immediately upon approval of your return</li>
                <li>Shipping costs are non-refundable unless the return is due to our error</li>
                <li>Items marked as "Final Sale" cannot be returned or exchanged</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about our return policy or need assistance with a return, 
                please contact our customer service team at <span className="text-foreground">support@essence.com</span> or 
                call us at <span className="text-foreground">(555) 123-4567</span>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReturnsPage;
