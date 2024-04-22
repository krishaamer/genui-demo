import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const brandQuestions = [
  {
    heading: "我買的產品說明了什麼關於我？",
    message:
      "我買的產品說明了什麼關於我？製作一張表格列出與我選擇的品牌相關的個性特質",
  },
  {
    heading: "我買的品牌有多環保？",
    message: "我買的品牌有多環保？製作一張表格",
  },
  {
    heading: "顯示我的數位產品護照",
    message: "列出我購買的所有產品。製作一個表格並顯示我的數位產品護照",
  },
  {
    heading: "我買的產品從哪裡來？",
    message: "我買的產品從哪裡來？",
  },
];

export default function Brands({
  submitMessage,
  brandsData,
}: {
  submitMessage: (message: string) => void;
  brandsData: any[];
}) {
  return (
    <div>
      <h2 className="font-bold pb-4 pt-2 text-xl text-center">
        上個月你購買了這些品牌的產品
      </h2>
      <div className="flex flex-wrap gap-2">
        {brandsData.map((brand, idx) => (
          <Button
            key={idx}
            variant="ghost"
            className="h-auto p-1 text-base shadow-sm border border-slate-100 grow md:grow-0 text-center"
            onClick={async () => {
              submitMessage(
                `${brand}品牌的可持續性如何？有什麼更可持續的替代選擇？`
              );
            }}
          >
            <img src={`/brands/${brand}.jpg`} alt={`${brand} brand`} />
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {brandQuestions.map((msg, idx) => (
          <Button
            key={idx}
            variant="ghost"
            className="h-auto p-1 pr-2 text-base shadow-sm border border-slate-100 grow md:grow-0 text-left justify-start"
            onClick={async () => {
              submitMessage(msg.message);
            }}
          >
            <Badge variant="outline" className="m-1 mr-2 bg-amber-200">
              {idx + 1}
            </Badge>
            {msg.heading}
          </Button>
        ))}
      </div>
    </div>
  );
}
