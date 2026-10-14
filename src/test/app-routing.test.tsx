import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BusinessPage } from "@/components/business-page";
import { business, services } from "@/lib/business-data";
describe("Service catalog",()=>{it("filters services and prepares a demo summary",()=>{
 render(<BusinessPage/>); expect(screen.getByRole("heading",{name:business.brand,level:1})).toBeInTheDocument();
 const first=services[0]; if(!first)throw new Error("Missing service");
 fireEvent.click(screen.getByRole("button",{name:first.category,exact:true}));
 fireEvent.click(screen.getByRole("button",{name:`Ver detalhes de ${first.name}`}));
 fireEvent.click(screen.getByRole("button",{name:/Adicionar à seleção/}));
 fireEvent.click(screen.getByRole("button",{name:/Minha seleção/}));
 fireEvent.change(screen.getByLabelText("Seu nome"),{target:{value:"Cliente Teste"}});
 fireEvent.click(screen.getByRole("button",{name:/Preparar resumo/}));
 expect(screen.getByRole("status")).toHaveTextContent("nada foi enviado");
});});
