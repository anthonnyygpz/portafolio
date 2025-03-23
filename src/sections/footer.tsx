export const Footer = () => {
  return (
    <footer className="py-8 bg-muted/50 border-t">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} TuNombre. Todos los derechos reservados.
        </p>
        <p className="text-sm text-muted-foreground mt-2"></p>
      </div>
    </footer>
  );
};
