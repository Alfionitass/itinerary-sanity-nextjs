export type tooltip = {
    message: string | undefined;
    children: React.ReactNode
}

export default function Tooltip({ message, children}: tooltip) {
    return (
    <div className="group relative flex">
        {children}
        <span className="absolute top-10 scale-0 transition-all rounded-none bg-white p-2 text-xs text-gray-700 group-hover:scale-100 border border-gray-200">{message}</span>
    </div>
    )
}
