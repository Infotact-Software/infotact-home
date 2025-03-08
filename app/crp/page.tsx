import React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CancellationRefundPolicy() {
  const policyItems = [
    {
      title: "Cancellation Timeframe",
      content:
        "Cancellations will be considered only if the request is made within 2-3 days of placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.",
    },
    {
      title: "Perishable Items",
      content:
        "PITABAS PRADHAN does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.",
    },
    {
      title: "Damaged or Defective Items",
      content:
        "In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 2-3 days of receipt of the products.",
    },
    {
      title: "Product Expectations",
      content:
        "In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 2-3 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.",
    },
    {
      title: "Warranty Claims",
      content:
        "In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.",
    },
    {
      title: "Refund Processing",
      content:
        "In case of any Refunds approved by the PITABAS PRADHAN, it'll take 3-4 days for the refund to be processed to the end customer.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl mt-12">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-2">Cancellation & Refund Policy</CardTitle>
          <CardDescription className="text-center text-sm">Last updated on Dec 24th 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            PITABAS PRADHAN believes in helping its customers as far as possible, and has therefore a liberal
            cancellation policy. Under this policy:
          </p>
          <Accordion type="single" collapsible className="w-full">
            {policyItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{item.title}</AccordionTrigger>
                <AccordionContent>
                  <p className="mt-2 text-muted-foreground">{item.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

