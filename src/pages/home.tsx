import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SillyHeader } from "@/components/silly-header";
import { SillyHero } from "@/components/silly-hero";
import { SillyCard } from "@/components/silly-card";
import { SillyFooter } from "@/components/silly-footer";
import { toast } from "sonner";

export function Home() {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleHeroAction = () => {
    setClickCount((prev) => prev + 1);
    
    if (clickCount < 3) {
      toast("Ой-ой!", {
        description: "Нажми ещё разок! Будет весело!",
      });
    } else if (clickCount === 3) {
      toast("Ура!", {
        description: "А теперь попробуй другие страницы!",
      });
      navigate("/silly");
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <SillyHeader />
      
      <main className="flex-1">
        <SillyHero
          title="Добро пожаловать на самый глупый сайт!"
          subtitle="Здесь нет ничего полезного, зато очень весело!"
          onActionClick={handleHeroAction}
        />

        <section className="container grid gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
          <SillyCard
            title="Глупая карточка #1"
            description="Эта карточка абсолютно бесполезна"
            content="Нажми на кнопку, чтобы узнать бесполезный факт!"
            sillyFact="Если бы коровы умели летать, им бы всё равно было лень это делать."
          />
          <SillyCard
            title="Ещё глупее карточка #2"
            description="Эта карточка ещё бесполезнее"
            content="И эта кнопка тоже ведёт к глупому факту!"
            sillyFact="Если бы пингвины носили шапки, они бы выглядели как крошечные бизнесмены."
          />
          <SillyCard
            title="Самая глупая карточка #3"
            description="Чемпион по бесполезности"
            content="Последний шанс узнать что-то глупое!"
            sillyFact="Если бы единороги существовали, им было бы сложно пользоваться общественным транспортом."
          />
        </section>
      </main>

      <SillyFooter />
    </div>
  );
}