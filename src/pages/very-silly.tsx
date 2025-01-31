import { useState } from "react";
import { motion } from "framer-motion";
import { SillyHeader } from "@/components/silly-header";
import { SillyFooter } from "@/components/silly-footer";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, PartyPopper, Laugh } from "lucide-react";

export function VerySilly() {
  const [isPartying, setIsPartying] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <SillyHeader />
      
      <main className="container flex-1 py-8">
        <motion.div
          animate={{
            rotate: isPartying ? [0, 360] : 0,
          }}
          transition={{
            duration: 2,
            repeat: isPartying ? Infinity : 0,
          }}
        >
          <Card className="p-8">
            <Typography.H1 className="text-center">
              Очень глупая страница!
            </Typography.H1>
            
            <div className="mt-8 flex flex-col items-center gap-4">
              <Typography.Lead>
                Эта страница настолько глупая, что даже не знает, что ей делать!
              </Typography.Lead>

              <Button
                size="lg"
                variant={isPartying ? "destructive" : "default"}
                onClick={() => setIsPartying(!isPartying)}
                className="group"
              >
                {isPartying ? (
                  <>
                    Хватит веселиться! <Laugh className="ml-2 animate-bounce" />
                  </>
                ) : (
                  <>
                    Начать веселье! <PartyPopper className="ml-2" />
                  </>
                )}
              </Button>
            </div>

            {isPartying && (
              <div className="mt-8 grid grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="flex aspect-square items-center justify-center rounded-lg border"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                      backgroundColor: [
                        "rgb(var(--primary))",
                        "rgb(var(--secondary))",
                        "rgb(var(--accent))",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    <Sparkles className="h-8 w-8 text-primary-foreground" />
                  </motion.div>
                ))}
              </div>
            )}
          </Card>
        </motion.div>
      </main>

      <SillyFooter />
    </div>
  );
}