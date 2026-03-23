import articlesData from "../../data/articles.json";
import { CardArticle } from "./CardArticle";
interface ArticlesProps {
  visible: number;
}

export const Articles = ({ visible }: ArticlesProps) => {
  const displayedArticles = articlesData.slice(0, visible);

  return (
    <div className="flex flex-wrap">
      {displayedArticles.map((article) => (
        <CardArticle
          name={article.name}
          price={article.price}
          img={article.img}
        />
      ))}
    </div>
  );
};
