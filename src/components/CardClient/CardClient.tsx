import "./cardclient.css";

interface CardClientProps {
    name: string,
    email: string,
    amount: number,
    urlImg: string
}

export const CardClient: React.FC<CardClientProps> = ({
    amount, email, name, urlImg
}) => {
  return (
    <li className="py-3 sm:py-4">
        <div className="flex items-center">
            <div className="flex-shrink-0">
                <img className="w-8 h-8 rounded-full" src={urlImg} alt="Neil image" />
            </div>
            <div className="flex-1 min-w-0 ms-4">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {email}
                </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                ${amount} K
            </div>
        </div>
    </li>
  )
}
