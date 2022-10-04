interface ITitle {
    title?: string;
    children?: any;
}

interface ILink {
    href?: string;
    buttonText?: string;
}

interface IButton {
    buttonText: string;
    onClick: () => void;
}

interface IContainer {
    children: any;
}

function Link({ href, buttonText }: ILink) {
    return (
        <div>
            <a href={href}>{buttonText}</a>
        </div>
    )
}

function Button({ onClick, buttonText }: IButton) {
    return <button onClick={onClick}>{buttonText}</button>;
}

function Title({ title, children }: ITitle) {
    return <h1>{title} {children}</h1>;
}

function Container({ children }: IContainer) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {children}
        </div>
    )
}

export { Title, Link, Button, Container };
