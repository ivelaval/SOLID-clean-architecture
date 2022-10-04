interface IProps {
    title: string;
    type: "default" | "withLinkButton" | "withNormalButton";
    href?: string;
    buttonText?: string;
    onClick?: () => void;
}

function Title({ title, type = 'default', href = '', buttonText = '', onClick = () => {} }: IProps) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1>{title}</h1>

            {type === 'withLinkButton' && (
                <div>
                    <a href={href}>{buttonText}</a>
                </div>
            )}

            {type === 'withNormalButton' && (
                <button onClick={onClick}>{buttonText}</button>
            )}
        </div>
    )
}

export default Title;
