import { business } from "@/lib/business";
import { CallButton } from "./CallButton";

export function CallBanner({
  heading = "Ready for a fresh coat?",
  body = "Tell us about your project over the phone, then we'll come out, look at the space and give you an honest, written estimate — free of charge.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="section-y bg-sand">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="text-3xl sm:text-4xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{body}</p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <CallButton size="lg" showNumber={false} />
          <a
            href={business.phoneHref}
            className="font-display text-3xl font-semibold tracking-tight text-primary"
          >
            {business.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
