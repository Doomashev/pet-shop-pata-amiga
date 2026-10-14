import bread from "@/assets/bakery.jpg";
import cake from "@/assets/cake.jpg";
import cheeseBread from "@/assets/cheese-bread.jpg";
import juice from "@/assets/juice.jpg";
import pizzaHero from "@/assets/pizza-hero.jpg";
import pizzaMargherita from "@/assets/pizza-margherita.jpg";

export const pizzaPhotos = [
  { image: pizzaHero, alt: "Pizza artesanal com queijo, pepperoni e manjericão" },
  { image: pizzaMargherita, alt: "Pizza margherita com mozzarella, tomate e manjericão fresco" },
];

export const styles = ["classic", "editorial", "contemporary"] as const;
export type MenuStyle = (typeof styles)[number];
export type PageKind = "bakery" | "cakes" | "cafe";
export const categories = ["Todos", "Pães", "Bolos", "Pães de queijo", "Sucos", "Refrigerantes"] as const;
export type Category = (typeof categories)[number];
export const validateMenuSearch = (search: Record<string, unknown>): { style: MenuStyle } => ({
  style: styles.find((style) => style === search["style"]) ?? "classic",
});
export type Product = { id: string; name: string; category: Category; description: string; price: number; unit: string; image?: string; badge?: string };
export const products: Product[] = [
  { id: "rustico", name: "Pão rústico", category: "Pães", description: "Fermentação natural, casca crocante e miolo macio.", price: 18.9, unit: "500 g", image: bread, badge: "Da casa" },
  { id: "chocolate", name: "Bolo de chocolate", category: "Bolos", description: "Massa de cacau com uma generosa cobertura de chocolate.", price: 12.9, unit: "fatia", image: cake, badge: "Favorito" },
  { id: "queijo", name: "Pão de queijo", category: "Pães de queijo", description: "Dourado por fora, macio por dentro. Com queijo de verdade.", price: 8.9, unit: "6 unidades", image: cheeseBread },
  { id: "laranja", name: "Suco de laranja", category: "Sucos", description: "Laranjas frescas espremidas, sem adição de açúcar.", price: 9.9, unit: "300 ml", image: juice },
  { id: "frances", name: "Pão francês", category: "Pães", description: "O clássico do café da manhã, com casquinha crocante.", price: 1.2, unit: "unidade" },
  { id: "integral", name: "Pão integral", category: "Pães", description: "Com grãos selecionados e sabor delicado.", price: 15.9, unit: "450 g" },
  { id: "croissant", name: "Croissant amanteigado", category: "Pães", description: "Camadas delicadas de massa e manteiga.", price: 7.9, unit: "unidade" },
  { id: "cenoura", name: "Bolo de cenoura", category: "Bolos", description: "Receita caseira com cobertura de chocolate.", price: 9.9, unit: "fatia" },
  { id: "fuba", name: "Bolo de fubá", category: "Bolos", description: "Leve, macio e com aquele sabor de café da tarde.", price: 7.9, unit: "fatia" },
  { id: "coco", name: "Bolo de coco", category: "Bolos", description: "Massa fofinha com coco e cobertura cremosa.", price: 10.9, unit: "fatia" },
  { id: "queijo-grande", name: "Pão de queijo grande", category: "Pães de queijo", description: "Uma porção generosa do nosso clássico mineiro.", price: 5.9, unit: "unidade" },
  { id: "queijo-recheado", name: "Pão de queijo recheado", category: "Pães de queijo", description: "Com recheio cremoso de requeijão.", price: 8.9, unit: "unidade" },
  { id: "maracuja", name: "Suco de maracujá", category: "Sucos", description: "Refrescante e preparado com polpa de fruta.", price: 8.9, unit: "300 ml" },
  { id: "abacaxi", name: "Abacaxi com hortelã", category: "Sucos", description: "Fruta e hortelã em uma combinação refrescante.", price: 9.9, unit: "300 ml" },
  { id: "cola", name: "Refrigerante cola", category: "Refrigerantes", description: "Tradicional ou zero açúcar. Servido gelado.", price: 6.5, unit: "lata 350 ml" },
  { id: "guarana", name: "Refrigerante guaraná", category: "Refrigerantes", description: "O sabor brasileiro para acompanhar seu lanche.", price: 6.5, unit: "lata 350 ml" },
  { id: "refrigerante-laranja", name: "Refrigerante de laranja", category: "Refrigerantes", description: "Sabor cítrico e refrescante.", price: 6.5, unit: "lata 350 ml" },
];
export const pageContent = {
  bakery: { label: "Pães & pizzas", subtitle: "O sabor de fazer à mão.", eyebrow: "Pães & pizzas · Feito com carinho", description: "Pães artesanais, pizzas e receitas que acolhem. Sabor para compartilhar em todos os momentos.", image: pizzaHero, imageAlt: "Pizza artesanal com queijo e pepperoni ao lado de pães rústicos", menuTitle: "Nosso cardápio", kicker: "Escolha seu momento favorito", number: "01", defaultCategory: "Todos" as Category },
  cakes: { label: "Confeitaria", subtitle: "Um pedaço de felicidade.", eyebrow: "Confeitaria · Delicadeza em cada receita", description: "Do chocolate intenso ao bolo caseiro. Sabores que transformam qualquer pausa em celebração.", image: cake, imageAlt: "Bolo de chocolate com cobertura cremosa", menuTitle: "Nossa confeitaria", kicker: "Doce na medida certa", number: "02", defaultCategory: "Bolos" as Category },
  cafe: { label: "Café & bebidas", subtitle: "Uma pausa com mais sabor.", eyebrow: "Sucos & lanches · Feito com carinho", description: "Um suco fresquinho, pão de queijo quentinho e tudo que combina com uma boa pausa.", image: juice, imageAlt: "Suco de laranja natural e frutas frescas", menuTitle: "Sua pausa favorita", kicker: "Frescor para acompanhar", number: "03", defaultCategory: "Sucos" as Category },
};
export const formatPrice = (price: number) => price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });