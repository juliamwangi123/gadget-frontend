function CurrencyFormat({ value}) {
  const nairaFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return <span>{nairaFormatter.format(value)}</span>;
}

export default CurrencyFormat;
