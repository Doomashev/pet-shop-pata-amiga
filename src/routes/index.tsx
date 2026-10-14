import { createFileRoute } from "@tanstack/react-router";
import { BusinessPage } from "@/components/business-page";
export const Route = createFileRoute("/")({
 head: () => ({meta:[
 {title:"Pata Amiga | Pet shop · Banho & tosa"},
 {name:"description",content:"Banho, tosa e cuidados para seu melhor amigo se sentir em casa."},
 {property:"og:title",content:"Pata Amiga | Pet shop · Banho & tosa"},
 {property:"og:description",content:"Banho, tosa e cuidados para seu melhor amigo se sentir em casa."},
 {property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}
 ]}), component:BusinessPage
});
