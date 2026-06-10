import { Product, Combo, BusinessConfig } from "./types";

export const businessConfig: BusinessConfig = {
  name: "Sabor Express",
  subdomain: "delivery.topbiolink.com.br",
  slogan: "Lanches • Açaí • Delivery",
  subtitle: "Seu lanche, açaí ou combo favorito direto no WhatsApp.",
  whatsappNumber: "5521969060505",
  instagramUser: "saborexpress.delivery",
  facebookUser: "saborexpress.delivery",
  address: "Rua Exemplo, 123 — Centro",
  cityState: "Nova Iguaçu — RJ",
  hours: "Terça a domingo: 18h às 23h",
  serviceType: "Retirada no local e entrega na região",
  deliveryFee: "Consultar pelo WhatsApp",
  googleMapsUrl: "https://maps.google.com/?q=Rua+Exemplo,+123+-+Centro,+Nova+Iguaçu+-+RJ",
};

export const categories = [
  { id: "all", name: "Todos" },
  { id: "lanches", name: "Lanches" },
  { id: "acai", name: "Açaí" },
  { id: "combos", name: "Combos" },
  { id: "porcoes", name: "Porções" },
  { id: "bebidas", name: "Bebidas" },
  { id: "promocoes", name: "Promoções" }
];

export const products: Product[] = [
  {
    id: "1",
    name: "X-Burger Clássico",
    category: "lanches",
    description: "Pão brioche selado, hambúrguer artesanal de 120g preparado na chapa, queijo muçarela derretido, alface americana fresca, tomate e nosso exclusivo molho especial da casa.",
    price: 18.90,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    tag: "Mais pedido"
  },
  {
    id: "2",
    name: "X-Tudo da Casa",
    category: "lanches",
    description: "Hambúrguer artesanal gigante completo com bacon crocante premium, ovo na chapa, queijo muçarela duplo, presunto fatiado, milho, alface, tomate e maionese artesanal da casa.",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
    tag: "Destaque"
  },
  {
    id: "3",
    name: "Batata Frita Média",
    category: "porcoes",
    description: "Batatas fritas super crocantes por fora e macias por dentro, temperadas com sal e páprica especial. Servidas quentinhas na porção média.",
    price: 14.90,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800",
    tag: "Promoção"
  },
  {
    id: "4",
    name: "Açaí 300ml",
    category: "acai",
    description: "Copo de açaí cremoso de altíssima qualidade direto do produtor, acompanhado de fatias de banana fresca, granola crocante e leite condensado original.",
    price: 15.90,
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?auto=format&fit=crop&q=80&w=800",
    tag: "Mais pedido"
  },
  {
    id: "5",
    name: "Açaí 500ml",
    category: "acai",
    description: "Copo grande de açaí cremoso especial, montado em camadas generosas. Escolha e adicione até 3 acompanhamentos da sua preferência para rechear.",
    price: 22.90,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80&w=800",
    tag: "Destaque"
  },
  {
    id: "6",
    name: "Combo Burger",
    category: "combos",
    description: "A clássica combinação perfeita: X-Burger artesanal, uma porção individual de batatas fritas crocantes e um refrigerante em lata geladíssimo.",
    price: 32.90,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800",
    tag: "Combo"
  },
  {
    id: "7",
    name: "Pastel de Carne",
    category: "lanches",
    description: "Pastel frito na hora com massa sequinha, extremamente crocante com bolhas, bem recheado com carne moída selecionada e temperada com temperos caseiros.",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800",
    tag: "Novo"
  },
  {
    id: "8",
    name: "Pastel de Queijo",
    category: "lanches",
    description: "Pastel crocante frito na hora com massa dourada e sequinha, recheado com queijo muçarela derretido que estica a cada mordida.",
    price: 9.90,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=800",
    tag: "Novo"
  },
  {
    id: "9",
    name: "Refrigerante Lata",
    category: "bebidas",
    description: "Refrigerante lata de 350ml super gelado (Coca-Cola, Guaraná Antarctica ou Fanta). Perfeito para acompanhar os seus lanches.",
    price: 5.90,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
    tag: "Bebida"
  },
  {
    id: "10",
    name: "Suco Natural",
    category: "bebidas",
    description: "Suco natural preparado na hora com frutas frescas selecionadas de alta qualidade. Consulte os deliciosos sabores disponíveis do dia com a nossa equipe.",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=800",
    tag: "Consulte"
  },
  {
    id: "11",
    name: "Porção de Frango",
    category: "porcoes",
    description: "Tiras de peito de frango crocantes, empanadas artesanalmente e fritas até dourarem, acompanhadas pelo nosso molho especial verde da lanchonete.",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&q=80&w=800",
    tag: "Promoção"
  },
  {
    id: "12",
    name: "Combo Açaí Duplo",
    category: "combos",
    description: "Para saborear em dupla: 2 copos de açaí cremoso de 300ml com deliciosos acompanhamentos selecionados (leite em pó, leite condensado e granola).",
    price: 28.90,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800",
    tag: "Combo"
  }
];

export const combos: Combo[] = [
  {
    id: "combo-1",
    name: "Combo Individual",
    description: "1 X-Burger Clássico + 1 Batata Frita individual sequinha + 1 Refrigerante Lata gelado 350ml.",
    price: 32.90,
    image: "https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&q=80&w=800",
    tag: "Mais Vendido"
  },
  {
    id: "combo-2",
    name: "Combo Casal",
    description: "2 X-Burgers Clássicos + 1 Porção Média de Batata Frita + 2 Refrigerantes Lata gelados 350ml.",
    price: 59.90,
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&q=80&w=800",
    tag: "Recomendado"
  },
  {
    id: "combo-3",
    name: "Combo Família",
    description: "4 X-Burgers Clássicos + 1 Porção de Batata Frita Grande + 1 Refrigerante Garrafa de 2 litros.",
    price: 109.90,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=800",
    tag: "Melhor Custo-Benefício"
  }
];

/**
 * Generates the WhatsApp API URL with a prefilled custom message
 * @param number WhatsApp business number
 * @param text The plain text message
 */
export function getWhatsappLink(number: string, text: string): string {
  const sanitized = number.replace(/\D/g, "");
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(text)}`;
}
