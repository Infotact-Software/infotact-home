"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

interface ProcessStepProps {
  number: number
  title: string
  description: string
}

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="h-full flex flex-col ">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-lg font-bold">
              {number}
            </span>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p>{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
