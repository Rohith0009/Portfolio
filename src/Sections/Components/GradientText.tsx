export default function GradientText ({text, className}: {text: string, className?: string}) {
    return (
        <span className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ${className}`}> {text} </span>
    )
}
