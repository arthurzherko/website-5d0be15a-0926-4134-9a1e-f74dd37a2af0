import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

interface SillyCardProps {
  title: string;
  description: string;
  content: string;
  sillyFact: string;
}

export function SillyCard({ title, description, content, sillyFact }: SillyCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="perspective-1000 h-full"
      animate={{ scale: isHovered ? 1.02 : 1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative preserve-3d h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        <Card className="backface-hidden h-full flex flex-col">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <Typography.P>{content}</Typography.P>
          </CardContent>
          <CardFooter>
            <Button onClick={() => setIsFlipped(true)}>
              Узнать глупый факт!
            </Button>
          </CardFooter>
        </Card>

        <Card 
          className="absolute inset-0 backface-hidden rotate-y-180 flex flex-col"
          onClick={() => setIsFlipped(false)}
        >
          <CardHeader>
            <CardTitle>Глупый факт!</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <Typography.P>{sillyFact}</Typography.P>
          </CardContent>
          <CardFooter>
            <Button onClick={() => setIsFlipped(false)}>
              Вернуться
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}