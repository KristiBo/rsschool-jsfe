interface StateDescription {
  search: string;
  sort: string;
  price: (number | string)[];
  quantity: (number | string)[];
  brand: string[];
  type: string[];
  color: string[];
  hand: string;
}

export default StateDescription;
