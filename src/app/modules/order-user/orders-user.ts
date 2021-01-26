export interface OrdersUserFormat {
  day: string,
  pedido_infos: PedidoFormat[],
}

interface PedidoFormat{
  pedido: string,
  valor: string
}

export const orders: OrdersUserFormat[] = [
  {
    day: '13/05/2019',
    pedido_infos: [
      {
        pedido: 'cuscuz com calabresa, suco de laranja.',
        valor: 'R$ 3,50'
       }
    ],
  },
  {
    day: '09/05/2019',
    pedido_infos: [
      {
        pedido: 'cuscuz com calabresa, suco de laranja.',
        valor: 'R$ 3,50'
       }
    ],
  }
]
