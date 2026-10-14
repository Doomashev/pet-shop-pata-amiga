import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Wheat, ChefHat, Heart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { categories, products, pageContent, pizzaPhotos, formatPrice, type MenuStyle, type PageKind, type Category, type Product } from "@/lib/menu-data";

type Props = { page: PageKind; style: MenuStyle; onStyleChange: (style: MenuStyle) => void };
const proposals: { value: MenuStyle; label: string; number: string }[] = [
  { value: "classic", label: "Clássica", number: "01" },
  { value: "editorial", label: "Editorial", number: "02" },
  { value: "contemporary", label: "Contemporânea", number: "03" },
];

export function BakeryMenu({ page, style, onStyleChange }: Props) {
  const content = pageContent[page];
  const [category, setCategory] = useState<Category>(content.defaultCategory);
  const [selected, setSelected] = useState<Product | null>(null);
  const scrollToMenu = () => document.getElementById("cardapio")?.scrollIntoView({ behavior: "smooth" });
  const visible = category === "Todos" ? products : products.filter((product) => product.category === category);

  return (
    <div className="bakery" data-style={style}>
      <div className="preview-bar">
        <div className="container preview-inner">
          <span className="preview-label">Santo Antônio Pães & Pizzas · Coleção de cardápios</span>
          <div className="style-picker" aria-label="Proposta visual">
            {proposals.map((proposal) => <Button key={proposal.value} variant="quiet" className="style-control" aria-pressed={style === proposal.value} onClick={() => onStyleChange(proposal.value)}><span className="style-dot" />{proposal.number} {proposal.label}</Button>)}
          </div>
        </div>
      </div>
      <header className="container masthead">
        <Link to="/" search={{ style }} className="wordmark" aria-label="Santo Antônio Pães & Pizzas — início"><span className="wordmark-name">Santo Antônio</span><span className="wordmark-sub">Pães & Pizzas</span></Link>
        <nav className="main-nav" aria-label="Cardápios">
          <Link to="/" search={{ style }} data-active={page === "bakery"}>Pães & pizzas</Link>
          <Link to="/confeitaria" search={{ style }} data-active={page === "cakes"}>Confeitaria</Link>
          <Link to="/cafe" search={{ style }} data-active={page === "cafe"}>Café & bebidas</Link>
        </nav>
        <Button variant="bakery" className="menu-cta" onClick={scrollToMenu}>Ver cardápio <ArrowDown /></Button>
      </header>

      <main>
        <section className="hero">
          <img src={content.image} className="hero-image" alt={content.imageAlt} width={1536} height={1024} fetchPriority="high" />
          <div className="container hero-content">
            <div className="eyebrow">{content.eyebrow}</div>
            <h1>Santo Antônio<span className="hero-brand-sub">Pães & Pizzas<span className="text-primary">.</span></span></h1>
            <p className="hero-subtitle">{content.subtitle}</p>
            <p className="hero-description">{content.description}</p>
            <Button variant="bakery" className="hero-button" onClick={scrollToMenu}>Explore nosso cardápio <ArrowRight /></Button>
          </div>
          <span className="hero-index">{content.number} / 03 · {content.label.toUpperCase()}</span>
        </section>

        <div className="quality-band"><div className="container quality-inner">
          <div className="quality-item"><Wheat /><span>Ingredientes selecionados</span></div>
          <div className="quality-item"><ChefHat /><span>O cuidado de fazer à mão</span></div>
          <div className="quality-item"><Heart /><span>Sabor que faz parte do seu dia</span></div>
        </div></div>

        <section className="container pizza-section" aria-labelledby="pizza-title">
          <div className="section-heading">
            <div><p className="section-kicker">Pães & pizzas</p><h2 id="pizza-title">Sabor para compartilhar<span className="text-primary">.</span></h2></div>
          </div>
          <div className="pizza-gallery">
            {pizzaPhotos.map((photo) => <img key={photo.image} src={photo.image} alt={photo.alt} loading="lazy" width={1536} height={1024} />)}
          </div>
        </section>

        <section className="container menu-section" id="cardapio">
          <div className="section-heading">
            <div><p className="section-kicker">{content.kicker}</p><h2>{content.menuTitle}<span className="text-primary">.</span></h2></div>
            <p className="section-note">Do primeiro café ao último pedaço.<br />Encontre o seu sabor na Santo Antônio Pães & Pizzas.</p>
          </div>
          <div className="category-tabs" aria-label="Categorias de produtos">
            {categories.map((item) => <Button key={item} variant="quiet" className="category-tab" aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</Button>)}
          </div>
          <div className="product-grid">
            {visible.map((product) => <article className="product-card" key={product.id}>
              {product.image && <div className="product-photo-wrap"><img src={product.image} alt={product.name} loading="lazy" width={1024} height={1024} className={`product-photo ${product.category === "Pães" ? "bread-photo" : ""}`} />{product.badge && <span className="product-badge">{product.badge}</span>}</div>}
              <p className="product-category">{product.category}</p>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-bottom"><div><span className="price">{formatPrice(product.price)}</span><span className="unit">/ {product.unit}</span></div><Button variant="quiet" size="icon" className="product-open" aria-label={`Ver detalhes de ${product.name}`} title={`Detalhes de ${product.name}`} onClick={() => setSelected(product)}><Plus /></Button></div>
            </article>)}
          </div>
          <p className="menu-disclaimer">Cardápio demonstrativo · Produtos, fotos e preços ilustrativos. Consulte a disponibilidade na loja.</p>
        </section>
      </main>
      <footer className="footer"><div className="container footer-inner"><span className="footer-brand">Santo Antônio Pães & Pizzas<span className="text-primary">.</span></span><span className="footer-copy">Pães, pizzas & confeitaria · Feito com carinho, servido com sabor.</span><span className="footer-copy">© {new Date().getFullYear()} Santo Antônio Pães & Pizzas</span></div></footer>
      <Dialog open={selected !== null} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="detail-content">
          {selected && <>
            {selected.image && <img className="detail-photo" src={selected.image} alt={selected.name} width={1024} height={1024} />}
            <p className="section-kicker">{selected.category}</p>
            <DialogTitle className="detail-title">{selected.name}</DialogTitle>
            <DialogDescription className="detail-description">{selected.description}</DialogDescription>
            <p><strong className="detail-price">{formatPrice(selected.price)}</strong><span className="unit">/ {selected.unit}</span></p>
            <p className="menu-disclaimer">Preço ilustrativo. Para informações sobre ingredientes e alérgenos, consulte a loja.</p>
          </>}
        </DialogContent>
      </Dialog>
    </div>
  );
}