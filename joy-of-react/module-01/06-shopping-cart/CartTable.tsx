import React from 'react';
import { type Item } from './App';

type CartTableProps = {
  items: Item[];
};

type CartTableItemProps = Pick<
  Item,
  'imageSrc' | 'imageAlt' | 'title' | 'price'
>;

function CartTable({ items }: CartTableProps) {
  return (
    <table className='shopping-cart'>
      <thead>
        <tr>
          <th></th>
          <th>Title</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <CartTableItem
            key={item.id}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            price={item.price}
          />
        ))}
      </tbody>
    </table>
  );
}

function CartTableItem({
  imageSrc,
  imageAlt,
  title,
  price,
}: CartTableItemProps) {
  return (
    <tr className='cart-row'>
      <td>
        <img className='product-thumb' src={imageSrc} alt={imageAlt} />
      </td>
      <td>{title}</td>
      <td>${price}</td>
    </tr>
  );
}

export default CartTable;
