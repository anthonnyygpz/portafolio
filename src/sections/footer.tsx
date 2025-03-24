export const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-brown-500">
          © {new Date().getFullYear()} anthonyygpz. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
