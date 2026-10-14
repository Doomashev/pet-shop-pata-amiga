import { createFileRoute } from "@tanstack/react-router";
import { BakeryMenu } from "@/components/bakery-menu";
import { validateMenuSearch } from "@/lib/menu-data";

export const Route = createFileRoute("/confeitaria")({
  validateSearch: validateMenuSearch,
  head: () => ({ meta: [
    { title: "Santo Antônio Pães & Pizzas | Bolos & doces" },
    { name: "description", content: "Conheça os bolos da Santo Antônio Pães & Pizzas: chocolate, cenoura, fubá e coco. Um pedaço de felicidade em cada receita." },
    { property: "og:title", content: "Santo Antônio Pães & Pizzas | Bolos & doces" },
    { property: "og:description", content: "Do chocolate intenso ao bolo caseiro. Descubra sua próxima pausa doce na Santo Antônio Pães & Pizzas." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Confeitaria,
});
function Confeitaria() {
  const { style } = Route.useSearch();
  const navigate = Route.useNavigate();
  return <BakeryMenu page="cakes" style={style} onStyleChange={(value) => navigate({ search: { style: value }, resetScroll: false })} />;
}