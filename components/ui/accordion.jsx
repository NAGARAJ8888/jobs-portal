"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { RxCrossCircled } from "react-icons/rx";
import { cn } from "@/lib/utils"

function Accordion({ ...props }) {
  return (
    <AccordionPrimitive.Root data-slot="accordion" {...props} />
  )
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}

function AccordionTrigger({ className, children, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          className
        )}
        onClick={() => setIsOpen((prev) => !prev)}
        {...props}
      >
        {children}
        {isOpen ? (
          <RxCrossCircled className="text-[#309689] size-8 cursor-pointer" />
        ) : (
          <RxCrossCircled className="text-[#309689] size-8 rotate-45 cursor-pointer" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
}
