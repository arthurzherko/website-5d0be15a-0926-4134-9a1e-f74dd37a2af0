import { useState } from "react";
import { motion } from "framer-motion";
import { SillyHeader } from "@/components/silly-header";
import { SillyFooter } from "@/components/silly-footer";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Silly() {
  const [bouncingElements, setBouncingElements] = useState<number[]>([]);

  const addBouncingElement = () => {
    setBouncingElements((prev) => [...prev, Date.now()]);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SillyHeader />
      
      <main className="container flex-1 py-8">
        <div className="relative min-h-[600px] overflow-hidden rounded-lg border p-8">
          <Typography.H1 className="text-center">
            Просто глупая страница
          </Typography.H1>
          
          <Typography.Lead className="text-center">
            Нажми на кнопку и смотри, что будет!
          </Typography.Lead>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              onClick={addBouncingElement}
              className="animate-pulse"
            >
              Добавить прыгающий элемент! <Sparkles className="ml-2" />
            </Button>
          </div>

          {bouncingElements.map((id) => (
            <motion.div
              key={id}
              className="absolute h-8 w-8 rounded-full bg-primary"
              initial={{ scale: 0 }}
              animate={{
                scale: [1, 1.2, 1],
                x: [0, Math.random() * 500, 0],
                y: [0, Math.random() * 400, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
              }}
            />
          ))}
        </div>
      </main>

      <SillyFooter />
    </div>
  );
}