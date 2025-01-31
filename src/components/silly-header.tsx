import { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import { motion } from "framer-motion";
import { PartyPopper } from "lucide-react";

export function SillyHeader() {
  const [isWiggling, setIsWiggling] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          <motion.div
            animate={{ rotate: isWiggling ? [0, -10, 10, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onMouseEnter={() => setIsWiggling(true)}
              onMouseLeave={() => setIsWiggling(false)}
            >
              <PartyPopper className="h-6 w-6 text-primary" />
              <Typography.Large>Глупый Сайт</Typography.Large>
            </Link>
          </motion.div>
          
          <nav className="flex items-center space-x-6">
            <Link to="/silly">
              <Button variant="ghost">Глупости</Button>
            </Link>
            <Link to="/very-silly">
              <Button variant="ghost">Очень глупости</Button>
            </Link>
            <Link to="/mega-silly">
              <Button variant="ghost">Мега глупости</Button>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}