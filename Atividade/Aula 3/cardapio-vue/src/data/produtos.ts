// Base de dados do cardápio (mesma lista usada nos 4 projetos da atividade)
export interface Produto {
  id: number
  nome: string
  descricao: string
  preco: number
  categoria: string
  emoji: string
}

export interface ItemCarrinho {
  produto: Produto
  quantidade: number
}

export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Espresso',
    descricao: 'Café curto e encorpado, extraído na hora.',
    preco: 6.5,
    categoria: 'Cafés',
    emoji: '☕',
  },
  {
    id: 2,
    nome: 'Cappuccino',
    descricao: 'Espresso, leite vaporizado e canela.',
    preco: 12.0,
    categoria: 'Cafés',
    emoji: '🥛',
  },
  {
    id: 3,
    nome: 'Mocha Gelado',
    descricao: 'Café, chocolate e gelo com chantilly.',
    preco: 14.5,
    categoria: 'Cafés',
    emoji: '🧋',
  },
  {
    id: 4,
    nome: 'Croissant',
    descricao: 'Massa folhada amanteigada, assada no dia.',
    preco: 9.0,
    categoria: 'Salgados',
    emoji: '🥐',
  },
  {
    id: 5,
    nome: 'Pão de Queijo',
    descricao: 'Porção com 4 unidades, servido quente.',
    preco: 8.5,
    categoria: 'Salgados',
    emoji: '🧀',
  },
  {
    id: 6,
    nome: 'Torta de Limão',
    descricao: 'Fatia com merengue maçaricado.',
    preco: 13.0,
    categoria: 'Doces',
    emoji: '🍰',
  },
  {
    id: 7,
    nome: 'Cookie de Chocolate',
    descricao: 'Crocante por fora e macio por dentro.',
    preco: 7.5,
    categoria: 'Doces',
    emoji: '🍪',
  },
  {
    id: 8,
    nome: 'Donut Glaceado',
    descricao: 'Cobertura de açúcar e granulado colorido.',
    preco: 8.0,
    categoria: 'Doces',
    emoji: '🍩',
  },
]

export const categorias: string[] = ['Todos', 'Cafés', 'Salgados', 'Doces']
