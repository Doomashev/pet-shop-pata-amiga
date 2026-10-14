import { createFileRoute } from "@tanstack/react-router";
import { BakeryMenu } from "@/components/bakery-menu";
import { validateMenuSearch } from "@/lib/menu-data";

export const Route = createFileRoute("/cafe")({
  validateSearch: validateMenuSearch,
  head: () => ({ meta: [
    { title: "Santo Antônio Pães & Pizzas | Café, sucos & bebidas" },
    { name: "description", content: "Sucos, refrigerantes e pães de queijo na Santo Antônio Pães & Pizzas. Descubra as combinações para uma pausa com mais sabor." },
    { property: "og:title", content: "Santo Antônio Pães & Pizzas | Café, sucos & bebidas" },
    { property: "og:description", content: "Uma pausa com mais sabor: sucos frescos, bebidas geladas e pães de queijo." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Cafe,
});
function Cafe() {
  const { style } = Route.useSearch();
  const navigate = Route.useNavigate();
  return <BakeryMenu page="cafe" style={style} onStyleChange={(value) => navigate({ search: { style: value }, resetScroll: false })} />;
}