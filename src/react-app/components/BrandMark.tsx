function publicPath(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}

export function BrandMark({ variant = "lockup" }: { variant?: "lockup" | "footer" }) {
  return (
    <a href="#home" className="flex items-center gap-3 no-underline" aria-label="Jetmir Grubi, home">
      <img
        src={publicPath("branding/logo-icon.svg")}
        alt=""
        width={variant === "lockup" ? 56 : 36}
        height={variant === "lockup" ? 56 : 36}
        className={variant === "lockup" ? "size-12 shrink-0 sm:size-14" : "size-9 shrink-0"}
      />
      {variant === "lockup" ? (
        <span className="display text-base font-semibold tracking-[0.14em] whitespace-nowrap sm:text-xl sm:tracking-[0.16em]">
          <span className="text-ink">JETMIR</span>
          <span className="wordmark-accent"> GRUBI</span>
        </span>
      ) : (
        <span className="display text-lg whitespace-nowrap text-ink">Jetmir Grubi</span>
      )}
    </a>
  );
}
