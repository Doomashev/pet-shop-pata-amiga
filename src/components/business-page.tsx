import { useState } from "react";
import { ArrowDown, ArrowRight, Check, Plus, Wrench, PawPrint, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { business, services, categories, type Service } from "@/lib/business-data";

export function BusinessPage() {
 const [category,setCategory]=useState("Todos");
 const [selected,setSelected]=useState<Service | null>(null);
 const [chosen,setChosen]=useState<string[]>([]);
 const [review,setReview]=useState(false);
 const [name,setName]=useState("");
 const [prepared,setPrepared]=useState(false);
 const visible=services.filter(item=>category==="Todos"||item.category===category);
 const items=services.filter(item=>chosen.includes(item.id));
 const price=(value:number)=>value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
 const Icon=business.kind==="garage"?Wrench:PawPrint;
 function add(item:Service){setChosen(old=>old.includes(item.id)?old:[...old,item.id]);setSelected(null);setPrepared(false);}
 return <div className={`business ${business.kind}`}>
  <header className="business-wrap business-header"><a className="business-mark" href="#"><Icon aria-hidden="true"/><span>{business.brand}<small>{business.category}</small></span></a><nav aria-label="Navegação"><a href="#servicos">Serviços</a><a href="#cuidado">Nosso cuidado</a></nav><Button onClick={()=>{setReview(true);setPrepared(false)}} variant="default">Minha seleção <span>{chosen.length}</span></Button></header>
  <main>
   <section className="business-hero"><img src={business.image} alt={business.imageAlt} width={1536} height={1024} fetchPriority="high"/><div className="business-wrap hero-copy"><p className="business-eyebrow">{business.category}</p><h1>{business.brand}</h1><p className="business-tagline">{business.tagline}</p><p className="business-intro">{business.intro}</p><Button size="lg" onClick={()=>document.getElementById("servicos")?.scrollIntoView({behavior:"smooth"})}>Conheça os serviços <ArrowDown/></Button></div></section>
   <div className="promise-band"><div className="business-wrap"><span><ShieldCheck/>{business.promises[0]}</span><span><Heart/>{business.promises[1]}</span><span><Check/>{business.promises[2]}</span></div></div>
   <section className="business-wrap services-section" id="servicos"><div className="business-heading"><div><p className="business-eyebrow">{business.sectionLabel}</p><h2>{business.sectionTitle}</h2></div><p>{business.sectionDescription}</p></div><div className="business-tabs" aria-label="Categorias">{categories.map(item=><Button key={item} variant="quiet" aria-pressed={category===item} onClick={()=>setCategory(item)}>{item}</Button>)}</div><div className="service-grid">{visible.map(item=><article key={item.id} className="service-item"><div className="service-top"><Icon/><span>{item.category}</span></div><h3>{item.name}</h3><p>{item.description}</p><div className="service-price"><span><small>A partir de</small><strong>{price(item.price)}</strong></span><Button variant="outline" size="icon" aria-label={`Ver detalhes de ${item.name}`} title={`Detalhes de ${item.name}`} onClick={()=>setSelected(item)}><Plus/></Button></div></article>)}</div><p className="business-disclaimer">Exemplo de portfólio · Marca fictícia, fotos e preços ilustrativos. Valores finais dependem da avaliação.</p></section>
   <section className="care-band" id="cuidado"><div className="business-wrap care-content"><div><p className="business-eyebrow">{business.careLabel}</p><h2>{business.careTitle}</h2></div><div>{business.care.map((item,index)=><div className="care-step" key={item.title}><span>0{index+1}</span><div><h3>{item.title}</h3><p>{item.description}</p></div></div>)}</div></div></section>
  </main><footer className="business-wrap business-footer"><strong>{business.brand}</strong><span>{business.category}</span><span>© {new Date().getFullYear()} · Exemplo demonstrativo</span></footer>
  <Dialog open={selected!==null} onOpenChange={open=>{if(!open)setSelected(null)}}><DialogContent>{selected&&<><p className="business-eyebrow">{selected.category}</p><DialogTitle>{selected.name}</DialogTitle><DialogDescription>{selected.description} {selected.details}</DialogDescription><p className="detail-value">A partir de {price(selected.price)}</p><Button onClick={()=>add(selected)} disabled={chosen.includes(selected.id)}>{chosen.includes(selected.id)?"Já selecionado":"Adicionar à seleção"}<Plus/></Button></>}</DialogContent></Dialog>
  <Dialog open={review} onOpenChange={setReview}><DialogContent><DialogTitle>Minha seleção</DialogTitle><DialogDescription>Estimativa ilustrativa. Nenhum agendamento será enviado.</DialogDescription>{items.length===0?<p>Nenhum serviço selecionado.</p>:<><ul className="selection-list">{items.map(item=><li key={item.id}><span>{item.name}<small>{price(item.price)}</small></span><Button variant="quiet" onClick={()=>{setChosen(old=>old.filter(id=>id!==item.id));setPrepared(false)}}>Remover</Button></li>)}</ul><strong>Estimativa: {price(items.reduce((sum,item)=>sum+item.price,0))}</strong><form onSubmit={event=>{event.preventDefault();setPrepared(true)}}><label htmlFor="customer-name">Seu nome</label><input id="customer-name" required minLength={2} value={name} onChange={event=>{setName(event.target.value);setPrepared(false)}}/><Button type="submit">Preparar resumo <ArrowRight/></Button></form>{prepared&&<p role="status" className="summary-result">{name}, seu resumo está pronto com {items.length} serviço(s). Simulação concluída; nada foi enviado.</p>}</>}</DialogContent></Dialog>
 </div>;
}
