import "./cardsale.css";

interface CardSaleProps{
    title: string,
    amount: number,
    urlImg: string
}

export const CardSale: React.FC<CardSaleProps> = (
    {amount, title, urlImg}
) => {
  return (
    <div className="dashboardPageCard-sale-item">
        <div className="dashboardPageCard-sale-item-info">
        <h6 className="dashboardPageCard-sale-item-info-title">
            Porsche {title}
        </h6>
        <span className="dashboardPageCard-sale-item-info-desc">
            <span className={amount < 0 ? "text-red-700": ""} style={{fontSize: "1.5em"}}>
                {amount} M
            </span>
            <img src={urlImg} alt={urlImg} />
        </span>
        </div>
    </div>
  )
}
