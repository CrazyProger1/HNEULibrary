interface Props {
  className?: string;
  children: React.ReactNode;
}

const Button = ({ className, children }: Props) => (
  <a className={className} href="/books">
    <button className="flex items-center gap-2 relative p-2 w-max rounded-lg transition-colors hover:bg-teal-50 duration-300 group cursor-pointer font-logo">
      {children}
      <span className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-black transition-all duration-500 ease-out animate-border-reveal"></span>
    </button>
  </a>
);

export default Button;
