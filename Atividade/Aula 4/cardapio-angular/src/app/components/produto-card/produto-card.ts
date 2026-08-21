import { Component, input, output } from '@angular/core';
import { Produto } from '../../data/produtos';
import { formatarPreco } from '../../utils/formatar-preco';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.css',
})
export class ProdutoCard {
  readonly produto = input.required<Produto>();
  readonly adicionar = output<Produto>();

  // Método exposto ao template
  protected readonly formatarPreco = formatarPreco;
}
