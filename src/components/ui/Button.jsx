import { ArrowUpRight } from "lucide-react";

function Button({ children, variant = "dark", href = "#", className = "" }) {
  return (
    <a href={href} className={`button button-${variant} ${className}`}>
      <span>{children}</span>
      <ArrowUpRight size={17} />
    </a>
  );
}

export default Button;
