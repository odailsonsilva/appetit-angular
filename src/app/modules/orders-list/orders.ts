export interface OrdersFormat {
  day: string,
  total: string,
  todos_pedidos: TodosPedidosFormat[],
}

interface TodosPedidosFormat {
  id: number,
  nome: string,
  foto: string,
  pedido_infos: PedidoFormat[],
}

interface PedidoFormat{
  pedido: string,
  valor: string
}

export const orders: OrdersFormat[] = [
  {
    day: '13/05/2019',
    total: 'R$ 45,80',
    todos_pedidos: [
      {
        id: 1,
        nome: 'Marcel Batista',
        foto: '',
        pedido_infos: [
          {
            pedido: 'cuscuz com calabresa, suco de laranja.',
            valor: 'R$ 3,50'
           }
        ]
      },
      {
        id: 2,
        nome: 'Fernanda Siqueira',
        foto: '',
        pedido_infos: [
          {
            pedido: 'Iogurte desnatado com maçã. ',
            valor: 'R$ 7,90'
           }
        ]
      },
      {
        id: 3,
        nome: 'Luiz Oliveira',
        foto: '',
        pedido_infos: [
          {
            pedido: '2x bolo frito, café c/ leite.',
            valor: 'R$ 4,50'
           }
        ]
      },
    ]
  },
  {
    day: '09/05/2019',
    total: 'R$ 45,80',
    todos_pedidos: [
      {
        id: 1,
        nome: 'Marcel Batista',
        foto: '',
        pedido_infos: [
          {
            pedido: 'cuscuz com calabresa, suco de laranja.',
            valor: 'R$ 3,50'
           }
        ]
      },
      {
        id: 2,
        nome: 'Fernanda Siqueira',
        foto: '',
        pedido_infos: [
          {
            pedido: 'Iogurte desnatado com maçã. ',
            valor: 'R$ 7,90'
           }
        ]
      },
      {
        id: 3,
        nome: 'Luiz Oliveira',
        foto: '',
        pedido_infos: [
          {
            pedido: '2x bolo frito, café c/ leite.',
            valor: 'R$ 4,50'
           }
        ]
      },
    ]
  },
  {
    day: '08/05/2019',
    total: 'R$ 45,80',
    todos_pedidos: [
      {
        id: 1,
        nome: 'Marcel Batista',
        foto: '',
        pedido_infos: [
          {
            pedido: 'cuscuz com calabresa, suco de laranja.',
            valor: 'R$ 3,50'
           }
        ]
      },
      {
        id: 2,
        nome: 'Fernanda Siqueira',
        foto: '',
        pedido_infos: [
          {
            pedido: 'Iogurte desnatado com maçã. ',
            valor: 'R$ 7,90'
           }
        ]
      },
      {
        id: 3,
        nome: 'Luiz Oliveira',
        foto: '',
        pedido_infos: [
          {
            pedido: '2x bolo frito, café c/ leite.',
            valor: 'R$ 4,50'
           }
        ]
      },
    ]
  },

]
