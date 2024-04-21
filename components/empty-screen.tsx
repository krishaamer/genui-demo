import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import High from "@/components/llm-polygon";
import Personal from "@/components/llm-personal";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TabBar from "./tab-bar";

export function EmptyScreen({
  submitMessage,
}: {
  submitMessage: (message: string) => void;
}) {
  const [brandsData, setBrandsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  useEffect(() => {
    setIsLoading(true); // Start loading
    fetch("/api/brands")
      .then((response) => response.json())
      .then((data) => {
        setBrandsData(Array.isArray(data.brandsData) ? data.brandsData : []);
        setIsLoading(false); // Stop loading after data is received
      })
      .catch((error) => {
        console.error("Failed to fetch brands", error);
        setIsLoading(false); // Stop loading on error
      });
  }, []);

  if (isLoading) {
    return <div className="mx-auto max-w-2xl px-4">Loading...</div>; // Loading indicator
  }

  return (
    <div className="mx-auto max-w-2xl px-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Avatar className="ring-1 ring-offset-2 ring-amber-950 cursor-pointer">
            <AvatarImage src="/images/avatar-2.jpg" alt="助手" />
            <AvatarFallback>助手</AvatarFallback>
          </Avatar>
        </TooltipTrigger>
        <TooltipContent>綠濾助手</TooltipContent>
      </Tooltip>
      <div className="rounded-lg border bg-background p-4 mb-4">
        <Personal />
      </div>
      <div className="rounded-lg border bg-background p-4 mb-4">
        <h2>The Stocks I Own</h2>
        <High />
      </div>
      <div className="rounded-lg border bg-background p-4 mb-4">
        <h2>我之前買過的品牌</h2>
        <div className="flex flex-wrap gap-2">
          {brandsData.map((brand, idx) => (
            <Button
              key={idx}
              variant="ghost"
              className="h-auto p-1 text-base shadow-sm border border-slate-100 grow md:grow-0 text-center"
              onClick={async () => {
                submitMessage(
                  `How sustainable is the ${brand} brand? What are some more sustainable alternatives?`
                );
              }}
            >
              <img src={`/brands/${brand}.jpg`} alt={`${brand} brand`} />
            </Button>
          ))}
        </div>
      </div>
      <div className="rounded-lg border bg-background">
        <TabBar submitMessage={submitMessage} />
      </div>
    </div>
  );
}
