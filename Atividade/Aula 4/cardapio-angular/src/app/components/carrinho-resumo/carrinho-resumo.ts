import { Component, computed, input, output } from '@angular/core';
import { ItemCarrinho } from '../../data/produtos';
import { formatarPreco } from '../../utils/formatar-preco';

@Component({
  selector: 'app-carrinho-resumo',
  templateUrl: './carrinho-resumo.html',
  styleUrl: './carrinho-resumo.css',
})
export class CarrinhoResumo {
  readonly itens = input.required<ItemCarrinho[]>();
  readonly remover = output<number>();

  // computed: valor derivado dos signals
  protected readonly total = computed(() =>
    this.itens().reduce(
      (soma, item) => soma + item.produto.preco * item.quantidade,
      0,
    ),
  );

  protected readonly formatarPreco = formatarPreco;
}
